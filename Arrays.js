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

