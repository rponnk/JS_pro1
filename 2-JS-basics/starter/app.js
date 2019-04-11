let bmi;
function compare(height, mass) {
    bmi = mass / (height * height);
    return bmi;
} 

let johnMass, johnHeight, markMass, markHeight;

johnMass = 81;
johnHeight = 2;

markMass = 102;
markHeight = 2;

console.log(compare(johnHeight, johnMass));
console.log(compare(markHeight, markMass));

