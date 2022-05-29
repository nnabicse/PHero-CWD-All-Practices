function doSomething (){
    console.log("Coding JS");
}
console.log("First");
console.log("Second");
// setTimeout(doSomething,5000);
setTimeout(function(){
    console.log("I am Late");
}, 5000)

console.log("Third");
console.log("Fourth");