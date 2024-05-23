console.log("script start");

function hello() {
    console.log("hello world!!!");
}

setTimeout(hello, 1000);
console.log("script end");

// passsing a function as an arrow function

setTimeout(() => {
    console.log("inside settimeout");
}, 1000);

