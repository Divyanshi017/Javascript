function calcsum(n){
    let a=0;
    for(let i=1;i<=n;i++){
        a=a+i;
    }
    return a;
}

const beforeDate= new Date();
const beforeTime= beforeDate.getDate();
calcsum(100000);

const afterDate= new Date();
const afterTime= afterDate.getDate();

console.log(afterTime-beforeTime);