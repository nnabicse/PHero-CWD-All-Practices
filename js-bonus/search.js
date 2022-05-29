/*const products = [
    {name: "iphone 14", price: 70000},
    {name: "samsung g14", price: 60000},
    {name: "dell laptop", price: 50000},
    {name: "lenovo Yoga", price: 55000},
    {name: "asus 14", price: 350000},
    {name: "iphone 14", price: 7000},
    {name: "apple watch", price: 7000}
];

function searchProduct(products, searchText) {
    for(const product of products){
        if(product.name.includes(searchText)){
            console.log(product.name);
        }
    }
    
}

searchProduct(products, "watch");

*/
// function compare(a, b) {
//     if (a == b) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   const result = compare(15, "15");
//   console.log(result);

// function compare(a, b) {
//     if (a.toString() === b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
   
//    const result = compare(25, 25);
//    console.log(result);

// console.log("123" + 123);

// let a="hi"
// let b="there"
// console.log(a+b)


const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}
