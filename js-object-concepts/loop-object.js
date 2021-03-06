const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isCleaned: true
};

/**
 for (let i = 0; i<10; i++){}
 for (const num of numbers){} // array
 for (const prop in student){} // object
 */

 for(const prop in bottle){
     console.log(prop); //returns onlu keys
     console.log(bottle[prop]); //returns onlu values
     console.log(prop, bottle[prop]); //returns both
 }

const keys = Object.keys(bottle);
for(const key of keys){
    console.log(key, bottle[key]);
}


for(const [key, value] of Object.entries(bottle)){
    console.log(key, value)
}
