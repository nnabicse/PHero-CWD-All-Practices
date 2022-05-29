const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];
const length = friends.map(x=>x.length);
console.log(length);

const products = [
    {name:'water bottle', price:50,color:'yellow'},
    {name:'mobile phone', price:10050,color:'black'},
    {name:'Smart watch', price:30000,color:'black'},
    {name:'Note', price:30,color:'pink'},
    {name:'glass', price:3,color:'white'}
]

const names = products.map(x=>x.name);
const prices = products.map(x=>x.price);
console.log(names,prices);

products.forEach(x=>console.log(x))