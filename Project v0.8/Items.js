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

  item0 = new item(0, "Sticky Note", "It Works");
  
  item1 = new item(1, "Newspaper", "two for two");
  
  item2 = new item(2, "Key", "Looks like it belonges to an old safe.");
  
  item3 = new item(3, "Picture", "This is a weird picture to have everyone knows the cake is a lie.");
  
  inventory[0]=item0
  inventory[1]=item1
  inventory[2]=item2
  inventory[3]=item3  