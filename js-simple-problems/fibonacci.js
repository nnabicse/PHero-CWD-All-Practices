function fibonacci(val) {
    fibo = [0,1];
    for(let i=2;i<=val;i++){
        fibo[i] = fibo[i-1]  + fibo[i-2];
    }

    return fibo;
    
}

console.log(fibonacci(10));