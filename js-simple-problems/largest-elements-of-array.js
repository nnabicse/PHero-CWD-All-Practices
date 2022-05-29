const myArray = [5,6,8,3,20,80,10,20,160];

function largest(val) {
    var largest = val[0];
    for(let i=0; i<val.length; i++){
        if(val[i]>largest){
            largest = val[i];
        }
        else{
            continue;
        }
    }
    return largest;
}

console.log(largest(myArray));