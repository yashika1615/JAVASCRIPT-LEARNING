// //functions
// function sayHello(){
//     console.log("hello")
// }

// //calling of functions
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()

// //to access functions we have parameters
// function add(a,b){
//    console.log(a+b)
// }

// add(5,10)
// add(2,8)

// //a and b are arguments
// //during function call when we pass the 
// //value we call it as parameters
// //during function definition it is arguments
// //during function call it is parameters

// //unlimites arguments accept

// function addNum(a,b)
// {
//  console.log(arguments)
// }

// addNum(1,3,5,6,4)
// //arguments- object- jo bhhi parameters
//  //recieve voh js arguments main daal deti hai

//  function addNum2()
// {
//     let ans=0;
//     for(let i=0; i<arguments.length;i=i+1){
//         ans=ans+arguments[i]
//     }
//  return ans
// }

// let result= addNum2(1,4,5,6)
// console.log(result)

// //using spread operator
// function addNum1(...numbers){
//   let ans=0;
//   for(let i=0;i<numbers.length;i++){
//     ans=ans+numbers[i];
//   }
//   return ans;
// }
// let result1= addNum2(73,3,3)
// console.log(result)

// //arrow function
// //1.syntax
//  function sayHello(){
//     console.log("hello");
//  }

//  sayHello()

//  //write the same in arrow function now
//   const sayHello1=() =>{
//     console.log("hey");
//   }
// sayHello1()
//   const add=(a,b) =>{
//     return a+b;
//   }
//   console.log(add(2,3));

//   //return without using return statement
//   const add1=(a,b) => a+b;

//   console.log(add1(2,3));
// //2.'arguments' keyword
 
//     //arguments keyword is not available in arrow function
//     //so now to use unlimited parameters use spread operator
//     const addNum3=(...nums) =>{
//         console.log(nums);
//     }

// //3.Hoisting
// sayHey()
//    function sayHey(){
//     console.log("hey there");
//    }

// // this is hoisting - when you call a function first
// // and then call 
// // js pehle hi function ko memory main rakh
// //  leti hai aur phir baad main call karti hai

// // this wouldnt have worked in case of arrow functions
// // initialize it first and then run it
// function sayHey(){
//     console.log("hey there");
//    }
//    sayHey();
// //4.This keyword
// const obj={
//     value: 20,
//     myfunction: function(){
//         console.log("value is" +this.value);
//     },
// };
// obj.myfunction();
// // so in this function this keyword is referring to the current object
// //but in arrow function its showing value undefined
// //in arrow functions this keyword 
// //comes as a window object
// //arrow function ka scope hota hai globalThis

// const obj1={
//     value:20,
//     myfunction: () =>{
//         console.log(this);
//     },
// };

// obj1.myfunction();

// const y={name:'Yashika'};
// console.log(typeOf(y));

// //data types in js
// //diff between undefined and null
// //NAN

// let b;
// console.log(b);

// //js ka code top to bottom
// //acc to comp code running from left to right

// //event trigger- event call horha
// //event trigger -> event listen hoga -> function call

// //who is responsible for pattern matching in js- Rgex(regular expression) also it works in the 3-tier architecture
// // 3-tier arch (frontend / backend / database)
// // two types of arch- monolithic /2-tier / 3-tier

// //what is instance in fetch method
// //payload - voh data jo frontend se data carry hoti hai
// //payload jaa rha toh post req/ nhin jaaa rha toh get
// //data jab api main travel karta hai toh voh string ki format main karta hai
// // middleware - to encode data

// //call back functions /promises/ synchronous and asynchronous
// //async/await
// //diff es5 and es6

// emojis in html - 
//webkit in css
//what is chunks- when you fetch something from the website the rquest goes to backend and then it gets send to the database
//suppose at the backend the result is 50000 it will not send 50000 data to rather in small chunks
//sending small small data to the frontend is chunks

//what is load balancing and load balancer

