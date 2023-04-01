/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

			//GLOBAL VARIABLES
        	var aryBoard = [];
        	var boardWidth = 8;
        	var boardHeight = 8;
			
			var endOfGame="GameOn";
			var multiPlayer = 1;
			var playerTurn = 1;
			var playerLevel = 1;
			var zombieWorking = false;
			var playerReloading = 0;
			var loneShotgun = 0;
			var numHumans = 16;
			var numZombies = 16;
		
			var activePiece = 0;
			var zombieMoves = [];
			var lastTileNoise = 0;
			var tileMoves = {
				"1NN": (-boardWidth),
				"2NN": (-(boardWidth*2)),
				"3NN": (-(boardWidth*3)),
				"1NE": (-(boardWidth-1)),
				"2NE": (-((boardWidth-1)*2)),
				"3NE": (-((boardWidth-1)*3)),
				"1EE": (1),
				"2EE": (2),
				"3EE": (3),
				"1SE": (boardWidth+1),
				"2SE": ((boardWidth+1)*2),
				"3SE": ((boardWidth+1)*3),
				"1SS": (boardWidth),
				"2SS": (boardWidth*2),
				"3SS": (boardWidth*3),
				"1SW": (boardWidth-1),
				"2SW": ((boardWidth-1)*2),
				"3SW": ((boardWidth-1)*3),
				"1WW": (-1),
				"2WW": (-2),
				"3WW": (-3),
				"1NW": (-(boardWidth+1)),
				"2NW": (-((boardWidth+1)*2)),
				"3NW": (-((boardWidth+1)*3))
			};
			var findZombie = {
				//everything below causes a zombie to move south:
				1: (tileMoves["1EE"]),
				2: (tileMoves["2NN"]+tileMoves["1WW"]),
				3: (tileMoves["2NN"]+tileMoves["1EE"]),
				4: (tileMoves["2NN"]),
				//everything below causes a zombie to move west:
				5: (tileMoves["1NN"]),
				6: (tileMoves["2EE"]+tileMoves["1NN"]),
				7: (tileMoves["2EE"]+tileMoves["1SS"]),
				8: (tileMoves["2NE"]),
				9: (tileMoves["2SE"]),
				10: (tileMoves["2EE"]),
				//everything below causes a zombie to move north:
				11: (tileMoves["1WW"]),
				12: (tileMoves["2SS"]+tileMoves["1EE"]),
				13: (tileMoves["2SS"]+tileMoves["1WW"]),
				14: (tileMoves["2SS"]),
				//everything below causes a zombie to move east:
				15: (tileMoves["1SS"]),
				16: (tileMoves["2WW"]+tileMoves["1NN"]),
				17: (tileMoves["2WW"]+tileMoves["1SS"]),
				18: (tileMoves["2NW"]),
				19: (tileMoves["2SW"]),
				20: (tileMoves["2WW"]),
			};

	//Edge symbol: 'stage'
   (function(symbolName) {
          
		Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

			//FUNCTIONS:

			sym.highlightMe = function(id, type){
				var objB = $(aryBoard[id].getSymbolElement());
				sym.getSymbol(objB).$(type).show();
			};
			sym.unhighlight = function(strWhat){
				$.each(aryBoard, function(count, aryItem){
					if(count>0){
						var objB = $(aryItem.getSymbolElement());
						var objBType = sym.getSymbol(objB).getVariable("type");
						if(strWhat==="move" || strWhat==="all"){
							sym.getSymbol(objB).$("move").hide();						
						}
						if(strWhat==="attack" || strWhat==="all"){
							sym.getSymbol(objB).$("attack").hide();					
						}
					}
				})
			};

			sym.unMoveAll = function(){
				$.each(aryBoard, function(count, aryItem){
					if(count>0){
						var objB = $(aryItem.getSymbolElement());
						sym.getSymbol(objB).setVariable("moved",0);
					}
				})			
				zombieMoves.length=0;
			}
			sym.loneShotgunTest = function(){
				if(loneShotgun===0){
					loneShotgun=1;
					$.each(aryBoard, function(count, aryItem){
						if(count>0){
							var objB = $(aryItem.getSymbolElement());
							var objBType = sym.getSymbol(objB).getVariable("type");
							if(objBType!="u" && objBType!="zombie" && objBType!="shotgun"){
								loneShotgun=0;
							}
						}
					})			
				}
			}
			sym.determineEndOfGame = function(){
				if(endOfGame!="GameOn"){return};
				numHumans = 0;
				numZombies = 0;
				$.each(aryBoard, function(count, aryItem){
					if(count>0){
						var objB = $(aryItem.getSymbolElement());
						var objBType = sym.getSymbol(objB).getVariable("type");
						if(objBType==="zombie"){
							numZombies++;
						}
						if(objBType!="zombie" && objBType!="u"){
							numHumans++;
						}
					}
				});
				sym.$("txtZombieScore").html(numZombies);
				sym.$("txtHumanScore").html(numHumans);					
				if(numHumans>0 && numZombies>0){
					endOfGame="GameOn";
					if(numHumans===1){
						sym.loneShotgunTest();
					}
				}else	if(numZombies>0){
					endOfGame="Zombies Win!";
					alert("Game Over! " + endOfGame);
				}else{
					endOfGame="Humans Win!";
					alert("Game Over! " + endOfGame);
				}
			}

			//THESE FUNCTIONS DETERMINE THE AVAILABLE MOVES/ATTACKS THE PLAYER CAN MAKE.
			//It is called whenever the user clicks on a human tile.
			sym.determineMove = function(id){
				if(playerTurn!=0){
					//Get object.
					var objB = $(aryBoard[id].getSymbolElement());
					var objType = sym.getSymbol(objB).getVariable("type");
					if(objType==="shotgun" && playerReloading===2){
							alert("Shotgun needs to reload and can't be moved.");
					}else{
						//If activePiece is 0 it means the player doesn't have an active tile.
						//Or if they do have an active piece but clicked on an unoccupied space or zombie.
						if(activePiece===0 || (objType!="u" && objType!="zombie")){
							//Ensure the player is clicking on a human tile.
							if(objType!="u" && objType!="zombie"){
								if(playerReloading===1){
									alert("Shotgun needs to make a second attack.");
								}else{
									sym.unhighlight("all");				
									activePiece=id;
									var bolTest = true;
									//Determine movement/attack spaces and highlight them
									sym.findMovement(id);
									sym.findAttack(id, objType);							
								}
							}
						}else{
							var objFrom = $(aryBoard[activePiece].getSymbolElement());
							var objFromType = sym.getSymbol(objFrom).getVariable("type");				
							//If 'move' is visible, the user can move to this tile.
							if(sym.getSymbol(objB).$("move").is(":visible")){
								sym.playerMove(id);
							}
							if(sym.getSymbol(objB).$("attack").is(":visible")){
								if(objFromType==="melee"){
									sym.playerMove(id);
								}else{
									sym.playerAttack(id);						
								}											
							}
							sym.determineMove(id);				         	
						}
					}
				}else{
					if(playerTurn===0){
			         sym.$("txtPlayerMessage").html("Thinking...");
						for(var turnCntr=1;turnCntr<=playerLevel;turnCntr++){
							sym.zombieAI();
						}
						for(var moveCntr=0;moveCntr<zombieMoves.length;moveCntr=moveCntr+3){
							activePiece=zombieMoves[moveCntr];
							sym.findMovement(activePiece);
							if(zombieMoves[moveCntr+2]==="move"){
								sym.zombieMove(zombieMoves[moveCntr+1]);
							}else{
								sym.zombieAttack(zombieMoves[moveCntr+1]);								
							}
						}
						sym.unMoveAll();								
						playerTurn++;
						if(loneShotgun===1){
							playerTurn=0;
							playerReloading=0;
							sym.determineMove(id);
						}								
			         sym.$("txtPlayerMessage").html("Make your move.");
					}				
				}
			}
			sym.findMovement = function(id){
				var objFrom = $(aryBoard[activePiece].getSymbolElement());
				var objFromType = sym.getSymbol(objFrom).getVariable("type");				
				var objTo = $(aryBoard[id].getSymbolElement());
				var objToType = sym.getSymbol(objTo).getVariable("type");
				for(cntr=1;cntr<=4;cntr++){	
					if(objFromType==="melee" 
					|| objFromType==="shotgun"
					|| objFromType==="rifle"){
						switch(cntr){
							case 1:
								toID1 = (id+tileMoves["1NN"]);
								toID2 = (id+tileMoves["2NN"]);
								break;
							case 2:
								toID1 = (id+tileMoves["1EE"]);
								toID2 = (id+tileMoves["2EE"]);
								break;								
							case 3:
								toID1 = (id+tileMoves["1SS"]);
								toID2 = (id+tileMoves["2SS"]);
								break;
							case 4:
								toID1 = (id+tileMoves["1WW"]);
								toID2 = (id+tileMoves["2WW"]);
								break;								
						}
						bolTest = sym.checkTile(toID1);
						if(bolTest==="empty"){
							sym.highlightMe(toID1, "move");
							if(playerReloading!=1 && objFromType!="rifle"){
								bolTest = sym.checkTile(toID2);
								if(bolTest==="empty"){
									sym.highlightMe(toID2, "move");
								}								
							}
						}					
					}
					if(objFromType==="pistol" 
					|| objFromType==="rifle"){
						switch(cntr){
							case 1:
								toID1 = (id+tileMoves["1NE"]);
								toID2 = (id+tileMoves["2NE"]);
								break;
							case 2:
								toID1 = (id+tileMoves["1SE"]);
								toID2 = (id+tileMoves["2SE"]);
								break;								
							case 3:
								toID1 = (id+tileMoves["1SW"]);
								toID2 = (id+tileMoves["2SW"]);
								break;
							case 4:
								toID1 = (id+tileMoves["1NW"]);
								toID2 = (id+tileMoves["2NW"]);
								break;								
						}
						bolTest = sym.checkTile(toID1);
						if(bolTest==="empty"){
							sym.highlightMe(toID1, "move");
							if(objFromType!="rifle"){
								bolTest = sym.checkTile(toID2);
								if(bolTest==="empty"){
									sym.highlightMe(toID2, "move");
								}								
							}
						}					
					}
					if(objFromType==="zombie"){
						switch(cntr){
							case 1:
								//1 North (movement)
								toID1 = (id+tileMoves["1NN"]);
								//1 North East (attack)
								toID2 = (id+tileMoves["1NE"]);
								break;
							case 2:
								toID1 = (id+tileMoves["1EE"]);
								toID2 = (id+tileMoves["1SE"]);
								break;								
							case 3:
								toID1 = (id+tileMoves["1SS"]);
								toID2 = (id+tileMoves["1SW"]);
								break;
							case 4:
								toID1 = (id+tileMoves["1WW"]);
								toID2 = (id+tileMoves["1NW"]);
								break;								
						}
						bolTest = sym.checkTile(toID1);
						if(bolTest==="empty"){
							sym.highlightMe(toID1, "move");
						}					
						bolTest = sym.checkTile(toID2);
						if(bolTest!="empty" && bolTest!="edge" && bolTest!="zombie"){
							sym.highlightMe(toID2, "attack");
						}					
					}
				}
			}
			sym.findAttack = function(id,type){
				for(aCntr=1;aCntr<=4;aCntr++){	
					switch(type){
						case "melee":
							switch(aCntr){
								case 1:
									aID1 = (id+tileMoves["1NN"]);
									aID2 = (id+tileMoves["2NN"]);
									break;
								case 2:
									aID1 = (id+tileMoves["1EE"]);
									aID2 = (id+tileMoves["2EE"]);
									break;								
								case 3:
									aID1 = (id+tileMoves["1SS"]);
									aID2 = (id+tileMoves["2SS"]);
									break;
								case 4:
									aID1 = (id+tileMoves["1WW"]);
									aID2 = (id+tileMoves["2WW"]);
									break;								
							}
							bolTest = sym.checkTile(aID1);
							if(bolTest==="zombie"){
								sym.highlightMe(aID1,"attack");
							}else if(bolTest==="empty"){
								bolTest = sym.checkTile(aID2);
								if(bolTest==="zombie"){
									sym.highlightMe(aID2,"attack");
								}																	
							}
							break;
						case "pistol":
							switch(aCntr){
								case 1:
									aID1 = (id+tileMoves["1NN"]);
									aID2 = (id+tileMoves["2NN"]);
									break;
								case 2:
									aID1 = (id+tileMoves["1EE"]);
									aID2 = (id+tileMoves["2EE"]);
									break;								
								case 3:
									aID1 = (id+tileMoves["1SS"]);
									aID2 = (id+tileMoves["2SS"]);
									break;
								case 4:
									aID1 = (id+tileMoves["1WW"]);
									aID2 = (id+tileMoves["2WW"]);
									break;								
							}
							bolTest = sym.checkTile(aID1);
							if(bolTest==="zombie"){
								sym.highlightMe(aID1,"attack");
							}else if(bolTest==="empty"){
								bolTest = sym.checkTile(aID2);
								if(bolTest==="zombie"){
									sym.highlightMe(aID2,"attack");
								}																	
							}
							break;
						case "shotgun":
							switch(aCntr){
								case 1:
									aID1 = (id+tileMoves["1NW"]);
									aID2 = (id+tileMoves["1NN"]);
									aID3 = (id+tileMoves["1NE"]);
									break;
								case 2:
									aID1 = (id+tileMoves["1NE"]);
									aID2 = (id+tileMoves["1EE"]);
									aID3 = (id+tileMoves["1SE"]);
									break;
								case 3:
									aID1 = (id+tileMoves["1SE"]);
									aID2 = (id+tileMoves["1SS"]);
									aID3 = (id+tileMoves["1SW"]);
									break;
								case 4:
									aID1 = (id+tileMoves["1SW"]);
									aID2 = (id+tileMoves["1WW"]);
									aID3 = (id+tileMoves["1NW"]);
									break;
							}
							bolTest = sym.checkTile(aID1);
							if(bolTest==="zombie"){
								sym.highlightMe(aID1,"attack");
							}
							bolTest = sym.checkTile(aID2);
							if(bolTest==="zombie"){
								sym.highlightMe(aID2,"attack");
							}
							bolTest = sym.checkTile(aID3);
							if(bolTest==="zombie"){
								sym.highlightMe(aID3,"attack");
							}
							break;
						case "rifle":
							switch(aCntr){
								case 1:
									aID1 = (id+tileMoves["1NN"]);
									aID2 = (id+tileMoves["2NN"]);
									aID3 = (id+tileMoves["3NN"]);
									break;
								case 2:
									aID1 = (id+tileMoves["1EE"]);
									aID2 = (id+tileMoves["2EE"]);
									aID3 = (id+tileMoves["3EE"]);
									break;
								case 3:
									aID1 = (id+tileMoves["1SS"]);
									aID2 = (id+tileMoves["2SS"]);
									aID3 = (id+tileMoves["3SS"]);
									break;
								case 4:
									aID1 = (id+tileMoves["1WW"]);
									aID2 = (id+tileMoves["2WW"]);
									aID3 = (id+tileMoves["3WW"]);
									break;
							}
							bolTest = sym.checkTile(aID1);
							if(bolTest==="zombie"){
								sym.highlightMe(aID1,"attack");
							}else if(bolTest==="empty"){
								bolTest = sym.checkTile(aID2);
								if(bolTest==="zombie"){
									sym.highlightMe(aID2,"attack");
								}else if(bolTest==="empty"){
									bolTest = sym.checkTile(aID3);
									if(bolTest==="zombie"){
										sym.highlightMe(aID3,"attack");
									}																	
								}
							}
							break;
					}								
				}
			}
			sym.checkTile = function(id){
				//Function returns "edge" if player is at the edge of the board
				//or if they hit another occupied piece.
				//Make sure user isn't going off the top or bottom of the board!
				if(id>0 && id<65){
					var objTo = $(aryBoard[id].getSymbolElement());
					var objToCol = sym.getSymbol(objTo).getVariable("col");
					var objToType = sym.getSymbol(objTo).getVariable("type");
					var objFrom = $(aryBoard[activePiece].getSymbolElement());
					var objFromCol = sym.getSymbol(objFrom).getVariable("col");
					var objFromType = sym.getSymbol(objFrom).getVariable("type");
					//Make sure user isn't going off the side of the board!
					//If id (move to) is greater than activePiece (move from)
						//user is moving East or South
						//We checked South (id<65), so we just need to check East
						//If FromCol>ToCol it means the user would've wrapped around.
					//Else id (move to) is less than activePiece (move from)
						//user is moving West or North
						//We checked North (id>0), so we just need to check West
						//If FromCol<ToCol, it means the user would've wrapped around.
					if((objFromCol>6 && objToCol>2) || 
						(objFromCol<3 && objToCol<7) || 
						(objFromCol>2 && objFromCol<7)){
							if(objToType==="u"){
								return "empty";
							}else if(objToType==="zombie"){
								return "zombie";
							}else{
								return "human";
							}																									
					}else{
						return "edge";
					}
				}else{
					return "edge";
				}
			}
			//These functions are called when the player clicks an unoccupied or zombie space
			sym.playerMove = function(id){
				var objFrom = $(aryBoard[activePiece].getSymbolElement());
				var objFromType = sym.getSymbol(objFrom).getVariable("type");
				sym.getSymbol(objFrom).setVariable("type","u");
				sym.getSymbol(objFrom).$(objFromType).hide();
				var objTo = $(aryBoard[id].getSymbolElement());
				var objToType = sym.getSymbol(objTo).getVariable("type");					
				sym.getSymbol(objTo).setVariable("type",objFromType);
				if(objToType!="u"){
					sym.getSymbol(objTo).$(objToType).hide();					
					if(objToType==="zombie"){
						numZombies--					
						sym.$("txtNumZombies").html(numZombies);
						sym.$("txtNumHumans").html(numHumans);											
					}
				}
				sym.getSymbol(objTo).$(objFromType).show();
				if(objFromType!="shotgun"){
					playerReloading=0;
				}else if(playerReloading===1){
					playerReloading++
				}
				lastTileNoise=id;
				activePiece=0;
				sym.unhighlight("all");
				playerTurn++;
				if(playerTurn>multiPlayer){
					playerTurn=0;
				}
			}
			sym.playerAttack = function(id){
				var objFrom = $(aryBoard[activePiece].getSymbolElement());
				var objFromType = sym.getSymbol(objFrom).getVariable("type");
				var objTo = $(aryBoard[id].getSymbolElement());
				var objToType = sym.getSymbol(objTo).getVariable("type");					
				sym.getSymbol(objTo).setVariable("type","u");
				if(objToType!="u"){
					sym.getSymbol(objTo).$(objToType).hide();					
					sym.getSymbol(objTo).$("attack").hide();
					sym.determineEndOfGame();
				}
				if(objFromType!="shotgun"){
					lastTileNoise=activePiece;
					activePiece=0;
					sym.unhighlight("all");
					playerTurn++;
					if(playerTurn>multiPlayer){
						playerTurn=0;
					}
				}else if(playerReloading<1){
					playerReloading++;
					sym.unhighlight("move");
					sym.findMovement(activePiece);
				}else{
					lastTileNoise=activePiece;
					activePiece=0;
					playerReloading++;					
					sym.unhighlight("all");
					playerTurn++;
					if(playerTurn>multiPlayer){
						playerTurn=0;
					}
				}
			}

			//ZOMBIE Functions
			sym.zombieAI = function(){
				if(playerTurn===0){
					zombieWorking=false;
					sym.determineZombieAttack();
					sym.determineZombieMove_Sound();
					sym.determineZombieMove_Random();
				}				
			}
			sym.determineZombieAttack = function(){
				if(zombieWorking===false){
					//check for attack
					$.each(aryBoard, function(count, aryItem){
						if(count>0){
							activePiece=count;
							var objB = $(aryItem.getSymbolElement());
							var objType = sym.getSymbol(objB).getVariable("type");
							var objMoved = sym.getSymbol(objB).getVariable("moved");
							if(objType==="zombie" && objMoved===0){
								for(zCntr=1;zCntr<=4;zCntr++){	
									switch(zCntr){
										case 1:
											zID1 = (activePiece+tileMoves["1NE"]);
											break;
										case 2:
											zID1 = (activePiece+tileMoves["1SE"]);
											break;								
										case 3:
											zID1 = (activePiece+tileMoves["1SW"]);
											break;
										case 4:
											zID1 = (activePiece+tileMoves["1NW"]);
											break;								
									}
									bolTest = sym.checkTile(zID1);
									if(bolTest!="zombie" && bolTest!="empty" && bolTest!="edge"){
										zombieWorking=true;
										sym.getSymbol(objB).setVariable("moved",1);
										zombieMoves.push(activePiece);
										zombieMoves.push(zID1);
										zombieMoves.push("attack");
										return false;
									}					
								}
							}
						}
					})
				}
			}
			sym.determineZombieMove_Sound = function(){
				if(zombieWorking===false && lastTileNoise>0){
					//Find nearest zombie
					$.each(findZombie, function(count, aryItem){
						activePiece=lastTileNoise+aryItem;
						if(activePiece>0 && activePiece<=64){		
							bolTest = sym.checkTile(activePiece);
							var objB = $(aryBoard[activePiece].getSymbolElement());
							var objMoved = sym.getSymbol(objB).getVariable("moved");
							if(bolTest==="zombie" && objMoved===0){
								//Zombie found to the north, head south!
								if(count<=4){
									zID1=activePiece+tileMoves["1SS"];
								//Zombie found to the east, head west!
								}else if(count<=10){
									zID1=activePiece+tileMoves["1WW"];
								//Zombie found to the south, head north!
								}else if(count<=14){
									zID1=activePiece+tileMoves["1NN"];
								//Zombie found to the west, head east!
								}else{
									zID1=activePiece+tileMoves["1EE"];
								}
								bolTest = sym.checkTile(zID1);
								if(bolTest==="empty"){
									zombieWorking=true;
									sym.getSymbol(objB).setVariable("moved",1);
									zombieMoves.push(lastTileNoise+aryItem);
									zombieMoves.push(zID1);
									zombieMoves.push("move");
									return false;
								}					
							}
						}
					})
				}
			}
			sym.determineZombieMove_Random = function(){
				//No zombies near soundTile, move a random zombie
				if(zombieWorking===false){
					var rndmAryBoard = [];
					for(i=1;i<=64;i++){rndmAryBoard.push(i)}
					rndmAryBoard = rndmAryBoard.sort(function(){return 0.5-Math.random()});
					//find first movable zombie.
					$.each(rndmAryBoard, function(count, aryItem){
						if(aryItem!=0){
							var objB = $(aryBoard[aryItem].getSymbolElement());
							var objType = sym.getSymbol(objB).getVariable("type");
							var objMoved = sym.getSymbol(objB).getVariable("moved");
							if(objType==="zombie" && objMoved===0){
								activePiece=aryItem;
								for(zCntr=1;zCntr<=4;zCntr++){	
									switch(zCntr){
										case 1:
											zID1 = (activePiece+tileMoves["1SS"]);
											break;
										case 2:
											zID1 = (activePiece+tileMoves["1EE"]);
											break;								
										case 3:
											zID1 = (activePiece+tileMoves["1WW"]);
											break;
										case 4:
											zID1 = (activePiece+tileMoves["1NN"]);
											break;								
									}
									bolTest = sym.checkTile(zID1);
									if(bolTest==="empty"){
										zombieWorking=true;
										zombieMoves.push(activePiece);
										zombieMoves.push(zID1);
										zombieMoves.push("move");
										return false;
									}					
								}
								if(playerTurn!=0) return false;
							}
						}
					})
				}
			}
			sym.zombieMove = function(id){
				var objFrom = $(aryBoard[activePiece].getSymbolElement());
				sym.getSymbol(objFrom).setVariable("type","u");
				sym.getSymbol(objFrom).$("zombie").hide();
				var objTo = $(aryBoard[id].getSymbolElement());
				sym.getSymbol(objTo).setVariable("type","zombie");
				sym.getSymbol(objTo).setVariable("moved",1);
				sym.getSymbol(objTo).$("zombie").show();
//				lastTileNoise=id;
				sym.unhighlight("all");
				zombieWorking=false;
			}
			sym.zombieAttack = function(id){
				var objTo = $(aryBoard[id].getSymbolElement());
				var objToType = sym.getSymbol(objTo).getVariable("type");					
				sym.getSymbol(objTo).$(objToType).hide();					
				sym.getSymbol(objTo).setVariable("moved",1);
				sym.getSymbol(objTo).$("zombie").show();					
				sym.getSymbol(objTo).setVariable("type","zombie");
//				lastTileNoise=id;
				activePiece=0;
				sym.unhighlight("all");
				sym.determineEndOfGame();
				zombieWorking=false;
			}

			//BEGIN PROCESS CODING
			var objBox = sym.createChildSymbol("Intro", "Stage");
			objBox.getSymbolElement().css({"position":"absolute",
														"left" : "-163px",
														"top" : "0px"});
         sym.$("txtLevelNum").html(playerLevel);     
         sym.createBoard();		

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_imgLevelUp}", "click", function(sym, e) {
         // insert code for mouse click here
         if(playerLevel<numZombies){
         	playerLevel++;
	         sym.$("txtLevelNum").html(playerLevel);     
         }
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_imgLevelDown}", "click", function(sym, e) {
         // insert code for mouse click here
         if(playerLevel>1){
         	playerLevel--;
	         sym.$("txtLevelNum").html(playerLevel);    
         }         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'boardsquare'
   (function(symbolName) {   
   
   })("boardsquare");
   //Edge symbol end:'boardsquare'

   //=========================================================
   
   //Edge symbol: 'HUD'
   (function(symbolName) {   
   
   })("HUD");
   //Edge symbol end:'HUD'

   //=========================================================
   
   //Edge symbol: 'board'
   (function(symbolName) {   
   
   })("board");
   //Edge symbol end:'board'

   //=========================================================
   
   //Edge symbol: 'Intro'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         // insert code here// Delete an element that is an instance of a symbol
         // (getSymbol looks up the symbol object for a symbol instance element)
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         // insert code for mouse click here
         this.deleteSymbol();

      });
      //Edge binding end

   })("Intro");
   //Edge symbol end:'Intro'

   //=========================================================
   
   //Edge symbol: 'title'
   (function(symbolName) {   
   
   })("title");
   //Edge symbol end:'title'

})(jQuery, AdobeEdge, "EDGE-607160377");