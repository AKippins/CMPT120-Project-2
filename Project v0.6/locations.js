function location0() {
  updateDisplay("You are in the middle of the room. There is a desk at the north wall of the room.");
}

function location5() {
  updateDisplay("You are at the northern part of the room, there there is a desk with a note on it. It looks like it could be important.");
  if (!hasVisited_5){
    score=score+5
  }
  hasVisited_5=true;
}

function location6() {
  updateDisplay("You are at the eastern part of the room, there is a wall here. This wall seems different from the others.");
  if (!hasVisited_6){
    score=score+5
  }
  hasVisited_6=true;
}

function location7() {
  updateDisplay("You are at the western part of the room, there is a wall here.");
  if (!hasVisited_7){
    score=score+5
  }
  hasVisited_7=true;
}

function location8() {
  updateDisplay("You are at the southern part of the room, there is a wall here.");
  if (!hasVisited_8){
    score=score+5
  }
  hasVisited_8=true;
}

function location12() {
  updateDisplay("The wall seems to have been some sort of illusion, this room seems similar to the previous one.");
  if (!hasVisited_12){
    score=score+5
  }
  hasVisited_12=true;
}

function location1() {
  updateDisplay("The north wall of this room is different than the last there is a picture of cake on the wall.");
  if (!hasVisited_1){
    score=score+5
  }
  hasVisited_1=true;
}

function location2() {
  updateDisplay("This doesn't look like the eastern wall from the other room. There is a fireplace here.");
  if (!hasVisited_2){
    score=score+5
  }
  hasVisited_2=true;
}

function location3() {
  updateDisplay("There is a desk at the south wall there is a Newspaper here it says there's gonna be a new Star Wars in 2015.");
  if (!hasVisited_3){
    score=score+5
  }
  hasVisited_3=true;
}

function location4() {
  updateDisplay("You are in the center of the room there is a desk at the south wall of the room there is a giant portrait on the north wall.");
  if (!hasVisited_4){
    score=score+5
  }
  hasVisited_4=true;
}