/*
𝟏-𝟏𝟎: 𝐁𝐚𝐬𝐢𝐜𝐬 𝐨𝐟 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭

1. What is JavaScript?
2. Explain the difference between let, const, and var.
3. How does hoisting work in JavaScript?
4. Describe the concept of closures.
5. Explain the event loop in JavaScript.
6. What is the difference between == = and ===?
7. How do you check the type of a variable in JavaScript?
8. What is the use of the this keyword in JavaScript?
9. Explain the difference between function declaration and function expression.
10. How does the setTimeout function work?

𝟏𝟏-𝟐𝟎: 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐬 𝐚𝐧𝐝 𝐒𝐜𝐨𝐩𝐞

11. What is a callback function?
12. Explain the concept of a pure function.
13. Describe the differences between function.call,function.apply, and function.bind.
14. What is the purpose of the arguments object in a function?
15. How do you create a closure in JavaScript?
16. What is the use of the bind method?
17. What is the difference between a shallow copy and a deep copy?
18. How does the call stack work in JavaScript?
19. Explain the concept of function currying.
20. How can you avoid callback hell in JavaScript?

𝟐𝟏-𝟑𝟎: 𝐎𝐛𝐣𝐞𝐜𝐭𝐬 𝐚𝐧𝐝 𝐏𝐫𝐨𝐭𝐨𝐭𝐲𝐩𝐞𝐬

21. What is prototypal inheritance?
22. How do you create an object in JavaScript?
23. What is the purpose of the prototype property in JavaScript?
24. Explain the difference between Object.create and the constructor pattern.
25. How do you add a property to an object in JavaScript?
26. What is the hasOwnProperty method used for?
27. How can you prevent modification of object properties in JavaScript?
28. Describe the use of the new keyword.
29. Explain the concept of Object Destructuring in JavaScript.
30. What is the difference between null and undefined?

𝟑𝟏-𝟒𝟎: 𝐃𝐎𝐌 𝐌𝐚𝐧𝐢𝐩𝐮𝐥𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐄𝐯𝐞𝐧𝐭𝐬

31. What is the DOM?
32. How do you select elements with Vanilla JavaScript?
33. Explain event delegation in JavaScript.
34. What is the purpose of the addEventListener method? 35. How do you create and remove elements in the DOM?
36. Explain the concept of event propagation.
37. How can you prevent the default behaviour of an event?
38. What is the purpose of the data- attribute in HTML?
39. Describe the difference between innerHTML and textContent.
40. How do you handle asynchronous code in JavaScript?
*/














// // Here are top 40 Javascript questions that are frequently asked in Frontend interviews -

// // 𝟭-𝟭𝟬: 𝗕𝗮𝘀𝗶𝗰𝘀 𝗼𝗳 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁

// // 1. What is JavaScript?
// // 2. Explain the difference between let, const, and var.
// // 3. How does hoisting work in JavaScript?
// // 4. Describe the concept of closures.
// // 5. Explain the event loop in JavaScript.
// // 6. What is the difference between == and ===?
// // 7. How do you check the type of a variable in JavaScript?
// // 8. What is the use of the this keyword in JavaScript?
// // 9. Explain the difference between function declaration and function expression.
// // 10. How does the setTimeout function work?

// // 𝟭𝟭-𝟮𝟬: 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝗮𝗻𝗱 𝗦𝗰𝗼𝗽𝗲

// // 11. What is a callback function?
// // 12. Explain the concept of a pure function.
// // 13. Describe the differences between function.call, function.apply, and function.bind.
// // 14. What is the purpose of the arguments object in a function?
// // 15. How do you create a closure in JavaScript?
// // 16. What is the use of the bind method?
// // 17. What is the difference between a shallow copy and a deep copy?
// // 18. How does the call stack work in JavaScript?
// // 19. Explain the concept of function currying.
// // 20. How can you avoid callback hell in JavaScript?

// // 𝟮𝟭-𝟯𝟬: 𝗢𝗯𝗷𝗲𝗰𝘁𝘀 𝗮𝗻𝗱 𝗣𝗿𝗼𝘁𝗼𝘁𝘆𝗽𝗲𝘀

// // 21. What is prototypal inheritance?
// // 22. How do you create an object in JavaScript?
// // 23. What is the purpose of the prototype property in JavaScript?
// // 24. Explain the difference between Object.create and the constructor pattern.
// // 25. How do you add a property to an object in JavaScript?
// // 26. What is the hasOwnProperty method used for?
// // 27. How can you prevent modification of object properties in JavaScript?
// // 28. Describe the use of the new keyword.
// // 29. Explain the concept of Object Destructuring in JavaScript.
// // 30. What is the difference between null and undefined?

// // 𝟯𝟭-𝟰𝟬: 𝗗𝗢𝗠 𝗠𝗮𝗻𝗶𝗽𝘂𝗹𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗘𝘃𝗲𝗻𝘁𝘀

// // 31. What is the DOM?
// // 32. How do you select elements with Vanilla JavaScript?
// // 33. Explain event delegation in JavaScript.
// // 34. What is the purpose of the addEventListener method?
// // 35. How do you create and remove elements in the DOM?
// // 36. Explain the concept of event propagation.
// // 37. How can you prevent the default behaviour of an event?
// // 38. What is the purpose of the data- attribute in HTML?
// // 39. Describe the difference between innerHTML and textContent.
// // 40. How do you handle asynchronous code in JavaScript?

