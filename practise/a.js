
// function abc() {
//     let a = 10;
//     if (1) {
//         a = 20;
//     }
//     console.log(a);
// }

// abc();

console.log(a);
var a = 10;

// arrrow functions vs normal functions

// scope of this
var person= {
    name: "yashia",
    getName: function () {
        console.log(this.name);
    }
}
 
person.getName();
 
