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
console.log