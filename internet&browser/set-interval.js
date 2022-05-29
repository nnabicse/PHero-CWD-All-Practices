console.log(111111111);
console.log(22222222222);
// setInterval(()=>{
//     console.log(0000000);
// },3000)

let seconds = 0;

const timeId = setInterval(()=>{
    // ++seconds;
    console.log(++seconds);
    if(seconds>15){
        clearInterval(timeId);
    }
}, 1000)
console.log(3333333333);
console.log(44444444444);

