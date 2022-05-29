function findMax(a,b,c) {
    if(a>b && a>c){
        console.log(a, "is Greatest");
    }
    else if(b>a && b>c){
        console.log(b, "is Greatest");
    }
    else{
        console.log(c, "is Greatest");
    }
    
}

findMax(50,10,70);