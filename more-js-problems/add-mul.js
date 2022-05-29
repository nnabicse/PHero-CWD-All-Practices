/*
woodchair 3 cft
woodtable 10 cft
woodbed 50 cft
*/

function woodRequirments(table, chair, bed) {
  
    const woodchair = 3;
    const woodtable = 10;
    const woodbed = 50;

    return table*woodtable + chair*woodchair + bed*woodbed;
    
}

console.log(woodRequirments(50,80,10), "CFT");