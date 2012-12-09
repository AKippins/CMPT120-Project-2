//
// Items.js
//

// Items prototype
var inventory = new Array();

function item(_id, _name, _description){
  this.id          = _id;
  this.name        =_name;
  this.description =_description;

  this.toString = function(){
    var retVal = "";
    retVal = "[Items]"                         + "\n" +
             "id:"          + this.id          + "\n" +
             "name:"        + this.id          + "\n" +
             "description:" + this.description + "\n";
    return retVal;
  }
}

  item0 = new item(0, "Sticky Note", "Soooo here you are. Well, did you expect me to just leave you here confused. Only now will I tell you that you are trapped. Trapped where you ask? Everywhere. Everywhere and nowhere. You're trapped within the confines of your own mind. How? Well you don't need to know that, not just yet. What you should know is that i just told you how to get out of this room. Good Luck.  ");
  
  item1 = new item(1, "Newspaper", "Oh very funny all it says is It's A Trap. *grumbles* Drop me in a in a pit with a Rancor Ohhhh It's a Trap. I think i pooped myself Ewwwwwww!!!!!!!!!!!");
  
  item2 = new item(2, "Key", "Looks like it belonges to an old safe.");
  
  item3 = new item(3, "Picture", "This is a weird picture to have. I mean everyone knows the cake is a lie. Right?");
  
  item4 = new item(4, "Portal Gun", "This thing looks amazing. The colors are so vibrant, but i can't use this, I mean i don't even know what it really does. I mean i could shoot a portal and travel to another dimension or something. Uhhhh I'm gonna stop thinking about it.");
  
  item5 = new item(5, "Lightsaber", "This is the ultimate piece of weaponry. I've lived life to the fullest i can die happily now.");
  
  inventory[0]=item0
  inventory[1]=item1
  inventory[2]=item2
  inventory[3]=item3 
  inventory[4]=item4 
  inventory[5]=item5