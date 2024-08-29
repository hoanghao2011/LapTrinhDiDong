const markMass = 78;
const markHeight = 1.69;

const johnMass = 95;
const johnHeight = 1.88;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI;
if (markBMI > johnMass) {
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
} else if (johnMass > markBMI) {
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI} `);
} else {
    console.log(`John's BMI ${johnBMI} is the same Mark's BMI`);
}