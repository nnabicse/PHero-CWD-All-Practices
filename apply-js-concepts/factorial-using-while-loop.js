function fact(number) {
    var factorial = 1;
    let i = number;
    
    while(i>=1){
        factorial = factorial*i;
        i--;

    }
    return factorial;
}

console.log(fact(10));