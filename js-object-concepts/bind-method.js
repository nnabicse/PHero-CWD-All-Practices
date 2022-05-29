const kibria = {
    id: 101,
    name: "Kibria",
    money: 5000,

    treatGiving: function(expense){
        this.money = this.money - expense;
        return this.money

    }
}


const heroB = {
    id: 102,
    money: 5000,
    name: "Hero B."
}


const heroTreat = kibria.treatGiving.bind(heroB);
console.log(heroTreat(500));
