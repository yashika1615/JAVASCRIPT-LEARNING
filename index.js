//functions
function sayHello(){
    console.log("hello")
}

//calling of functions
sayHello()
sayHello()
sayHello()
sayHello()
sayHello()

//to access functions we have parameters
function add(a,b){
   console.log(a+b)
}

add(5,10)
add(2,8)

//a and b are arguments
//during function call when we pass the 
//value we call it as parameters
//during function definition it is arguments
//during function call it is parameters

//unlimites arguments accept

function addNum(a,b)
{
 console.log(arguments)
}

addNum(1,3,5,6,4)
//arguments- object- jo bhhi parameters
 //recieve voh js arguments main daal deti hai

 function addNum2()
{
    let ans=0;
    for(let i=0; i<arguments.length;i=i+1){
        ans=ans+arguments[i]
    }
 return ans
}

let result= addNum2(1,4,5,6)
console.log(result)

//using spread operator
function addNum1(...numbers){
  let ans=0;
  for(let i=0;i<numbers.length;i++){
    ans=ans+numbers[i];
  }
  return ans;
}
let result1= addNum2(73,3,3)
console.log(result)

//arrow function
//1.syntax
 function sayHello(){
    console.log("hello");
 }

 sayHello()

 //write the same in arrow function now
  const sayHello1=() =>{
    console.log("hey");
  }
sayHello1()
  const add=(a,b) =>{
    return a+b;
  }
  console.log(add(2,3));

  //return without using return statement
  const add1=(a,b) => a+b;

  console.log(add1(2,3));
//2.'arguments' keyword
 
    //arguments keyword is not available in arrow function
    //so now to use unlimited parameters use spread operator
    const addNum3=(...nums) =>{
        console.log(nums);
    }

//3.Hoisting
sayHey()
   function sayHey(){
    console.log("hey there");
   }

// this is hoisting - when you call a function first
// and then call 
// js pehle hi function ko memory main rakh
//  leti hai aur phir baad main call karti hai

// this wouldnt have worked in case of arrow functions
// initialize it first and then run it
function sayHey(){
    console.log("hey there");
   }
   sayHey();
//4.This keyword
const obj={
    value: 20,
    myfunction: function(){
        console.log("value is" +this.value);
    },
};
obj.myfunction();
// so in this function this keyword is referring to the current object
//but in arrow function its showing value undefined
//in arrow functions this keyword 
//comes as a window object
//arrow function ka scope hota hai globalThis

const obj1={
    value:20,
    myfunction: () =>{
        console.log(this);
    },
};

obj1.myfunction();

const y={name:'Yashika'};
console.log(typeOf(y));

//data types in js
//diff between undefined and null
//NAN

let b;
console.log(b);

//js ka code top to bottom
//acc to comp code running from left to right

//event trigger- event call horha
//event trigger -> event listen hoga -> function call

//who is responsible for pattern matching in js- Rgex(regular expression) also it works in the 3-tier architecture
// 3-tier arch (frontend / backend / database)
// two types of arch- monolithic /2-tier / 3-tier

//what is instance in fetch method
//payload - voh data jo frontend se data carry hoti hai
//payload jaa rha toh post req/ nhin jaaa rha toh get
//data jab api main travel karta hai toh voh string ki format main karta hai
// middleware - to encode data

//call back functions /promises/ synchronous and asynchronous
//async/await
//diff es5 and es6










// Here are top 40 Javascript questions that are frequently asked in Frontend interviews -

// 𝟭-𝟭𝟬: 𝗕𝗮𝘀𝗶𝗰𝘀 𝗼𝗳 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁

// 1. What is JavaScript?
// 2. Explain the difference between let, const, and var.
// 3. How does hoisting work in JavaScript?
// 4. Describe the concept of closures.
// 5. Explain the event loop in JavaScript.
// 6. What is the difference between == and ===?
// 7. How do you check the type of a variable in JavaScript?
// 8. What is the use of the this keyword in JavaScript?
// 9. Explain the difference between function declaration and function expression.
// 10. How does the setTimeout function work?

// 𝟭𝟭-𝟮𝟬: 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝗮𝗻𝗱 𝗦𝗰𝗼𝗽𝗲

// 11. What is a callback function?
// 12. Explain the concept of a pure function.
// 13. Describe the differences between function.call, function.apply, and function.bind.
// 14. What is the purpose of the arguments object in a function?
// 15. How do you create a closure in JavaScript?
// 16. What is the use of the bind method?
// 17. What is the difference between a shallow copy and a deep copy?
// 18. How does the call stack work in JavaScript?
// 19. Explain the concept of function currying.
// 20. How can you avoid callback hell in JavaScript?

// 𝟮𝟭-𝟯𝟬: 𝗢𝗯𝗷𝗲𝗰𝘁𝘀 𝗮𝗻𝗱 𝗣𝗿𝗼𝘁𝗼𝘁𝘆𝗽𝗲𝘀

// 21. What is prototypal inheritance?
// 22. How do you create an object in JavaScript?
// 23. What is the purpose of the prototype property in JavaScript?
// 24. Explain the difference between Object.create and the constructor pattern.
// 25. How do you add a property to an object in JavaScript?
// 26. What is the hasOwnProperty method used for?
// 27. How can you prevent modification of object properties in JavaScript?
// 28. Describe the use of the new keyword.
// 29. Explain the concept of Object Destructuring in JavaScript.
// 30. What is the difference between null and undefined?

// 𝟯𝟭-𝟰𝟬: 𝗗𝗢𝗠 𝗠𝗮𝗻𝗶𝗽𝘂𝗹𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗘𝘃𝗲𝗻𝘁𝘀

// 31. What is the DOM?
// 32. How do you select elements with Vanilla JavaScript?
// 33. Explain event delegation in JavaScript.
// 34. What is the purpose of the addEventListener method?
// 35. How do you create and remove elements in the DOM?
// 36. Explain the concept of event propagation.
// 37. How can you prevent the default behaviour of an event?
// 38. What is the purpose of the data- attribute in HTML?
// 39. Describe the difference between innerHTML and textContent.
// 40. How do you handle asynchronous code in JavaScript?


