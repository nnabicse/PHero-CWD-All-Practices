class support {
    name;
    designation = "Supprt web dev";
    adress = "BD";
    constructor (name, adress){
        this.name = name;
        this.adress = adress;

    }
    startSeassion(){
        console.log("Start a Support Session");
    }

}


const aamir = new support("Amir", "UAE");
const salman = new support("Salman", "BD");
console.log(aamir, salman);