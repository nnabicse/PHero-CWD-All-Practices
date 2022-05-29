function fact(number) {
    var factorial=1;
    for(var i=1;i<=number;i++){
        factorial = factorial*i;

    }

    return factorial;
    
}

console.log(fact(10));

