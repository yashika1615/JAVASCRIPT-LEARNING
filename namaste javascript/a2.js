function hello(){
    console.log("hello");
}

setTimeout(hello,4000);


// write clg directly inside tge setTimeout using arrow function

setTimeout(() =>{
    console.log("hello");
}, 4000);

// callback

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(a,b, sumCallback);

// callback using arrow functions

calculator(1,2, (a,b) =>{
 console.log(a+b);
})

// callback hell

function getData(dataId, getNextData){
    setTimeout(() => {
    console.log("data", dataId);
}, 2000);
}


getData(2);
getData(3);

getData(1, getData(2));

// above one not a good practise
// for good practise use arrow function

getData(1, ()=> {
    getData(2)
});