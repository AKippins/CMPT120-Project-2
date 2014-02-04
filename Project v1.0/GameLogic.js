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
var hasVisited_10=false;
var hasVisited_11=false;
var hasVisited_12=false;
var playerHasNote=false;
var playerHasNewspaper=false;
var playerHasKey=false;
var playerHasPicture=false;
var playerHasPortalGun=false;
var playerHasLightsaber=false;
var hasOpenedHatch=false; 
var hasOpenedSafe=false;

function init(){
  document.getElementById("tagame").value="You wake up in a room with 4 walls and no door, There is a light coming from the ceiling. You see a desk with a note on it. All that you have is a Compass." + "\n";
  //updateDisplay("You wake up in a room with 4 walls and no door, There is a light coming from the ceiling. You see a desk with a note on it. All that you have is a Compass.");
  updateDisplay(location0.description);
  currentLocation=0;
  document.getElementById('btn1').disabled=false
  document.getElementById('btn2').disabled=false
  document.getElementById('btn3').disabled=false
  document.getElementById('btn4').disabled=false
  score=0;
  hasVisited_1=false;
  hasVisited_2=false;
  hasVisited_3=false;
  hasVisited_4=false;
  hasVisited_5=false;
  hasVisited_6=false;
  hasVisited_7=false;
  hasVisited_8=false;
  hasVisited_9=false;
  hasVisited_10=false;
  hasVisited_11=false;
  hasVisited_12=false;
  playerHasNote=false;
  playerHasNewspaper=false;
  playerHasKey=false;
  playerHasPicture=false;
  playerHasPortalGun=false;
  playerHasLightsaber=false;
  hasOpenedHatch=false; 
  hasOpenedSafe=false;
}

function showscore(){
  updateDisplay("Your Score Is " + score);
}  

function error_msg(){
  var msg = "That Is Not A Command Type Help For Command List";
  updateDisplay(msg);
}

