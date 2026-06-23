// var studentName = "Ali";
// var marks = 85;
//  console.log(studentName);
//  console.log(marks);

// let city = "Karachi";     //Variable create
//  city = "Lahore"          //Variable updated

//  console.log(city)


// const country = "Pakistan";
// console.log (country)

//  let city = "Karachi";       //   varaible created
//   city = "Lahore" ;           //   varaible updated

// let country ="Pakistan"
// country ="Turkey";


// let population = 20000000000;


// console.log(city);
// console.log(country);
// console.log(population);


// let name = "Ali";

// document.write("Student Name: " + name);


// let fruits = ["Apple", "Banana", "Mango"];
// document.write(fruits[0]);
 
// let Student = {
//    name :  "ALi",
//    age : 15,
//    grade: "9th"
// };
// document.write(Student.name)
// let name = "Ali";
// document.writeln("Student Name: " + name);
// document.writeln("<br> Age: 15");

// Data types
// let name = "ALi";
// console.log("String",name);

// let age = 15;
// document.write("Number:",age);

// let isStudent = false;
// document.write("Boolean:",isStudent );

// let city ;

// document.write("Undefined:" , city);

// let emptyValue = null;
// document.write("Null :",emptyValue );

// let colors = ["Red", "Blue","Green"];

// document.write("Array:", colors);


// console.log("Hello\nWorld");   // New line
// console.log("Hello\tWorld");   // Tab space
// console.log("It\'s fine");     // Single quote
// console.log("C:\\Program");    // Backslash
// console.log("\u00A9 2026");    // © 2026

// Built in Function//

// alert("Please fill all the feilds of the form");

// let result = confirm("Are you sure you want to close the page?");
// console.log(result);

// let age = parseInt("25 years");
// console.log(age);
// let price = parseFloat("10.3333");
// console.log(price);

// let result = eval("2+2");
// document.write(result);
//  console.log(isNaN("Hello"));

//  console.log(isNaN(25));

// let name = prompt("Enter your name", "Name");
// console.log(name);

// Arthimetical Operators
// let a = 10;
// let b = 3;
// document.write(a%b);
// document.write(a/b);
// document.write(a*b);
// document.write(a-b);
// document.write(a+b);

// Increment Operators
// let x = 10;

// x++
// console.log(x);

// Decrement Operators
// let y = 100;

// y--
// document.write(y);

// Relational Operators

// let a = 10;
// let b = 10;
// document.write(a===b);
// document.write(a<=b);
// document.write(a>=b);
// document.write(a<b);
// document.write(a>b);
// document.write(a!=b);
// document.write(a==b);

// Logical Operators

// AND OPERATOR
// let a = 10;
// let b = 5;
// document.write(a >5 && b < 10);

// NOT OPERATORS
// let a = 10;
// document.write(!(a<5));

// Assignment Operators
// let b= 30;
//  b = 20;
// document.write(b);
// document.write(b);


// function greet(name){
//     document.write("Hello <br> " + name);
// }

// greet("ALi");

// let age= 18;
// if(age>=18){
//  document.write("You are adult.");

// }




// let age= 18;
// if(age<=10){
//  document.write("You are adult.");

// }
// else{
//     document.write("You are under age")
// }


// let marks = 100;
// if(marks>90) {

//     document.write("Grade A");
// }

// else if (marks>=75){
//     document.write("Grade B");
// }

// else if (marks>=50){
//     document.write("Grade C");
// }
// else{
//     document.write("Fail");
// }


// let day =4;
//  switch(day){

//     case 1:
//         document.write("Monday");
//        break;

//         case 2:
//         document.write("Tuesday");
//        break;

//         case 3:
//         document.write("Wednesday");
//        break;

//        default:
//         document.write("Invalid day");
//  }


// FOR LOOP

// for (let i= 1; i <=5; i++){
 
//     console.log(i);
// }

// WHILE LOOP

// let i=1;
//  while(i<=100){
//     console.log(i);
//     i++;
//  }

// let i = 1   ;

// while(i >= 10   ) {
//     console.log(i);
//     i--;
// }

// let i = 10;
// while(i >=1){
//     console.log(i);
//     i--;
// }


// DO WHILE LOOPS

// let i = 1;
//   do{
//      console.log(i);
//      i++;
//   } 
//   while(i<=5);


// let i = 1;

// do {
//     console.log(i);
//     i++;
// } 
// while(i >= 5);

// FOR IN LOOP
// let student = {
// name: "Ali",
// age: 15,
// class: 9
// };

// for(let key in student) {
// console.log(key + ": " + student[key]);
// }

// Break


// for(let i = 1; i <= 5; i++) {
//     if(i == 3) break;
//     console.log(i);
// }

//  continue

// for(let i = 1; i <= 5; i++) {
//     if(i == 3) continue;
//     console.log(i);
// }

// let p1 = Promise.reject("Server 1 error");
// let p2 = Promise.reject("Server 2 error");
// let p3 = Promise.resolve("Data from Server 3");

// Promise.any([p1,p2,p3])

// .then(result=> console.log(result))
// .catch(error => console.log(error));


// let p1 = Promise.reject("Server 1 error");
// let p2 = Promise.reject("Server 2 error");
// Promise.any([p1,p2])
// .catch(error => console.log(error));



// class Person {
//     name = "Ahmed";       // Public
//     #age = 20;            // Private

//     show() {
//         console.log(this.name, this.#age);
//     }

// }

// let p = new Person();
// p.show();


//  console.log(location.href);

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello Maaz!"), 2000);
// });

// async function getData() {
//     try {
//         let result = await promise;  // promise ka result ka intizaar karna
//         console.log(result);         // 2 second baad print hoga: Hello Maaz!
//     } catch (error) {
//         console.error("Error:", error); // agar promise reject ho jaye to yahan error aayegi
//     }
// }

// getData();

// let promise = new Promise((resolve, reject) => {
//     // Randomly decide if promise resolves or rejects
//     let success = Math.random() > 0.5; // 50% chance
//     setTimeout(() => {
//         if (success) {
//             resolve("Hello Maaz!");   // success
//         } else {
//             reject("Oops! Something went wrong.");  // error
//         }
//     }, 2000);
// });

// async function getData() {
//     try {
//         let result = await promise;  
//         console.log("Success:", result);  // agar resolve hua
//     } catch (error) {
//         console.error("Error:", error);   // agar reject hua
//     }
// }

// getData();




// let promise = new Promise((resolve, reject) => {

//   setTimeout(() => resolve ("HEllO STUDENTS!"), 2000);
// } );

// async function getData() {
//     try{
//         let result = await promise;
//         console.log(result);
//     } catch(error){
//         console.log("Error:", error);
//     }
    
// }
// getData();



// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//      reject ("Oops ! something went wrong.")
//     }, 5000);
    
// });

// async function getData() {

//     try{
//         let result = await promise;
//         console.log("Sucess:", result);
//     } catch(error){
//         console.log("Error:", error);
//     }
    
// }

// getData();


const person= {
    name: "Ali",
    age: 20 
};

console.log(Object.hasOwn(person, "name"));
console.log(Object.hasOwn(person, "age"));
console.log(Object.hasOwn(person, "tostring"));






















