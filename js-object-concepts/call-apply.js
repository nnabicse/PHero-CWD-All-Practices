const kibria = {
    id: 101,
    name: "Kibria",
    money: 5000,

    treatGiving: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money

    }
}


const heroB = {
    id: 102,
    money: 5000,
    name: "Hero B."
}

kibria.treatGiving.call(heroB, 500);

kibria.treatGiving.apply(heroB, [500]);