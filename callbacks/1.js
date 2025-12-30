/*function squares(n){
    return n*n
}

function sumOfSquares(a,b){
    return squares(a)+squares(b);                                                   //not a callback function                                           
}

console.log(sumOfSquares(1,2));*/



/*/*//*function squares(n){
    return n*n;
}
function cubes(n){
    return n*n*n;
}

function sumOfSquares(a,b){
    return squares(a)+squares(b);                                                  //repeating a same type of function                                        
}
function sumOfCubes(a,b){
    return cubes(a)+cubes(b);                                                   //repeating a same type of function                                          
}

console.log(sumOfCubes(1,2));*//*/*/



function squares(n){
    return n*n
}
function cubes(n){
    return n*n*n;
}

function sumOfSomething(a,b,callback){
    console.log(callback);
    return callback(a)+callback(b);                                                   //callback function                                           
}

console.log(sumOfSomething(1,2,squares));