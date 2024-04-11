//string
let x="hello";
console.log(x);
console.log(typeof(x));
//number
let y=1.4;
console.log(y);
console.log(typeof(y));

let z=5;
console.log(z)
console.log(typeof(z));

//boolean
let m=true;
console.log(m)
console.log(typeof(z));

//undefined
let w;
console.log
w="9";
console.log(typeof(w));

//reference types- objects, Strings, Functions
let course={
    title: "hello",
    description: "js",
    ratings:5
};

console.log(course);
onslotchange.log(typeof(title));
console.log(course.description);

let u="yash";
let v=x;
v="hi";

console.log(u);
console.log(v);

let a={name:"yashia"};
let b=a;

console.log(a);
console.log(b);

//arrays and functions are objects only
let c=['hi','dhkh','dbb','dskj','6',true];

console.log(typeof(c));

//function
function createCourse(courseName){
    console.log('creating'+ courseName);
}

createCourse('djsd');
createCourse('skjndc');

//execution context
//1.mempry phase- variable env- memory allocated
//2.code phase-thread of execution

//window and this
console.log(a);
var f=10;

console.log(a);
console.log(this.a);
console.log(window);
console.log(this.a==window);

//let, var and const
//const and let are more strict use const 
// whenever you want you want your value to be constant 
// and it cannot be changed , use let otherwise avoid using var

//lexical scope- you basically check where it is located and 
// can we access it or not

function hello(){
    let x=10;
    console.log(x);
}

hello();

//function - first class citizens
//higher order functions- functions that takes one more function as an argument or returns a function as a result

// function addno(a,b){
//     return a+b;
// }

// console.log(add)
// console.log(add(2,3))

let sum=function(a,b){
    return a+b
}

let diff=function(a,b){
    return a-b
}

function operate(operationfunc,a,b){
       return operatefunction(a,b)
}

console.log(sum)
console.log(sum(2,3))


console.log(sum)
console.log(sum(2,3))








