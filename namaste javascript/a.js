// hoisting
// getName();
// console.log(x);


// var x=7;
// function getName(){
//     console.log("heelo");
// }

// function a(){
//     var y=10;
//     console.log(y);
// }

// function b(){
//     var y=15;
//     console.log(y);
// }

// function A1(func2){
//     console.log("A");
//     setTimeout(B,5000)
//     while(true){
//         console.log("hello");
//     }
// }

// function B(){
//     console.log("B");
// }

// A(B);

//call stack=> A()(e) -> clg('A') (e) -> B() -> clg('B') 
// Ram -> memory
// web api- only execute asynchronous task- it will push the callback function B to callback queue after 5 sec
// callback queue- fifo - B(event)
// event loop -> 

// lifecycle of callback functions
// callstack- webapi- callback queue and back to the callstack
  
// it will take min 5 sec to execute even if the callstack is busy

// function W1(){
//     function W2(){
//         function W3(){

//         }
//     }
//}   // callback hell

// passign callback functions to another function so that nesting tkes places that is known as
// callback hell 
// to prevent callback hell there is promises

// promises
// object- key value pair 

//promise is also like an object
// promise tell us 2 things (1) status- current work ka status (2) data- 
// i promise that i will make this asynchronous call either this call with fullfilled or rejected
// if it gets fulfilled 
// in js everything is nothing but an object

// {
//     status:'Pending' -> 'Fullfilled' -> 'rejected'
//     data:
// }

// write a promise
// kisi bhi class ka instance banana ho toh new kaam hota hai

// const p1= new Promise((res, rej) =>{
//       return res("abcd")
// })

// console.log(p1);
// setTimeout(() =>{
//     console.log(p1);
//  }, 5000);


// direct way of creating object
const student= {
   fullname: "yashika",
   marks: 9.75,
   printMarks: function(){
      console.log("marks =", this.marks);
   },
};

const employee= {
    calctax(){
        console.log("the tax rate is 10%");
    },
    calctax2: function(){
        console.log("bfbabrfkav");
    },
};


const karanarjun={
    salary: 50000,
};

const karanarjun2={
    salary: 46335,
};

const karanarjun3={
    salary: 46335,
};

const karanarjun4={
    salary: 46335,
};

// set a prototype- 
karanarjun.__proto__ = employee;
karanarjun2.__proto__ = employee;
karanarjun3.__proto__ = employee;
karanarjun4.__proto__ = employee;


// classes

class ToyotaCar{
   start(){
    console.log("start");
   }

   stop(){
    console.log("stop");
   }
   
    setBrand(brand){
        this.brand= brand;
   }
}

// is class se objects se create karna hai toh 
// yeh toyota ki baaaki cars ke liye template ban gya hai

let fortuner= new ToyotaCar(); // constructor is envoked
 fortuner.setBrand("fortuner");
let lexus= new ToyotaCar();
lexus.setBrand("lexus");

// inheritance

class parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{}
     let obj= new Child();



class Person{
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eats");
    }

sleep(){
    console.log("sleeps");
}

  work(){
    console.log("person works");
  }
}

class Engineer extends Person{
    work() {
        console.log("solve problem , build something");
    }
}

let yash= new Engineer();