function command_list_help(){
  var msg = "Move North: N, n, North, or north \nMove West: W, w, West, or west\nMove East: E, e, East, or east\nMove South: S, s, South, or south\nTake Item: Take, take\nRead Item: Read, read\nOpen Object: Open, open\nReset Game: Reset, reset"
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
    case 3: document.getElementById('btn3').disabled=true
    break;

    case 4: if (!playerHasNote){
              document.getElementById('btn3').disabled=true
            } else {
              document.getElementById('btn3').disabled=false
            }
    break;
    
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

function cleartext(){
  document.getElementById("textprompt").value="";
}

function gettext(){
  var prompt = document.getElementById("textprompt");
    switch(prompt.value){
      case "N"    :
      case "n"    :
      case "North":
      case "north": movement(North);
                    cleartext();
      break;
   
      case "W"    :
      case "w"    :
      case "West" :
      case "west" : movement(West);
                    cleartext();
      break;
  
      case "E"    :
      case "e"    :
      case "East" :
      case "east" : movement(East);
                    cleartext();
      break;
 
      case "S"    :
      case "s"    :
      case "South":
      case "south": movement(South);
                    cleartext();
      break;
    
      case "Help" :
      case "help" : command_list_help();
                    cleartext();
      break;
  
      case "Score":
      case "score": showscore();
                    cleartext();
      break;
  
      case "Take Note":
      case "Take note":
      case "take Note":
      case "take note": if (currentLocation==1 && !playerHasNote){
                        take_items();
                        cleartext();
                        } else {
                          var msg="What are you trying to take, that isn't an item here?!?!?!?";
                          updateDisplay(msg);
                          cleartext();
                        }  
      break;
      
      case "Take Newspaper":
      case "Take newspaper":
      case "take Newspaper":
      case "take newspaper":if (currentLocation==6 && !playerHasNewspaper){
	                          take_items();
                            cleartext();
            							  } else {
            							    var msg="What are you trying to take, that isn't an item here?!?!?!?";
            							    updateDisplay(msg)
                              cleartext();
            							  }		
      break;
      
      case "Take Key":
      case "Take key":
      case "take Key":
      case "take key": if (currentLocation==7 && !playerHasKey){
                       take_items();
                       cleartext();
                       } else {
                         var msg="What are you trying to take, that isn't an item here?!?!?!?";
                         updateDisplay(msg);
                         cleartext();
                       }  
      break;
      
      case "Take Picture":
      case "Take picture":
      case "take Picture":
      case "take picture": if (currentLocation==8 && !playerHasPicture){
                           take_items();
                           cleartext();
                           } else {
                             var msg="What are you trying to take, that isn't an item here?!?!?!?";
                             updateDisplay(msg);
                             cleartext();
                           }  
      break;
    
      case "Take Portal Gun":
      case "take portal gun":
      case "Take portal gun":
      case "take Portal Gun": if (currentLocation==2  &&  hasOpenedHatch && !playerHasPortalGun){
                              take_items();
                              cleartext();
                              } else {
                                var msg="What are you trying to take, that isn't an item here?!?!?!?";
                                updateDisplay(msg);
                                cleartext();
                              }  
      break;
	  
	    case "Take Lightsaber":
      case "take lightsaber":
      case "Take lightsaber":
      case "take Lightsaber": if (currentLocation==8  &&  hasOpenedSafe && !playerHasLightsaber){
                              take_items();
                              cleartext();
                              } else {
                                var msg="What are you trying to take, that isn't an item here?!?!?!?";
                                updateDisplay(msg);
                                cleartext();
                              }  
      break;
	  
	    case "Read Note":
      case "read note":
      case "Read note":
      case "read Note": if (playerHasNote){
                          read_items();
                          cleartext();
                        } else {
                          var msg="What are you trying to read, that isn't an item here?!?!?!?";
                          updateDisplay(msg);
                          cleartext();
                        }
      break;
 
      case "Open Hatch":
      case "open hatch":
      case "Open hatch":
      case "open Hatch": if (currentLocation==2 && !hasOpenedHatch){
                           open_object();
                           cleartext();
                         } else {
                           var msg="What are you trying to open, that isn't an object here?!?!?!?";
                           updateDisplay(msg);
                           cleartext();
                         }
      break;

      case "Open Safe":
      case "open safe":
      case "Open safe":
      case "open Safe": if (currentLocation==8 && !hasOpenedSafe && playerHasKey){
                          open_object();
                          cleartext();
                        } else if (currentLocation==8 && !hasOpenedSafe && !playerHasKey){
                          var msg="I don't have a Key to open this with."
                          updateDisplay(msg);
                          cleartext();
                        } else {
                          var msg="What are you trying to open, that isn't an object here?!?!?!?";
                          updateDisplay(msg);
                          cleartext();
                        }
      break;

      case "Reset":
      case "reset":init();
                   cleartext();
      break;	  
	 
    	case "Yes":
	    case "yes":if (currentLocation==11){
                  updateDisplay(location12.description_2nd);
	                gameOver();
                  cleartext();
                 } else {
                  var msg="Yes? Yes What? What on Earth are you talking about???";
                  updateDisplay(msg);
                  cleartext();
                 }
	            
	    break;
	 
	    case "No":
	    case "no":if (currentLocation==11){
                  updateDisplay(location12.description);
	                updateDisplay(location12.description_3rd);
			            updateDisplay(location12.description_4th);
	                currentLocation=12;
			            gameOver();
                  cleartext();
                } else {
                  var msg="No? What do you mean No???";
                  updateDisplay(msg);
                  cleartext();
                }

	    break;
	 
      default   :error_msg();
                 cleartext();
  }
} 


function take_items(item){
  var prompt = document.getElementById("textprompt");
    var msg="Taken"
	  updateDisplay(msg);
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
	    case "take Newspaper":playerHasNewspaper=true;
            							  currentLocation=10;
            							  if ((playerHasLightsaber) && (playerHasPortalGun)){
            							    updateDisplay(location10.description_4th);
            							    currentLocation=11;
            			      		  updateDisplay(location11.description);
            		  					} else if (playerHasLightsaber){
            								  updateDisplay(location10.description_3rd)
            								  currentLocation=11;
            								  updateDisplay(location11.description);
            							  } else if (playerHasPortalGun) {
            								  updateDisplay(location10.description_2nd);
            								  currentLocation=11;
            								  updateDisplay(location11.description);
            							  } else {
            							 	  updateDisplay(location10.description);
            							  	gameOver();
            							  }
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
						               updateDisplay(location8.description_2nd);
      break;
    
	    case "Take Portal Gun":
      case "take portal gun":
      case "Take portal gun":
      case "take Portal Gun": playerHasPortalGun=true;
                              updateDisplay(item4.description);
      break;
	  
	    case "Take Lightsaber":
      case "take lightsaber":
      case "Take lightsaber":
      case "take Lightsaber": playerHasLightsaber=true;
                              updateDisplay(item5.description);
      break;
    default: var msg="You Cannot Take This"
  }
}

