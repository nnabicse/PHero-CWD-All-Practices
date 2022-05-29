function bringSingara(taka) {
    console.log(taka);

    var singaraPrice  = 10;

    var singaraQuantity = taka/singaraPrice;

    return singaraQuantity;
    
}



var singara = bringSingara(250);
console.log(singara);