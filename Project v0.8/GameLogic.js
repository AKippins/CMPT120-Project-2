var score=0;
var hasVisited_1=false;
var hasVisited_2=false;
var hasVisited_3=false;
var hasVisited_4=false;
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
  var msg = "Move North: N, n, North, or north \nMove West: W, w, West, or west\nMove East: E, e, East, or east\nMove South: S, s, South, or south\nTake Item: Take, take\nRead Item: Read, read"
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
  } else if (currentLocation === 1){
      document.getElementById('btn1').disabled=true
  } else if (currentLocation === 2){
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
  } else if (currentLocation === 1){
      document.getElementById('btn2').disabled=true
  } else if (currentLocation === 3){
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
  } else if (currentLocation === 2){
      document.getElementById('btn3').disabled=true
  } else if (currentLocation === 3){
      document.getElementById('btn3').disabled=true
  } else if (currentLocation === 1){
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
  } else if (currentLocation === 2){
      document.getElementById('btn4').disabled=true
  } else if (currentLocation === 3){
      document.getElementById('btn4').disabled=true
  } else {
      document.getElementById('btn4').disabled=false
  }
}

function gettext(){
  var prompt = document.getElementById("textprompt");
    if(prompt.value === "N"){
      movement("North");
    } else if(prompt.value === "W"){
        movement("West");
    } else if(prompt.value === "E"){
        movement("East");
    } else if(prompt.value === "S"){
        movement("South");
    } else if(prompt.value === "n"){
        movement("North");
    } else if(prompt.value === "w"){
        movement("West");
    } else if(prompt.value === "e"){
        movement("East");
    } else if(prompt.value === "s"){
        movement("South");
    } else if(prompt.value === "North"){
        movement("North");
    } else if(prompt.value === "West"){
        movement("West");
    } else if(prompt.value === "East"){
        movement("East");
    } else if(prompt.value === "South"){
        movement("South");
    } else if(prompt.value === "north"){
        movement("North");
    } else if(prompt.value === "west"){
        movement("West");
    } else if(prompt.value === "east"){
        movement("East");
    } else if(prompt.value === "south"){
        movement("South");
    } else if(prompt.value === "Help"){
        command_list_help();
    } else if(prompt.value === "help"){
        command_list_help();
    } else if(prompt.value === "Score"){
        showscore();
    } else if(prompt.value === "score"){
        showscore();
    } else if((prompt.value === "Take Note") && (currentLocation === 5)){
        take_items("note");
    } else if((prompt.value === "Take note") && (currentLocation === 5)){
        take_items("note");
    } else if((prompt.value === "take note") && (currentLocation === 5)){
        take_items("note");
    } else if((prompt.value === "take Note") && (currentLocation === 5)){
        take_items("note");
    } else if((prompt.value === "Take") && (currentLocation === 5)){
        take_items();
    } else if((prompt.value === "take") && (currentLocation === 5)){
        take_items();
    } else if(prompt.value === "Read Note"){
        read_items("note");
    } else if(prompt.value === "Read note"){
        read_items("note");
    } else if(prompt.value === "read note"){
        read_items("note");
    } else if(prompt.value === "read Note"){
        read_items("note");
    } else if(prompt.value === "Read"){
        read_items();
    } else if(prompt.value === "read"){
        read_items();
    } else {
        error_msg();
    }   
}

function take_items(item){
  var msg="Taken"
  switch(item){
    case "note":
      playerHasNote=true;
      break;
    default: 
      var msg="You Cannot Take This"
  }
  updateDisplay(msg);
}

function read_items(item){
  switch(item){
    case "note":
      var msg="Gonna Do This Later If It Works"
      break;
    default:
      var msg="You Cannot Read This"  
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
   
    case 1: location1();
    break;
   
    case 2: location2();
    break;
   
    case 3: location3();
    break;
   
    case 4: location4();
    break;
   
    default: 
      var msg="Moving in that Direction isn't an option"
  } 
}

function displayInventory(){
  if (playerHasNote){ havenote="\nNote"
    updateDisplay("You have these items in your possession:" + havenote);
  } else {
      updateDisplay("You have these items in your possession:" + " Nothing");
    } 
  
}






