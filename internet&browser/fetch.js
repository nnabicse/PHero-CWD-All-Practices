console.log(111111111);
console.log(22222222222);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(3333333333);
console.log(44444444444);