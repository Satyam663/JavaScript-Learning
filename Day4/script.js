

// let no = prompt("enter number upto which we have to print");
// let count = 0;
// console.log("number till ", no);
// for (let i = 1; i <= no; i++) {
//     if (i % 2 == 0) {
//         console.log("even no's", i);

//     }
//     else {

//         count++;

//     }
// }
// console.log("count is ", count);

//-------------------------------------- game ---------------------------------------------


// let gamNo = 25;

// let userNo = prompt("User plz guess a no. ");


// while (userNo != gamNo) {
//     userNo = prompt("you entered wrong no,Guess again !!");
//     console.log("wrong no");
// }


// console.log("Congratulations, Player wins!!! ");



//----------------------------------------------- practice ------------------------------------


// let name = prompt("Enter name");

// let str = name;

// str1 = "@" + str + str.length;

// console.log(str1);




//-------------------------------- avg -------------------------


// let num = [23, 45, 67, 89, 24, 15];
// let sum = 0;


// for (let i of num) {
//     sum += i;

// }
// let avg = (sum / num.length);
// console.log("average of no's: ", avg);
// console.log(`average marks of ${avg}`);



//---------------------------- array ---discount offer ---------------

// let price= [10,20,30,40,50];

// const per_discount = 10;
// let new_price=0;

// for(let i of price){
//     new_price= (per_discount/100)*i;

//------------------------------------- array implementation -----

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// //let arr1 = companies.shift();

// //console.log(arr1);

// let arr1 = companies.splice(2, 1, "Ola");
// console.log(arr1);


//-----------------------------  vowels --------------------------


// function count_vowels(str) {

// let count = 0;

// for (const char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//         char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//         count++;
//     }
// }
// return count;
// }


//--------------------- arrow function ---------------------------------

// const count_vow = (str) => {
//     let count = 0;

//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//             char === "A" || char === "E" || char === "I" || char === "O" || char === "U")
//             {
//             count++;
//             }
//     }
//     return count;

// }



//-------------------- forEach _______----------------------------------


// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach(function square(val) {
//     console.log(val * val);
// });


//  --------------  for Each another way  ------------------------



// let arr = [1, 2, 3, 4, 5, 6, 7];

// let calSquare = (num) => {
//     console.log(num * num);
// }

// arr.forEach(calSquare);


// --------------------------   using filter -------------


// let arr = [1, 2, 3, 4, 5, 6, 7];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);



//-------------- using reduce method , find largest no

// let arr = [4, 1, 23, 67, 34, 9, 2];

// const largestNo = arr.reduce((prev, cur) => {
//     return prev > cur ? prev : cur;
// });

// console.log(largestNo);



//---------------------------------- Practice Q1 -------5:32-------

// let marks = [10, 30, 50, 91, 93, 95, 20, 48, 99, 100, 23];

// let topperMarks = marks.filter((val) => {
//     return val > 90;
// });
// console.log(topperMarks);



//--------------------------------  questions ------


// let num = prompt("Enter a no. ");

// let arr = [];

// for (let i = 1; i <= num; i++) {
//     arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log("Sum of no's : ", sum);

// let prod = arr.reduce((prev, curr) => {
//     return prev * curr;
// });
// console.log("Product of no's : ", prod);



//---------------------------------  DOM -------------------

// let heading = document.getElementById("learning");
// console.dir(heading);


// ---------------------------------  practice questions  6hr 43min -------------


// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna college";


// ----------- question2 --------------

// let divs = document.querySelectorAll(".box");

// let i = 0;
// for (div of divs) {
//     div.innerText = `new unique value of ${i}`;
//     i++;
// }


//--------------------------------------  qusetion ---- 7hr 8min  -------------


// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);


// // question2----------------------------------

// let para = document.querySelector("p");




// Events handling in JS ----------------------------------------------------------


// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button was clicked !!");
// }

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("Inside box");
// }


//  eventlistner handling in JS -------------------------------------------

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("Button 1 was clicked  handler 1 !!");
// }
// )

// btn1.addEventListener("click", () => {
//     console.log("Button 1 was clicked  handler 2 !!");
// }
// )

// const handler3 = () => {
//     console.log("Button 1 was clicked  handler 3 !!");
// }

// btn1.addEventListener("click", handler3)


// btn1.addEventListener("click", () => {
//     console.log("Button 1 was clicked  handler 4 !!");
// }
// )

// btn1.removeEventListener("click", handler3)


// --------------  toogle btn when cliked chnnges from dark to light and vice versa -----------------


let modeBtn = document.querySelector("#mode");

let currMode = 'light';
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if (currMode === 'light') {
        currMode = 'dark';
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else {
        currMode = 'light';
        body.classList.add("light");
        body.classList.remove("dark");

    }

    console.log(currMode);
})












