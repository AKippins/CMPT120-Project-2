var score=0;
var hasVisited_5=false;
var hasVisited_8=false;
var hasVisited_7=false;
var hasVisited_6=false;
var hasVisited_12=false;
var playerHasNote=false;

function init(){
  updateDisplay("You wake up in a room with 4 walls and no door, you see a desk with a note on it. All that you have is a Compass. ")
  location0();
}

function showscore(){
  updateDisplay("Your Score Is " + score);
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
  } else if ((currentLocation === 6) && (!playerHasNote)){
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
      playerHasNote=true;
  }
  updateDisplay(msg);
}

function updateLocation(){
  switch(currentLocation){
    case 0: location0();
    break;
    
    case 5: location5();
    break;
    
    case 6: location6();
    break;
    
    case 7: location7();
    break;
    
    case 8: location8();
    break;
    
    case 12: location12();
    break;
   
  } 
}

function displayInventory(){
  updateDisplay("You have these items in your possession:")
}






