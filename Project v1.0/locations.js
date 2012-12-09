//
// Locations.js
//

// Locations prototype

var locales = new Array();

function locale(_id, _name, _description, _item, _description_2nd, _item_2nd, _description_3rd, _description_4th) {
  this.id      = _id;
  this.name     = _name;
  this.description   = _description;
  this.item        = _item;    
  this.description_2nd   = _description_2nd;
  this.item_2nd        = _item_2nd;    
  this.description_3rd   = _description_3rd;
  this.description_4th   = _description_4th;
   
  this.toString = function() {
    var retVal = "";
    retVal = "[locations]"                                                                + "\n" + 
             "id:"                                             + this.id                  + "\n" +
             "name:"                                           + this.name                + "\n" +
             "description:"                                    + this.description         + "\n" +
             "item:"                                           + this.item                + "\n" +
             "description after special situation occurs: "    + this.description_2nd     + "\n" +
			 "item2:"                                          + this.item_2nd            + "\n" +
			 "description if there's a second item:"           + this.description_3rd     + "\n" +
			 "description for after the second item is taken:" + this.description_4th     + "\n" ;
    return retVal;
  }   
}
  
  location0 = new locale(0, "Middle of room one", "You are in the middle of the room. There is a desk at the north wall of the room.", "none", "", "", "", "");
  
  location1 = new locale(1, "North Wall of room one", "You are at the northern part of the room, there is a desk with a note on it. It looks like it could be important.", "Note", "You are at the northern part of the room, This is where you took the note from.", "", "", "" );
  
  location2 = new locale(2, "Western wall of room one","You are at the western part of the room, The ground has a handle coming from it? Oh look it's a little hatch....", "Portal Gun", "Well the hatch is open and.... Would you look at this its a.......*reads the side* Hmmmm says it shoots portals. I know I'll call it a portal gun! I'm so clever, I mean portal gun so original.", "", "This looks like the room that I got the Portal Gun from.", "");
  
  location3 = new locale(3,"Southern Wall of room one","You are at the southern part of the room, there is a wall here.","none", "", "", "", "");

  location4 = new locale(4, "Eastern Wall of room one","You are at the eastern part of the room, there is a wall here. This wall seems different from the others.", "none", "", "", "", "");
  
  location5 = new locale(5,"Western Wall of room two","The wall seems to have been some sort of illusion, this room seems similar to the previous one.", "none", "", "", "", "");
  
  location6 = new locale(6,"South Wall of room two","There is a desk at the south wall.Wow there is a Newspaper here, and it says there's gonna be a new Star Wars in 2015..........There is a disturbance in the force. HAHAHAHAHA!!!!!! I crack myself up.", "Newspaper", "", "", "", "");
 
  location7 = new locale(7,"Eastern Wall of room two","This doesn't look like the eastern wall from the other room. There is a fireplace here. The flames give the room an erie feel it's like i can hear the flames growling. Hmmmm there is a key on the mantle. It looks like it belongs to a safe of some sort.", "Key", "I'm back at the fireplace. I dont like it here something about this room creeps me out.", "", "", "");
  
  location8 = new locale(8,"North Wall of room two","The north wall of this room is different than the last. There is a picture of cake on the wall.", "Picture", "Hey there's a safe behind where the picture was. It looks like i need a key to open it. Do I have a key? Uhhhh Why am I so absent minded?", "Lightsaber", "Is that what I think it is?!?!?!? Oh My God its a Lightsaber. Should I take it?", "Ahhhh the room that I completed my life in. *Whimpers* I can't believe i have a Lightsaber.");
 
  location9 = new locale(9,"Center Wall of room two","You are in the center of the room. There is a desk at the south wall of the room. There is a giant portrait on the north wall. Oooooh The east wall has a fireplace it gives the room an abnormal light.", "none", "", "", "", "");

  location10 = new locale(10, "", "*The floor suddenly drops away* Well i'm suprised you've made it this far. Let's see how you deal with the Rancor!!!!!!!! *The Rancor charges at you* *You try to run but the Rancor grabs you and devours you whole* Looks Like it's GAME OVER. Scrub.", "", "*The floor suddenly drops away* Well i'm suprised you've made it this far. Let's see how you deal with the Rancor!!!!!!!! *Scrambling* Well this is just as good a time as any to try using the portal gun. *Shoots Blue Portal at the Wall* *Tries to run into the blue portal and hits the wall* Well this thing sucks! Why in the world would you make a portal gun that doesn't work! *Rancor charges at you* Oh my god what the hell! Rancors aren't real, what the hell is that thing. *Dives behind rock* *While fidgeting with the portal gun fires orange portal on the rock* Hmmm this ones a different color and i can see throught it. *Runs through orange portal seconds later Rancor smashes the rock and is confused to find nothing there* So when i go in one, i come out the other. *The Rancor turns around after hearing you talk to yourself* Why don't i think in my head? Oh right the player wouldn't know whats going on. THIS IS YOUR FAULT!!!! *The Rancor charges in your direction, you see a dimly lit hall way in the corner of the pit* *Shoots orange portal and backs into blue one* I should be safe here the Rancors to big to get in here.", "", "*The floor suddenly drops away* Well i'm suprised you've made it this far. Let's see how you deal with the Rancor!!!!!!!! First a Lightsaber, then a Rancor. My dreams have become a reality. Why am i saying this out loud? Oh right the player needs to hear my thoughts. Sorry, had a moment. *The Rancor charges at you* Uhh, what would a jedi do? Ummmm? *Turns on lightsaber and throws it at the Rancor* *Rancor moves* *Lightsaber misses* What it didn't work? Ohhh I have a lightsaber not the force. Duh! *Rancor is enraged and charges again* *You dive out of the way and pick up the lightsaber* *The Rancor turns back and charges* *You roll out of the way and as the rancor passes you drive the lightsaber into its ankle* *It falls to the ground* *You take the lightsaber, run on top of the rancor, and drive the lightsaber into its skull*  *You see a dimly lit hallway in the corner of the pit*", "*The floor suddenly drops away* Well i'm suprised you've made it this far. Let's see how you deal with the Rancor!!!!!!!! Well i can honestly say i didn't expect my day to go this way. *The Rancor charges at you* *You shoot a blue portal and dive out of the way* *The Rancor smashes it's head into the wall and becomes enraged* *You turn on the light saber and shoot an orange portal at the wall behind you* The Rancor charges at you* *You step through the orange portal and as the rancor it's his head into the wall you drive your light saber into the top of its skull through the portal* It's a good thing you found both of those items that probably wouldn't of ended as easily as it did. *You see a dimly lit hallway in the corner of the pit*")
  
  location11 = new locale(11, "You look around the hall and see a colossal door, suddenly you hear a voice that says *I'm suprised that you've made it this far. Now answer this would you like cake?*", "", "", "", "", "", "")
  
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
  locales[10]=location10;





















