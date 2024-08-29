// function tinh TB
function calcAverage(a,b,c){
   return (a+b+c)/3;
}

// data 1
const dolphinsAvg1 = calcAverage(44,23,71)
const koalasAvg1 = calcAverage(65,54,49)

// data 2
const dolphinsAvg2 = calcAverage(85,54,41)
const koalasAvg2 = calcAverage(23,34,27)

// function checkWinner
function checkWinner(dolphinsAvg, koalasAvg){
    if(dolphinsAvg >= 2*koalasAvg){
        console.log("dolphins win");  
    }else if(koalasAvg >= 2*dolphinsAvg){
        console.log("koalas win");
    }else 
        console.log("no team win");
} 

// check
checkWinner(dolphinsAvg1,koalasAvg1)
checkWinner(dolphinsAvg2,koalasAvg2)
