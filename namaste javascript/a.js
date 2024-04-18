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

function A1(func2){
    console.log("A");
    setTimeout(B,5000)
    while(true){
        console.log("hello");
    }
}

function B(){
    console.log("B");
}

A(B);

//call stack=> A()(e) -> clg('A') (e) -> B() -> clg('B') 
// Ram -> memory
// web api- only execute asynchronous task- it will push the callback function B to callback queue after 5 sec
// callback queue- fifo - B(event)
// event loop -> 

// lifecycle of callback functions
// callstack- webapi- callback queue and back to the callstack
  
// it will take min 5 sec to execute even if the callstack is busy

function W1(){
    function W2(){
        function W3(){

        }
    }
}   // callback hell

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

const p1= new Promise((res, rej) =>{
      return res("abcd")
})

console.log(p1);
setTimeout(() =>{
    console.log(p1);
}, 5000)




