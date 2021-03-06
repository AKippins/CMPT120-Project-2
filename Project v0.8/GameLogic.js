var score=0;
var hasVisited_1=false;
var hasVisited_2=false;
var hasVisited_3=false;
var hasVisited_4=false;
var hasVisited_5=false;
var hasVisited_6=false;
var hasVisited_7=false;
var hasVisited_8=false;
var hasVisited_9=false;
var playerHasNote=false;
var playerHasNewspaper=false;
var playerHasKey=false;
var playerHasPicture=false;

function init(){
  updateDisplay("You wake up in a room with 4 walls and no door, you see a desk with a note on it. All that you have is a Compass. ")
  updateDisplay(location0.description);
}

function showscore(){
  updateDisplay("Your Score Is " + score);
}  

function error_msg(){
  var msg = "That Is Not A Command Type Help For Command List"
  updateDisplay(msg);
}

function command_list_help(){
  var msg = "Move North: N, n, North, or north \nMove West: W, w, West, or west\nMove East: E, e, East, or east\nMove South: S, s, South, or south\nTake Item: Take, take\nRead Item: Read, read"
  updateDisplay(msg);
}

//disable button for extra credit
function disable_button_north(){
  switch(currentLocation){
    case 1:
    case 2:
    case 4:
    case 5:
    case 7:
    case 8: document.getElementById('btn1').disabled=true
    break;
    
    default:document.getElementById('btn1').disabled=false
  }
}  

function disable_button_west(){
  switch(currentLocation){
    case 1:
    case 2:
    case 3:
    case 8:
    case 6:document.getElementById('btn2').disabled=true
    break;
    
    default:document.getElementById('btn2').disabled=false
  }
}

function disable_button_east(){
  switch(currentLocation){
    case 1:
    case 4 && (!playerHasNote):
    case 3:
    case 6:
    case 7:
    case 8: document.getElementById('btn3').disabled=true
    break;
    
    default:document.getElementById('btn3').disabled=false
  }
}

function disable_button_south(){
  switch(currentLocation){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:document.getElementById('btn4').disabled=true
    break;
    
    default:document.getElementById('btn4').disabled=false
  }
}

function gettext(){
  var prompt = document.getElementById("textprompt");
    switch(prompt.value){
      case "N"    :
      case "n"    :
      case "North":
      case "north": movement("North");
      break;
   
      case "W"    :
      case "w"    :
      case "West" :
      case "west" : movement("West");
      break;
  
      case "E"    :
      case "e"    :
      case "East" :
      case "east" : movement("East");
      break;
 
      case "S"    :
      case "s"    :
      case "South":
      case "south": movement("South");
      break;
    
      case "Help" :
      case "help" : command_list_help();
      break;
  
      case "Score":
      case "score": showscore();
      break;
  
      case "Take Note":
      case "Take note":
      case "take Note":
      case "take note": take_items();
      break;
      
      case "Take Newspaper":
      case "Take newspaper":
      case "take Newspaper":
      case "take newspaper":take_items();
      break;
      
      case "Take Key":
      case "Take key":
      case "take Key":
      case "take key": take_items();
      break;
      
      case "Take Picture":
      case "Take picture":
      case "take Picture":
      case "take picture": take_items();
      break;
    
      case "Read Note":
      case "read note":
      case "Read note":
      case "read Note": read_items();
      break;
    
      default   :error_msg();
  }
} 


function take_items(item){
  var prompt = document.getElementById("textprompt");
    var msg="Taken"
      switch(prompt.value){
      case "Take Note":
      case "take note":
      case "Take note":
      case "take Note": playerHasNote=true;
                        updateDisplay(item0.description);
      break;
      
      case "Take Newspaper":
      case "take newspaper":
      case "Take newspaper":
      case "take Newspaper": playerHasNewspaper=true;
                             updateDisplay(item1.description);
      break;
      
      case "Take Key":
      case "take key":
      case "Take key":
      case "take Key": playerHasKey=true;
                       updateDisplay(item2.description);
      break;
      
      case "Take Picture":
      case "take picture":
      case "Take picture":
      case "take Picture": playerHasPicture=true;
                            updateDisplay(item3.description);
      break;
    
    default: var msg="You Cannot Take This"
  }
  updateDisplay(msg);
}

function read_items(item){
  var prompt = document.getElementById("textprompt");
    switch(prompt.value){
      case "Read Note":
      case "read note":
      case "Read note":
      case "read Note": updateDisplay(item0.description)
      break;
      
      case "Read Newspaper":
      case "read newspaper":
      case "Read newspaper":
      case "read Newspaper": updateDisplay(item1.description)
      break;
   
    default:
      var msg="You Cannot Read This"  
      updateDisplay(msg);
  }
}

function updateLocation(){
  switch(currentLocation){
    case 0: updateDisplay(location0.description);
    break;
    
    case 1: updateDisplay(location1.description);
            if (!hasVisited_1){
              score=score+5
            }
            hasVisited_1=true
    break;
    
    case 2: updateDisplay(location2.description);
            if (!hasVisited_2){
              score=score+5
            }
            hasVisited_2=true
    break;
    
    case 3: updateDisplay(location3.description);
            if (!hasVisited_3){
              score=score+5
            }
            hasVisited_3=true
    break;
    
    case 4: updateDisplay(location4.description);
            if (!hasVisited_4){
              score=score+5
            }
            hasVisited_4=true
    break;
    
    case 5: updateDisplay(location5.description);
            if (!hasVisited_5){
              score=score+5
            }
            hasVisited_5=true
    break;
   
    case 6: updateDisplay(location6.description);
            if (!hasVisited_6){
              score=score+5
            }
            hasVisited_6=true
    break;
   
    case 7: updateDisplay(location7.description);
            if (!hasVisited_7){
              score=score+5
            }
            hasVisited_7=true
    break;
   
    case 8: updateDisplay(location8.description);
            if (!hasVisited_8){
              score=score+5
            }
            hasVisited_8=true
    break;
   
    case 9: updateDisplay(location9.description);
            if (!hasVisited_9){
              score=score+5
            }
            hasVisited_9=true
    break;
   
    default: 
      var msg="Moving in that Direction isn't an option"
  } 
}

function displayInventory(){
  if (playerHasNote){
    updateDisplay("You have these items in your possession:" + "\n" + item0.name);
  } if (playerHasNewspaper){
    updateDisplay(item1.name);
  } if (playerHasKey){
    updateDisplay(item2.name);
  } if (playerHasPicture){
    updateDisplay(item3.name);
  } else {
      updateDisplay("You have these items in your possession:" + " Nothing");
  } 
  
}






