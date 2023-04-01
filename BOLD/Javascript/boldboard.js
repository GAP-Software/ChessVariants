//GLOBAL VARIABLES
var aryBoard = [];
var boardWidth = 8;
var boardHeight = 8;

//Function to create the board.
sym.createBoard = function(){
    aryBoard.push("BLANK"); //blank place holder for "0"
    for(var cntr1=1; cntr1<=boardHeight; cntr1++){
        for(var cntr2=1; cntr2<=boardWidth; cntr2++){
                if(cntr1%2!=0){
                    if(cntr2%2!=0){
                        var boxColor="blueSquare";						
                    }else
                        var boxColor="greenSquare";
                }else{
                    if(cntr2%2!=0){
                        var boxColor="greenSquare";
                    }else
                        var boxColor="blueSquare";						
                }
                var objBox = sym.createChildSymbol("boardsquare", "board");					
            objBox.getSymbolElement().css({"position":"absolute",
                                                        "left" : (cntr2-1)*50+"px",
                                                        "top" : (cntr1-1)*50+"px"});
                objBox.$(boxColor).show();
                objBox.setVariable("id", ((cntr1-1)*boardHeight)+cntr2);
            objBox.setVariable("row", cntr1);
            objBox.setVariable("col", cntr2);
            objBox.setVariable("left", (cntr2-1)*50);
            objBox.setVariable("top", (cntr1-1)*50);
                objBox.setVariable("moved", 0);
                //Zombies are 1-16
                if(aryBoard.length < 17){
                objBox.$("zombie").show();
                objBox.setVariable("type","zombie");
            //blank spaces are 17-49
            }else if(aryBoard.length<49){
                objBox.setVariable("type","u");	         		
                }else if(aryBoard.length<58){
                    objBox.$("melee").show();
                    objBox.setVariable("type","melee");
                }else if(aryBoard.length<60){
                    objBox.$("pistol").show();
                    objBox.setVariable("type","pistol");						
                }else if(aryBoard.length<61){
                    objBox.$("shotgun").show();
                    objBox.setVariable("type","shotgun");						
                }else if(aryBoard.length<62){
                    objBox.$("rifle").show();
                    objBox.setVariable("type","rifle");						
                }else if(aryBoard.length<64){
                    objBox.$("pistol").show();
                    objBox.setVariable("type","pistol");						
                }else{
                    objBox.$("melee").show();
                    objBox.setVariable("type","melee");
                }
                aryBoard.push(objBox);
        }
    }
    $.each(aryBoard, function(count, aryItem){
        if(count>0){
            var objB = $(aryItem.getSymbolElement());
            objB.bind("click",function(){sym.determineMove(count);});					
        }
    })
};
