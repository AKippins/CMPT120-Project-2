//
// Locations.js
//

// Locations prototype

var locales = new Array();

function locale(_id, _name, _description, _item) {
  this.id      = _id;
  this.name     = _name;
  this.description   = _description;
  this.item        = _item;     
   
  this.toString = function() {
    var retVal = "";
    retVal = "[locations]"                      + "\n" + 
             "id:"          + this.id          + "\n" +
             "name:"        + this.name        + "\n" +
             "description:" + this.description + "\n" +
             "item:"        + this.item        + "\n" ;
    return retVal;
  }   
}
  
  location0 = new locale(0, "Middle of room one", "You are in the middle of the room. There is a desk at the north wall of the room.", "none");
  
  location1 = new locale(1, "North Wall of room one", "You are at the northern part of the room, there there is a desk with a note on it. It looks like it could be important.", "Note");
  
  location2 = new locale(2, "Western wall of room one","You are at the western part of the room, there is a wall here.", "none");
  
  location3 = new locale(3,"Southern Wall of room one","You are at the southern part of the room, there is a wall here.","none");

  location4 = new locale(4, "Eastern Wall of room one","You are at the eastern part of the room, there is a wall here. This wall seems different from the others.", "none");
  
  location5 = new locale(5,"Western Wall of room two","The wall seems to have been some sort of illusion, this room seems similar to the previous one.", "none");
  
  location6 = new locale(6,"South Wall of room two","There is a desk at the south wall there is a Newspaper here it says there's gonna be a new Star Wars in 2015.", "Newspaper");
 
  location7 = new locale(7,"Eastern Wall of room two","This doesn't look like the eastern wall from the other room. There is a fireplace here. There is a key on the ground.", "Key");
  
  location8 = new locale(8,"North Wall of room two","The north wall of this room is different than the last there is a picture of cake on the wall.", "Picture");
 
  location9 = new locale(9,"Center Wall of room two","You are in the center of the room there is a desk at the south wall of the room there is a giant portrait on the north wall.", "none");

 locales[0]=location0;
  locales[1]=location1;
  locales[2]=location2;
  locales[3]=location3;
  locales[4]=location4;
  locales[5]=location5;
  locales[6]=location6;
  locales[7]=location7;
  locales[8]=location8;
  locales[9]=location9;  






















