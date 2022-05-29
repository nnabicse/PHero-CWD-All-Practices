const myArray = [5,6,8,3,20,80,10,20];
function mySum(val) {
    var sum = 0;
    for(var i=0; i<val.length;i++){
        sum = sum + val[i];
    }
    return sum;
}

console.log(mySum(myArray));