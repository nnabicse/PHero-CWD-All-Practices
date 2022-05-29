class TeamMember{
    name;
    designation = "Supprt web dev";
    adress = "BD";
    constructor (name, adress){
        this.name = name;
        this.adress = adress;

    }
}






class support extends TeamMember {
    
    supprtTime;
    constructor (name, adress,time){
        super(name, adress)
        this.supprtTime = time;
    }

    startSeassion(){
        console.log("Start a Support Session");
    }

}

// class studentCare extends TeamMember {
    
//     constructor(name, adress){
//         this.name = name;
//         this.adress = adress;
//     }
//     buildRutuine(Student){
//         console.log(this.name, "Build a Rutuine", Student);
//     }
// }


const aamir = new support("Amir", "UAE", 11);
const salman = new support("Salman", "BD", 12);
console.log(aamir, salman);

// const alia = new studentCare("Alia Bhatt", "Mumbai");
// console.log(alia);

// alia.buildRutuine("ALAM")