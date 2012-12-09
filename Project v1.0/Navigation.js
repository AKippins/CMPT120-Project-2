var currentLocation=0

/*This function regulates the movement control 
In this section the location is being monitored using the global
variable currentLocation*/
function movement(direction) {
  if(direction === "North") {
      if (currentLocation === 3) {
        currentLocation = 0;
      } else if (currentLocation === 0) {
        currentLocation = 1
      }
      if (currentLocation === 6){
        currentLocation = 9;
      } else if (currentLocation === 9) {
        currentLocation = 8
      }
  } else if (direction === "West") {
            if (currentLocation === 7) {
              currentLocation = 9
            } else if (currentLocation === 9) {
                currentLocation = 5
            } else if (currentLocation === 5) {
                currentLocation = 4;
            } else if (currentLocation === 4) {
                currentLocation = 0
            } else if (currentLocation === 0) {
                currentLocation = 2
            }
  } else if (direction === "East") {
            if (currentLocation === 2) {
              currentLocation = 0;
            } else if (currentLocation === 0) {
                currentLocation = 4
            } else if ((currentLocation === 4) && (playerHasNote)) {
                currentLocation = 5
            } else if (currentLocation === 5) {
                currentLocation = 9
            } else if (currentLocation === 9) {
                currentLocation = 7
            }
  } else if (direction === "South") {
            if (currentLocation === 1) {
              currentLocation = 0;
            } else if (currentLocation === 0) {
                currentLocation = 3
            } 
            if (currentLocation === 8){
              currentLocation = 9;
            } else if (currentLocation === 9) {
                currentLocation = 6
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