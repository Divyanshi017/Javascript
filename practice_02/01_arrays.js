// arrays

const myArr= [0,1,2,3,4,5];
// console.log(myArr[4]);              


// Array methods


myArr.push(9)
myArr.pop()
// console.log(myArr);


// console.log(myArr.includes(6));            //boolean
// console.log(myArr.indexOf(3))


// splice    // slice

console.log("A",myArr);                  //original

const myn1= myArr.slice(1,4);            //same as original
console.log("B",myArr);

const myn2= myArr.splice(1,4);          // modifies original
console.log("C",myArr);