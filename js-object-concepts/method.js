const student = {
    id: 101,
    name: "Kibria",
    money: 5000,
    major: "mathematics",
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculas'],
    bestFriend: {
        name: "Kundu", 
        major: 'mathematics'
    },
    takeExam: function(){
        console.log(this.name,"Taking Exam");
    },
    treatGiving: function(expense){
        this.money = this.money - expense;
        return this.money

    }
}

student.takeExam();

const remaining = student.treatGiving(900);
const remaining2 = student.treatGiving(500);
console.log(remaining);
console.log(remaining2);