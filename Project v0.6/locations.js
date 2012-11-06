var score=0;
var hasVisited_5=false;
var hasVisited_8=false;
var hasVisited_7=false;
var hasVisited_6=false;
var hasVisited_12=false;
var hasTaken_note=false;



var currentLocation=0

function showscore(){
  alert(score);
}  

/*This function regulates the movement control 
1=North
2=West
3=East
4=South*/
function movement(direction) {
  if(direction === "North") {
      if (currentLocation === 8) {
        currentLocation = 0;
      } else if (currentLocation === 0) {
        currentLocation = 5
      }
  } else if (direction === "West") {
            if (currentLocation === 12) {
              currentLocation = 6;
            } else if (currentLocation === 6) {
                currentLocation = 0
            } else if (currentLocation === 0) {
                currentLocation = 7
            }
  } else if (direction === "East") {
            if (currentLocation === 7) {
              currentLocation = 0;
            } else if (currentLocation === 0) {
                currentLocation = 6
            } else if ((currentLocation === 6) && (hasTaken_note=true)) {
                currentLocation = 12
            }
  } else if (direction === "South") {
            if (currentLocation === 5) {
              currentLocation = 0;
            } else if (currentLocation === 0) {
                currentLocation = 8
            } 
  } else { var msg="Moving in that direction isn't an option"
      updateDisplay(msg);
    }
  updateLocation();
  disable_button_north();
  disable_button_west();
  disable_button_east();
  disable_button_south();
}

/*In this section the location is being monitored using the global
variable currentLocation*/
function updateLocation() {
  //First room
  switch(currentLocation){
    case 0:
      var msg = "You are in the middle of the room. There is a desk at the north wall of the room." 
      //updateDisplay(msg);
      break;
    case 5:
      var msg = "You are at the northern part of the room, there there is a desk with a note on it. It looks like it could be important."
      //updateDisplay(msg);
      if(!hasVisited_5){
        score=score+10;
        hasVisited_5=true;
      }
      break;
    case 6:
      var msg = "You are at the eastern part of the room, there is a wall here. This wall seems different from the others."
      //updateDisplay(msg);
      if(!hasVisited_6){
        score=score+10;
        hasVisited_6=true;
      }
      break;
    case 7:
      var msg = "You are at the western part of the room, there is a wall here."
      //updateDisplay(msg);
      if(!hasVisited_7){
        score=score+10;
        hasVisited_7=true;  
      }  
      break;
    case 8:
      var msg = "You are at the southern part of the room, there is a wall here."
      //updateDisplay(msg);
      if(!hasVisited_8){
        score=score+10;
        hasVisited_8=true;
      }
      break;
    case 12:
      var msg = "The wall seems to have been some sort of illusion, this room seems similar to the previous one."
      //updateDisplay(msg);
      if(!hasVisited_12){
        score=score+10;
        hasVisited_12=true;
      }
    default: "Moving in that direction isn't an option"
  }
  updateDisplay(msg);    
}
  
  /*if (currentLocation === 0) {
    var msg = "You are in the middle of the room. There is a desk at the north wall of the room." 
    updateDisplay(msg);
  } else if(currentLocation === 5) {
            var msg = "You are at the northern part of the room, there there is a desk with a note on it. It looks like it could be important."
            updateDisplay(msg);
            if(!hasVisited_5){
              score=score+10;
              hasVisited_5=true;
            }
  } else if(currentLocation === 8) { 
            var msg = "You are at the southern part of the room, there is a wall here."
            updateDisplay(msg);
            if(!hasVisited_8){
              score=score+10;
              hasVisited_8=true;
          }
  } else if(currentLocation === 7) {
            var msg = "You are at the western part of the room, there is a wall here."
            updateDisplay(msg);
            if(!hasVisited_7){
              score=score+10;
              hasVisited_7=true;
          } 
  } else if(currentLocation === 6) {
            var msg = "You are at the eastern part of the room, there is a wall here. This wall seems different from the others."
            updateDisplay(msg);
            if(!hasVisited_6){
              score=score+10;
              hasVisited_6=true;
          }
  } else if(currentLocation === 12) {
            var msg = "The wall seems to have been some sort of illusion, this room seems similar to the previous one."
            updateDisplay(msg);
            if(!hasVisited_12){
              score=score+10;
              hasVisited_12=true;
          }
  }        
}*/

