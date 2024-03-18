//higher order functions and callback
//a function that takes a function as an argument

// function add(a,b,cb){
//     let result= a+b;
//     cb(result);
// }

// function showResult(result){
//     console.log(result);
// }
// add(2,4,showResult);
// //using arrow function
// add(2,4,(val)=> console.log(val));

//handy when you are doing a task that is time consuming

// function returning function
function add1(a,b,cb){
    let result1=a+b;
    cb(result1);
    return() => console=log(result);
}
   
let resultFunction= add2(2,4, () => {});
resultFunction();



