const markMass = 78;
const markHeight = 1.69;

const johnMass = 95;
const johnHeight = 1.88;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI;
if (markBMI > johnMass) {
    markHigherBMI = true;
} else {
    markHigherBMI = false;
}

console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);
console.log(`Mark have a higher BMI than John? ${markHigherBMI}`);


// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);