const user = {
    id:11, name:"gorib amir", job:"actor"
};


const stringified = JSON.stringify(user);
const converted = JSON.parse(stringified);

console.log(stringified);

console.log(converted);

console.log("API");