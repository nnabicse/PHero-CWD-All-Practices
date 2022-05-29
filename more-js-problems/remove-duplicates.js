function removeDuplicate(val) {
    const array = [];

    for (let i = 0; i<val.length; i++){
        if(array.indexOf(val[i])==-1){
            array.push(val[i]);
        }
    }
    return array;
    
}

console.log(removeDuplicate([2,2,1,3,5,5,6,5]));