// HTML/CSS Fundamentals:
// Review essential HTML tags and attributes, including semantic elements like <header>, <nav>, <main>, and <footer>.
// Understand CSS box model, selectors, specificity, and inheritance.
// Practice common CSS layout techniques such as flexbox and grid.

// JavaScript Proficiency:
// Master JavaScript fundamentals like variables, data types, operators, and control flow statements.
// Understand concepts such as functions, scope, closures, and prototypes.
// Familiarize yourself with ES6+ features like arrow functions, template literals, destructuring, and spread/rest operators.

// DOM Manipulation and Events:
// Demonstrate proficiency in manipulating the DOM using vanilla JavaScript methods like getElementById, querySelector, createElement, etc.
// Understand event handling and propagation, including event listeners and event delegation.

// Frontend Frameworks:
// If applying for roles involving frontend frameworks like React, Vue.js, or Angular, ensure a strong understanding of the framework's core concepts, including components, state management, routing, and lifecycle methods.
// Practice building small projects or components using the framework of your choice.

// Responsive Web Design:
// Showcase your knowledge of responsive design principles and techniques.
// Understand media queries, viewport meta tag, and CSS units like percentages, ems, and rems.
// Practice building layouts that adapt to various screen sizes and orientations.

// Web APIs and Asynchronous Programming:
// Familiarize yourself with common Web APIs such as Fetch API, Local Storage, Session Storage, and Web Workers.
// Understand asynchronous programming concepts like callbacks, promises, async/await, and handling asynchronous data in JavaScript.

// Browser Developer Tools:
// Be comfortable using browser developer tools for debugging, inspecting elements, analyzing network requests, and profiling performance.
// Practice using browser extensions like Redux DevTools for debugging state management in frontend frameworks.

// Code Challenges and Algorithmic Problem-Solving:
// Prepare for coding challenges and algorithmic problem-solving questions that may be part of the interview process.
// Practice solving problems on platforms like LeetCode, HackerRank, or CodeSignal.

// Version Control Systems:
// Understand version control systems like Git and demonstrate proficiency in basic Git commands such as clone, commit, push, pull, branch, merge, and rebase.

// Soft Skills and Communication:
// Be prepared to discuss your previous projects, experiences, and contributions.
// Practice communicating technical concepts clearly and concisely, especially when discussing complex topics or problem-solving approaches.


// HTML:
// • What is the purpose of the doctype declaration?
// • Explain the difference between <div> and <span>.

// CSS:
// • What is the box model in CSS?
// • Describe the difference between margin and padding.

// JavaScript Basics:
// • Explain the concept of hoisting in JavaScript.
// • What is the difference between let, const, and var?

// JavaScript Functions:
// • What is a closure in JavaScript?
// • Explain the differences between arrow functions and regular functions.

// DOM Manipulation:
// • How does event delegation work in the DOM?
// • Explain the purpose of the data- attributes.

// Responsive Design:
// • What is the importance of media queries in responsive design?
// • Describe the difference between em and rem units in CSS.

// CSS Flexbox:
// • What is the flexbox model, and how does it work?
// • Explain the purpose of justify-content and align-items in flexbox.

// CSS Grid:
// • How does CSS Grid differ from Flexbox?
// • Explain the use of the grid-template-columns property.

// AJAX:
// • What is AJAX, and how does it work?
// • Explain the role of the XMLHttpRequest object.

// RESTful API Concepts:
// • What is REST, and how does it differ from SOAP?
// • Describe the common HTTP methods used in RESTful APIs.

// React Basics:
// • What is JSX in React?
// • Explain the purpose of state in React components.

// React Components:
// • Differentiate between functional and class components in React.
// • Describe the lifecycle methods in a React class component.

// React Hooks:
// • Explain the use of the useState hook in React.
// • What is the useEffect hook, and why is it used?

// Redux:
// • What problem does Redux solve in a React application?
// • Explain the roles of actions, reducers, and the store in Redux.

// Web Performance Optimization:
// • How can you optimize website performance?
// • Explain lazy loading and its benefits.

// Cross-Origin Resource Sharing (CORS):
// • What is CORS, and how does it work?
// • Describe how to handle CORS issues in a web application.

// Web Security:
// • What is Cross-Site Scripting (XSS), and how can it be prevented?
// • Explain Cross-Site Request Forgery (CSRF) and its prevention methods.

// Version Control (Git):
// • Describe the purpose of Git and how it differs from other version control systems.
// • Explain the Git branching strategy and the use of merge vs. rebase.

// Build Tools (e.g., Webpack):
// • What is Webpack, and how does it improve the frontend development workflow?
// • Explain the concept of code splitting in Webpack.

// Testing in Frontend Development:
// • What are the benefits of unit testing in a frontend application?
// • Describe the differences between unit testing and integration testing.

