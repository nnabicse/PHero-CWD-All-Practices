const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isCleaned: true
};

//getting all property names
const keys = Object.keys(bottle);
//getting all values
const values = Object.values(bottle);
//getting all the key and values together
const pairs = Object.entries(bottle);
//seal object
Object.seal(bottle);
//freeze object
Object.freeze(bottle)
//delete an element
delete bottle.isCleaned;



console.log(bottle);