/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['strumpf-std']='<script src=\"http://use.edgefonts.net/strumpf-std.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'recZombies',
            type:'rect',
            rect:['584px','105px','148px','48px','auto','auto'],
            fill:["rgba(255,255,255,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"],
            c:[
            {
               id:'recZombieScore',
               type:'rect',
               rect:['-1px','48px','148px','48px','auto','auto'],
               fill:["rgba(255,255,255,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"],
               c:[
               {
                  id:'txtZombieScore',
                  type:'text',
                  rect:['4px','4px','140px','40px','auto','auto'],
                  text:"16",
                  align:"center",
                  font:['strumpf-std',34,"rgba(34,75,1,1.00)","normal","none","normal"]
               }]
            },
            {
               id:'txtZombies',
               type:'text',
               rect:['4px','4px','140px','40px','auto','auto'],
               text:"Zombies",
               align:"center",
               font:['strumpf-std',36,"rgba(34,75,1,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'board',
            type:'rect',
            rect:['174px','108px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'recLevel',
            type:'rect',
            rect:['10px','411px','148px','48px','auto','auto'],
            fill:["rgba(255,255,255,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"],
            c:[
            {
               id:'recLevelNum',
               type:'rect',
               rect:['-1px','48px','148px','48px','auto','auto'],
               fill:["rgba(255,255,255,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"],
               c:[
               {
                  id:'txtLevelNum',
                  type:'text',
                  rect:['30px','4px','88px','auto','auto','auto'],
                  text:"1",
                  align:"center",
                  font:['strumpf-std',34,"rgba(78,59,4,1.00)","normal","none","normal"]
               },
               {
                  id:'imgLevelDown',
                  type:'image',
                  tag:'img',
                  rect:['114px','24px','30px','18px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"LevelDown.fw.png",'0px','0px']
               },
               {
                  id:'imgLevelUp',
                  type:'image',
                  tag:'img',
                  rect:['114px','6px','30px','18px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"LevelUp.fw.png",'0px','0px']
               }]
            },
            {
               id:'txtLevel',
               type:'text',
               rect:['4px','4px','140px','40px','auto','auto'],
               text:"Level",
               align:"center",
               font:['strumpf-std',36,"rgba(78,59,4,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'recHumans',
            type:'rect',
            rect:['10px','105px','148px','48px','auto','auto'],
            fill:["rgba(255,255,255,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"],
            c:[
            {
               id:'recHumanScore',
               type:'rect',
               rect:['-1px','48px','148px','48px','auto','auto'],
               fill:["rgba(255,255,255,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"],
               c:[
               {
                  id:'txtHumanScore',
                  type:'text',
                  rect:['4px','4px','140px','auto','auto','auto'],
                  text:"16",
                  align:"center",
                  font:['strumpf-std',34,"rgba(41,55,100,1.00)","normal","none","normal"]
               }]
            },
            {
               id:'txtHumans',
               type:'text',
               rect:['4px','4px','140px','40px','auto','auto'],
               text:"Humans",
               align:"center",
               font:['strumpf-std',36,"rgba(41,55,100,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'title',
            type:'rect',
            rect:['0','10','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'title',
            symbolName:'title'
         },
         {
            id:'board',
            symbolName:'board'
         }
         ]
      },
   states: {
      "Base State": {
         "${_txtHumans}": [
            ["style", "top", '4px'],
            ["style", "font-size", '36px'],
            ["style", "left", '4px'],
            ["color", "color", 'rgba(41,55,100,1.00)'],
            ["style", "height", '40px'],
            ["style", "font-style", 'normal'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '140px']
         ],
         "${_imgLevelDown}": [
            ["style", "top", '24px'],
            ["style", "height", '18px'],
            ["style", "left", '114px'],
            ["style", "width", '30px']
         ],
         "${_recHumanScore}": [
            ["style", "height", '48px'],
            ["style", "top", '48px'],
            ["style", "left", '-1px'],
            ["style", "width", '148px']
         ],
         "${_recHumans}": [
            ["style", "top", '105px'],
            ["style", "border-width", '1px'],
            ["style", "height", '48px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '10px'],
            ["style", "width", '148px']
         ],
         "${_recLevel}": [
            ["style", "top", '411px'],
            ["style", "left", '10px'],
            ["style", "height", '48px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '148px']
         ],
         "${_txtZombieScore}": [
            ["style", "top", '4px'],
            ["style", "width", '140px'],
            ["color", "color", 'rgba(34,75,1,1.00)'],
            ["style", "height", '40px'],
            ["style", "left", '4px'],
            ["style", "font-size", '34px']
         ],
         "${_recZombies}": [
            ["style", "top", '105px'],
            ["style", "border-width", '1px'],
            ["style", "height", '48px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '584px'],
            ["style", "width", '148px']
         ],
         "${_txtZombies}": [
            ["style", "top", '4px'],
            ["style", "font-size", '36px'],
            ["color", "color", 'rgba(34,75,1,1.00)'],
            ["style", "height", '40px'],
            ["style", "left", '4px'],
            ["style", "width", '140px']
         ],
         "${_txtLevelNum}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(78,59,4,1)'],
            ["style", "width", '88px'],
            ["style", "left", '30px'],
            ["style", "font-size", '34px']
         ],
         "${_txtLevel}": [
            ["style", "top", '4px'],
            ["style", "width", '140px'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(78,59,4,1)'],
            ["style", "height", '40px'],
            ["style", "left", '4px'],
            ["style", "font-size", '36px']
         ],
         "${_txtHumanScore}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(41,55,100,1.00)'],
            ["style", "font-size", '34px'],
            ["style", "left", '4px'],
            ["style", "width", '140px']
         ],
         "${_recZombieScore}": [
            ["style", "height", '48px'],
            ["style", "top", '48px'],
            ["style", "left", '-1px'],
            ["style", "width", '148px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '750px'],
            ["style", "height", '550px'],
            ["style", "overflow", 'hidden']
         ],
         "${_board}": [
            ["style", "top", '109px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '174px']
         ],
         "${_recLevelNum}": [
            ["style", "top", '48px'],
            ["style", "height", '48px'],
            ["style", "left", '-1px'],
            ["style", "width", '148px']
         ],
         "${_imgLevelUp}": [
            ["style", "height", '18px'],
            ["style", "top", '6px'],
            ["style", "left", '114px'],
            ["style", "width", '30px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid118", tween: [ "style", "${_board}", "top", '109px', { fromValue: '109px'}], position: 0, duration: 0 }         ]
      }
   }
},
"boardsquare": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [{},{},['0deg']],
      rect: ['0px','0px','50px','50px','auto','auto'],
      borderRadius: ['0px','0px','0px','0px'],
      boxShadow: ['',0,0,0,0,'rgba(0,0,0,0)'],
      id: 'tile',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/evenSquare.fw.png','0px','0px'],
      id: 'blueSquare',
      rect: ['0','0','50px','50px','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/oddSquare.fw.png','0px','0px'],
      id: 'greenSquare',
      rect: ['0','0','50px','50px','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['1px','1px','44px','44px','auto','auto'],
      stroke: [2,'rgba(7,148,9,1.00)','solid'],
      type: 'rect',
      id: 'move',
      opacity: 1,
      display: 'none',
      fill: ['rgba(19,248,3,0.00)']
   },
   {
      rect: ['1px','1px','44px','44px','auto','auto'],
      stroke: [2,'rgba(7,148,9,1.00)','solid'],
      type: 'rect',
      id: 'attack',
      opacity: 1,
      display: 'none',
      fill: ['rgba(19,248,3,0.00)']
   },
   {
      rect: ['0','0','50px','50px','auto','auto'],
      id: 'shotgun',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/shotgun.fw.png','0px','0px']
   },
   {
      rect: ['0','0','50px','50px','auto','auto'],
      id: 'rifle',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/rifle.fw.png','0px','0px']
   },
   {
      rect: ['0','0','50px','50px','auto','auto'],
      id: 'pistol',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/gun.fw.png','0px','0px']
   },
   {
      rect: ['0','0','50px','50px','auto','auto'],
      id: 'runner',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/runner.fw.png','0px','0px']
   },
   {
      rect: ['0','0','50px','50px','auto','auto'],
      id: 'melee',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/melee.fw.png','0px','0px']
   },
   {
      rect: ['0px','0px','50px','50px','auto','auto'],
      id: 'zombie',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/zombie.fw.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_attack}": [
            ["color", "background-color", 'rgba(25,248,9,0.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '6px'],
            ["style", "width", '38px'],
            ["style", "top", '1px'],
            ["style", "height", '38px'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(204,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "opacity", '1']
         ],
         "${_rifle}": [
            ["style", "display", 'none']
         ],
         "${_zombie}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '50px'],
            ["style", "overflow", 'hidden']
         ],
         "${_greenSquare}": [
            ["style", "display", 'none']
         ],
         "${_shotgun}": [
            ["style", "display", 'none']
         ],
         "${_melee}": [
            ["style", "display", 'none']
         ],
         "${_move}": [
            ["color", "background-color", 'rgba(27,251,11,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '40px'],
            ["style", "top", '3px'],
            ["style", "opacity", '1'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(44,204,0,0.00)'],
            ["style", "left", '3px'],
            ["style", "height", '40px']
         ],
         "${_pistol}": [
            ["style", "display", 'none']
         ],
         "${_blueSquare}": [
            ["style", "display", 'none']
         ],
         "${_runner}": [
            ["style", "display", 'none']
         ],
         "${_tile}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid36", tween: [ "style", "${_rifle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_move}", "height", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_attack}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid120", tween: [ "style", "${_blueSquare}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "style", "${_greenSquare}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${_attack}", "border-width", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid119", tween: [ "style", "${_runner}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "style", "${_melee}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_move}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_attack}", "width", '38px', { fromValue: '38px'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_shotgun}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid45", tween: [ "color", "${_move}", "border-color", 'rgba(44,204,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(44,204,0,0.00)'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_move}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "style", "${_zombie}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "style", "${_attack}", "height", '38px', { fromValue: '38px'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_attack}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "style", "${_pistol}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid49", tween: [ "style", "${_move}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_move}", "width", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "color", "${_move}", "background-color", 'rgba(27,251,11,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,251,11,1.00)'}], position: 0, duration: 0 }         ]
      }
   }
},
"HUD": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','1px','388px','13px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'divHUD',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(153,192,181,0)'],
      c: [
      {
         rect: ['368px','-1px','15px','15px','auto','auto'],
         id: 'imgHumans',
         fill: ['rgba(0,0,0,0)','images/gun.fw.png','0px','0px'],
         type: 'image',
         tag: 'img'
      },
      {
         font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','normal','none',''],
         id: 'txtNumHumans',
         text: '16',
         type: 'text',
         rect: ['348px','0px','15px','15px','auto','auto']
      },
      {
         font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','normal','none',''],
         type: 'text',
         align: 'center',
         id: 'txtPlayerMessage',
         text: 'Make your move.<br>',
         cursor: ['pointer'],
         rect: ['53px','0px','285px','15px','auto','auto']
      },
      {
         font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','normal','none',''],
         id: 'txtNumZombies',
         text: '16',
         type: 'text',
         rect: ['19px','0px','15px','15px','auto','auto']
      },
      {
         rect: ['3px','-1px','15px','15px','auto','auto'],
         id: 'imgZombies',
         fill: ['rgba(0,0,0,0)','images/zombie.fw.png','0px','0px'],
         type: 'image',
         tag: 'img'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_txtPlayerMessage}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "width", '285px'],
            ["style", "height", '15px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '53px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '390px']
         ],
         "${_imgZombies}": [
            ["style", "height", '15px'],
            ["style", "top", '-1px'],
            ["style", "left", '3px'],
            ["style", "width", '15px']
         ],
         "${_divHUD}": [
            ["style", "height", '13px'],
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "width", '388px']
         ],
         "${_imgHumans}": [
            ["style", "height", '15px'],
            ["style", "top", '-1px'],
            ["style", "left", '368px'],
            ["style", "width", '15px']
         ],
         "${_txtNumHumans}": [
            ["style", "top", '0px'],
            ["style", "height", '15px'],
            ["style", "width", '15px'],
            ["style", "left", '348px'],
            ["style", "font-size", '10px']
         ],
         "${_txtNumZombies}": [
            ["style", "top", '0px'],
            ["style", "height", '15px'],
            ["style", "font-size", '10px'],
            ["style", "left", '19px'],
            ["style", "width", '15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"board": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','400px','400px','auto','auto'],
      id: 'board',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(153,192,181,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_board}": [
            ["style", "top", '0px'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(153,192,181,0.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '402px'],
            ["style", "width", '402px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Intro": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['163px','0px','750px','550px','auto','auto'],
      id: 'introGroup',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(80,79,79,1.00)'],
      c: [
      {
         rect: ['-163px','200px','150px','150px','auto','auto'],
         id: 'zombiefw2',
         fill: ['rgba(0,0,0,0)','images/zombie.fw.png','0px','0px'],
         type: 'image',
         tag: 'img'
      },
      {
         id: 'reticle',
         type: 'group',
         rect: ['762px','90px','372','372','auto','auto'],
         c: [
         {
            rect: ['36px','36px','292px','292px','auto','auto'],
            borderRadius: ['50%','50%','50%','50%'],
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
            id: 'circle',
            stroke: [4,'rgba(253,11,11,1.00)','solid'],
            type: 'ellipse',
            fill: ['rgba(153,192,181,0)']
         },
         {
            rect: ['185px','0px','0px','370px','auto','auto'],
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
            id: 'verticle',
            stroke: [1,'rgb(253, 11, 11)','solid'],
            type: 'rect',
            fill: ['rgba(153,192,181,0)']
         },
         {
            type: 'rect',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
            rect: ['185px','0px','0px','370px','auto','auto'],
            id: 'horizontal',
            stroke: [1,'rgb(253, 11, 11)','solid'],
            transform: [{1:0,0:0},['90deg']],
            fill: ['rgba(153,192,181,0)']
         }]
      },
      {
         type: 'text',
         rect: ['0px','10px','750px','70px','auto','auto'],
         id: 'title',
         text: 'BOARD OF THE LIVING DEAD',
         align: 'center',
         font: ['strumpf-std',60,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      type: 'text',
      rect: ['509px','515px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'skip',
      cursor: ['pointer'],
      font: ['strumpf-std',30,'rgba(0,0,0,1)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_introGroup}": [
            ["color", "background-color", 'rgba(80,79,79,1.00)'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "left", '163px'],
            ["style", "top", '0px']
         ],
         "${_zombiefw2}": [
            ["style", "top", '200px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '150px'],
            ["style", "display", 'block'],
            ["style", "left", '-163px'],
            ["style", "width", '150px']
         ],
         "${_horizontal}": [
            ["style", "top", '0px'],
            ["style", "left", '185px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "border-width", '1px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_verticle}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-width", '1px'],
            ["style", "left", '185px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Text}": [
            ["style", "top", '515px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-family", 'strumpf-std'],
            ["style", "left", '509px'],
            ["style", "font-size", '30px']
         ],
         "${_circle}": [
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '36px'],
            ["style", "width", '292px'],
            ["style", "top", '36px'],
            ["style", "border-width", '4px'],
            ["color", "border-color", 'rgba(253,11,11,1.00)'],
            ["style", "height", '292px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '550px'],
            ["style", "width", '1297px']
         ],
         "${_reticle}": [
            ["style", "top", '90px'],
            ["style", "opacity", '1'],
            ["style", "left", '762px'],
            ["style", "overflow", 'visible']
         ],
         "${_title}": [
            ["style", "top", '10px'],
            ["style", "width", '750px'],
            ["style", "height", '70px'],
            ["style", "font-family", 'strumpf-std'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: true,
         timeline: [
            { id: "eid77", tween: [ "style", "${_reticle}", "left", '189px', { fromValue: '762px'}], position: 1750, duration: 750, easing: "easeOutBack" },
            { id: "eid112", tween: [ "style", "${_reticle}", "left", '762px', { fromValue: '189px'}], position: 4500, duration: 750, easing: "easeOutBack" },
            { id: "eid81", tween: [ "style", "${_zombiefw2}", "left", '300px', { fromValue: '-163px'}], position: 0, duration: 1000 },
            { id: "eid84", tween: [ "style", "${_zombiefw2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid93", tween: [ "color", "${_introGroup}", "background-color", 'rgba(80,79,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(80,79,79,1.00)'}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "color", "${_introGroup}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(80,79,79,1.00)'}], position: 3000, duration: 0 },
            { id: "eid101", tween: [ "color", "${_introGroup}", "background-color", 'rgba(80,79,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3110, duration: 0 },
            { id: "eid100", tween: [ "color", "${_introGroup}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(80,79,79,1.00)'}], position: 3750, duration: 1250 }         ]
      }
   }
},
"title": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['strumpf-std',60,'rgba(106,4,4,1.00)','normal','none','normal'],
      type: 'text',
      id: 'txtTitle',
      text: 'BOARD OF THE LIVING DEAD',
      align: 'center',
      rect: ['0px','0px','750px','70px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_txtTitle}": [
            ["style", "top", '0px'],
            ["style", "width", '750px'],
            ["style", "height", '70px'],
            ["color", "color", 'rgba(106,4,4,1.00)'],
            ["style", "font-family", 'strumpf-std'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '70px'],
            ["style", "width", '750px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-607160377");
