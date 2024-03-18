//array
//store multiple values in a single varibale

const students= ['piyush','john','jane'];
console.log(students);
console.log(students.length);

//to access particular element

console.log(students[1]);
//students varibale ko nhin change kar sakte par
//ki jo values hain usmain change kar sakte hain

students[1]="hello";
console.log(students);

students.push("bye");
students.push("hello","hi","yeyy");

console.log(students);
const myArr=[1,"hello","&"];
myArr.push("true");
//you can make heterogeneous array in javascript

console.log(myArr.indexOf("true"));
console.log(myArr.pop());
myArr.reverse();

//higher order functions in arrays
function print(n){
    console.log(n);
}
students.forEach(print);

//map-
students.map((val) => console.log(val));
//diff between for each and map is that map returns a new array

const numbers =[1,2,3,4,5,6,7];
let newArr=[];
numbers.forEach((num)=> newArr.push(num*2));
console.log(newArr);

//slice-array ka chota sa subarray part chhaaiye
let newArr1= numbers.slice(1,5);
console.log(newArr1);

let newArr3= numbers.slice(2);
console.log(newArr3);

//splice- remove elements from the array and if necessary inserts new elements in their place
//returning the deleted elements

let newArr2= numbers.splice(1,4);
console.log(newArr2);