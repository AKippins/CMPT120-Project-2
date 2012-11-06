var currentLocation=0

/*This function regulates the movement control 
In this section the location is being monitored using the global
variable currentLocation*/
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
            } else if ((currentLocation === 6) && (playerHasNote)) {
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