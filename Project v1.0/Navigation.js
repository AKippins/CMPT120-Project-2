/*This function regulates the movement control 
In this section the location is being monitored using the global
variable currentLocation*/
var currentLocation = 0;
var North = 0;
var South = 1;
var East  = 2;
var West  = 3;
var nav = [     // N  S  E  W
		   /*0*/ [ 1, 3, 4, 2], 
		   /*1*/ [-1, 0,-1,-1],
		   /*2*/ [-1,-1, 0,-1],	   
		   /*3*/ [ 0,-1,-1,-1],
		   /*4*/ [-1,-1, 5, 0],
		   /*5*/ [-1,-1, 9, 4],
		   /*6*/ [ 9,-1,-1,-1],
		   /*7*/ [-1,-1,-1, 9],
		   /*8*/ [-1, 9,-1,-1],
		   /*9*/ [ 8, 6, 7, 5],
		   /*10*/[-1,-1,-1,-1],
		   /*11*/[-1,-1,-1,-1],
		   /*12*/[-1,-1,-1,-1]];






function movement(direction) {
  var newLocation = nav[currentLocation][direction];
    if (newLocation === -1){
      updateDisplay("Moving in that direction isn't an option.");	
	} else {
	  currentLocation = newLocation;
	}
  updateLocation();
  disable_button_north();
  disable_button_west();
  disable_button_east();
  disable_button_south();
}