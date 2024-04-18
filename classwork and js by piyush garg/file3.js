//es6
//rest and spread operator

// rest
 function addnu(a,b,c,...other){
    console.log(other[1])
    console.log(arguments) // in es5
    return a+b+c;
 }

 const res=addnu(2,4,5,8,9)
 console.log(res);

// spread  - opp of rest

var names=["yash", "ved","hjbc"];
 
function getNames(name1, name2, name3){
  console.log(name1, name2, name3)
}

getNames(names[0],names[1],names[2]) // time consuming
//other way
getNames(...names)




