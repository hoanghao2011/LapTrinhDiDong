// du lieu 1
let dolphinsScores = [96, 108, 89]
let koalasScores = [88, 91, 110]

// tinh trung binh
let dolphinsAvg = dolphinsScores.reduce((a, b) => a + b, 0) / dolphinsScores.length;
let koalasAvg = koalasScores.reduce((a, b) => a + b, 0) / koalasScores.length;

//kiem tra
if (dolphinsAvg > koalasAvg && dolphinsAvg>=100){
    console.log("Dolphins thang voi DTB la:", dolphinsAvg);
} else if(koalasAvg > dolphinsAvg && koalasAvg>=100){
    console.log("Koalas thang voi DTB la:", koalasAvg);   
} else if(dolphinsAvg === koalasAvg && dolphinsAvg >=100 && koalasAvg >= 100){
    console.log("Hoa nhau voi DTB la:", dolphinsAvg);
} else{
    console.log("Khong doi nao thang");
    
}

//Thu du lieu 1
dolphinsScores = [97, 112, 101]
koalasScores = [109, 95, 123]

// tinh trung binh
dolphinsAvg = dolphinsScores.reduce((a, b) => a + b, 0) / dolphinsScores.length;
koalasAvg = koalasScores.reduce((a, b) => a + b, 0) / koalasScores.length;

//kiem tra
if (dolphinsAvg > koalasAvg && dolphinsAvg>=100){
    console.log("Dolphins thang voi DTB la:", dolphinsAvg);
} else if(koalasAvg > dolphinsAvg && koalasAvg>=100){
    console.log("Koalas thang voi DTB la:", koalasAvg);   
} else if(dolphinsAvg === koalasAvg && dolphinsAvg >=100 && koalasAvg >= 100){
    console.log("Hoa nhau voi DTB la:", dolphinsAvg);
} else{
    console.log("Khong doi nao thang");
    
}

//Thu du lieu 2
dolphinsScores = [97, 112, 101]
koalasScores = [109, 95, 106]

// tinh trung binh
dolphinsAvg = dolphinsScores.reduce((a, b) => a + b, 0) / dolphinsScores.length;
koalasAvg = koalasScores.reduce((a, b) => a + b, 0) / koalasScores.length;

//kiem tra
if (dolphinsAvg > koalasAvg && dolphinsAvg>=100){
    console.log("Dolphins thang voi DTB la:", dolphinsAvg);
} else if(koalasAvg > dolphinsAvg && koalasAvg>=100){
    console.log("Koalas thang voi DTB la:", koalasAvg);   
} else if(dolphinsAvg === koalasAvg && dolphinsAvg >=100 && koalasAvg >= 100){
    console.log("Hoa nhau voi DTB la:", dolphinsAvg);
} else{
    console.log("Khong doi nao thang");
    
}