// let sum = 0;

function sumOfNumbers(i) {
    // if(i<=1){
    //     return sum;
    // }

    // sum = sum+i;
    // sumOfNumbers(i-1);
    console.log(i);
    if(i==1){
        return 1;
    }

    return i + sumOfNumbers(--i);
}

console.log(sumOfNumbers(5));