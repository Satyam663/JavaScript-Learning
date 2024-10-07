//  sum of n natural no

let result = prompt("Enter no of which you want sum: ");
let sum = 0;

for (let count = 1; count <= result; count++) {
    sum = sum + count;
}
console.log("Sum of no : ", sum);