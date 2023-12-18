//  Ternary operator
// let a = -1;
// a > 0 ? console.log("Musbat son") : console.log("Manfiy son");

// Function 
// function myFirstFunction(num1, num2) {
//     return num1 + num2
// }

// let res = myFirstFunction(10, 10);
// console.log(res);

//  1 masala
function oneFunction(num1, num2, num3){
    let max;
    if (num1 > num2) {
        max = num1
    } else {
        max = num2
    }
    if (max > num3) {
        max = max
    } else {
        max = num3
    }
    return max
}
console.log(oneFunction(12, 5, 11));

// 2 masala








