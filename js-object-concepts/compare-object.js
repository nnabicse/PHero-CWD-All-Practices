const first = {a:1};
const second = {a:1};
// const third = first;

if(first===second){
    console.log("oBJ is Equal");
}
else{
    console.log("OBJ is Diffrent")
}


if(JSON.stringify(first) == JSON.stringify(second)){
    console.log("oBJ is Equal");
}
else{
    console.log("oBJ is Diffrent");
};


function compareObj(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }

    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true;
}