// Dates

let mydate= new Date();
// console.log(mydate);                            //2026-01-08T17:13:06.081Z
// console.log(mydate.toString());                 //Thu Jan 08 2026 22:43:06 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString());             //Thu Jan 08 2026
// console.log(mydate.toISOString());              //2026-01-08T17:13:06.081Z
// console.log(mydate.toJSON());                   //2026-01-08T17:13:06.081Z
// console.log(typeof mydate);                    //object

let mycreateddate= new Date(2005,7,6);
// console.log(mycreateddate.toString());



let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    
})