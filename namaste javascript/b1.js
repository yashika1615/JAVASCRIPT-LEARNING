// set timeout

alert("hello");

let a=setTimeout(function () {
    alert("i am inside set timeout");
}, 2000);

clearTimeout(a);
console.log(a);