function read_items(item){
  var prompt = document.getElementById("textprompt");
    switch(prompt.value){
      case "Read Note":
      case "read note":
      case "Read note":
      case "read Note": updateDisplay(item0.description);
      break;
      
      case "Read Newspaper":
      case "read newspaper":
      case "Read newspaper":
      case "read Newspaper": updateDisplay(item1.description);
      break;
   
    default:
      var msg="You Cannot Read This"  
      updateDisplay(msg);
  }
}

function open_object(item){
  var prompt = document.getElementById("textprompt");
    switch(prompt.value){
	  case "Open Hatch":
      case "open hatch":
      case "Open hatch":
      case "open Hatch": hasOpenedHatch=true;
	                       updateDisplay(location2.description_2nd) 
      break;

      case "Open Safe":
      case "open safe":
      case "Open safe":
      case "open Safe": hasOpenedSafe=true;
	                      updateDisplay(location8.description_3rd)
      break;
	}
}

function updateLocation(){
  switch(currentLocation){
    case 0: updateDisplay(location0.description);
    break;
    
    case 1: if (playerHasNote){
	          updateDisplay(location1.description_2nd)
			} else {
			    updateDisplay(location1.description);}
            if (!hasVisited_1){
              score=score+5;
            }
            hasVisited_1=true;
    break;
    
    case 2: if (playerHasPortalGun){
	          updateDisplay(location2.description_3rd)
	        } else if (hasOpenedHatch){
			    updateDisplay(location2.description_2nd)
			  } else {			
	              updateDisplay(location2.description);
				}
            if (!hasVisited_2){
              score=score+5;
            }
            hasVisited_2=true;
    break;
    
    case 3: updateDisplay(location3.description);
            if (!hasVisited_3){
              score=score+5;
            }
            hasVisited_3=true;
    break;
    
    case 4: updateDisplay(location4.description);
            if (!hasVisited_4){
              score=score+5;
            }
            hasVisited_4=true;
    break;
    
    case 5: if (playerHasNote){
              updateDisplay(location5.description);
              if (!hasVisited_5){
               score=score+5;
              }
              hasVisited_5=true;
            } else {
                updateDisplay(location4.description);
                currentLocation = 4;
            }
    break;
   
    case 6: updateDisplay(location6.description);
            if (!hasVisited_6){
              score=score+5;
            }
            hasVisited_6=true;
    break;
   
    case 7: if (playerHasKey) {
	          updateDisplay(location7.description_2nd)
	        } else {
	            updateDisplay(location7.description);}
            if (!hasVisited_7){
              score=score+5;
            }
            hasVisited_7=true;
    break;
   
    case 8: if (playerHasLightsaber){
	          updateDisplay(location8.description_4th)
	        } else if (hasOpenedSafe){
			    updateDisplay(location2.description_3rd)
			  } else if (playerHasPicture){	
                  updateDisplay(location8.description_2nd)
                } else {		  
	                updateDisplay(location8.description);
			      }
            if (!hasVisited_8){
              score=score+5;
            }
            hasVisited_8=true;
    break;
   
    case 9: updateDisplay(location9.description);
            if (!hasVisited_9){
              score=score+5;
            }
            hasVisited_9=true;
    break;
   
    default: 
      var msg="Moving in that Direction isn't an option"
  } 
}

function displayInventory(){
  if (playerHasNote){
    updateDisplay("You have these items in your possession:" + "\n" + item0.name);
    if (playerHasNewspaper){
      updateDisplay(item1.name);
    } if (playerHasKey){
      updateDisplay(item2.name);
    } if (playerHasPicture){
      updateDisplay(item3.name);
    } if (playerHasPortalGun){
      updateDisplay(item4.name);
    } if (playerHasLightsaber){
      updateDisplay(item5.name);
    } 
  } else {
      updateDisplay("You have these items in your possession:" + " Nothing");
  } 
  
}

function gameOver(){
  document.getElementById('btn1').disabled=true
  document.getElementById('btn2').disabled=true
  document.getElementById('btn3').disabled=true
  document.getElementById('btn4').disabled=true
  updateDisplay("Wanna Play Again? Type Reset.");
  
}