function updateDisplay(msg){
   var textarea = document.getElementById("tagame");
   textarea.value = msg + "\n" + textarea.value;
}

function error_msg(){
  var msg = "That Is Not A Command Type Help For Command List"
  updateDisplay(msg);
}

function command_list_help(){
  var msg = "Move North: N, n, North, or north \nMove West: W, w, West, or west\nMove East: E, e, East, or east\nMove South: S, s, South, or south"
  updateDisplay(msg);
}

//disable button for extra credit
function disable_button_north(){
  if (currentLocation === 5){
    document.getElementById('btn1').disabled=true
  } else if (currentLocation === 6){
      document.getElementById('btn1').disabled=true
  } else if (currentLocation === 7){
      document.getElementById('btn1').disabled=true
  } else if (currentLocation === 12){
      document.getElementById('btn1').disabled=true
  } else {
      document.getElementById('btn1').disabled=false
  }
}

function disable_button_west(){
  if (currentLocation === 5){
    document.getElementById('btn2').disabled=true
  } else if (currentLocation === 7){
      document.getElementById('btn2').disabled=true
  } else if (currentLocation === 8){
      document.getElementById('btn2').disabled=true
  } else {
      document.getElementById('btn2').disabled=false
  }
}

function disable_button_east(){
  if (currentLocation === 5){
    document.getElementById('btn3').disabled=true
  } else if ((currentLocation === 6) && (hasTaken_note=false)){
      document.getElementById('btn3').disabled=true
  } else if (currentLocation === 8){
      document.getElementById('btn3').disabled=true
  } else if (currentLocation === 12){
      document.getElementById('btn3').disabled=true
  } else {
      document.getElementById('btn3').disabled=false
  }
}

function disable_button_south(){
  if (currentLocation === 8){
    document.getElementById('btn4').disabled=true
  } else if (currentLocation === 6){
      document.getElementById('btn4').disabled=true
  } else if (currentLocation === 7){
      document.getElementById('btn4').disabled=true
  } else if (currentLocation === 12){
      document.getElementById('btn4').disabled=true
  } else {
      document.getElementById('btn4').disabled=false
  }
}

/*Didn't get this to work
function cannot_go_msg(){
  if((currentLocation === 5) && movement(1)){
    var msg = "Moving in that direction isn't an option."
    updateDisplay();
  }  
}*/

function gettext(){
  var prompt = document.getElementById("textprompt");
    if(prompt.value === "N"){
      movement(1);
    } else if(prompt.value === "W"){
        movement(2);
    } else if(prompt.value === "E"){
        movement(3);
    } else if(prompt.value === "S"){
        movement(4);
    } else if(prompt.value === "n"){
        movement(1);
    } else if(prompt.value === "w"){
        movement(2);
    } else if(prompt.value === "e"){
        movement(3);
    } else if(prompt.value === "s"){
        movement(4);
    } else if(prompt.value === "North"){
        movement(1);
    } else if(prompt.value === "West"){
        movement(2);
    } else if(prompt.value === "East"){
        movement(3);
    } else if(prompt.value === "South"){
        movement(4);
    } else if(prompt.value === "north"){
        movement(1);
    } else if(prompt.value === "west"){
        movement(2);
    } else if(prompt.value === "east"){
        movement(3);
    } else if(prompt.value === "south"){
        movement(4);
    } else if(prompt.value === "Help"){
        command_list_help();
    } else if(prompt.value === "help"){
        command_list_help();
    } else if(prompt.value === "Score"){
        showscore();
    } else if(prompt.value === "score"){
        showscore();
    } else if((prompt.value === "Take note") && (currentLocation === 5)){
        take_items(prompt.value);
    } else {
        error_msg();
    }
    
}

function take_items(){
  var msg="Taken"
  switch(prompt.value){
    case "Take note":
      hasTaken_note=true;
  }
  updateDisplay(msg);
}
