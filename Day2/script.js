// Grade calculator


let num = prompt("Enter the no.");

if (num >= 80 && num <= 100) {
    console.log(num, "Grade A");
}
else if (num >= 70 && num <= 89) {
    console.log(num, "Grade B");
}

else if (num >= 50 && num <= 59) {
    console.log(num, "Grade D");
}

else if (num >= 0 && num <= 49) {
    console.log(num, "Grade F");
}

else {
    console.log(num, "Out of range!!!");
}

11


