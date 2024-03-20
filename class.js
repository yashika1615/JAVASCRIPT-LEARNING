
// const obj1={
//     value:20,
//     myfunction: () =>{
//         console.log(this);
//     },
// };

// obj1.myfunction();

// const y={name:'Yashika'};
// console.log(typeOf(y));

// //data types in js
// //diff between undefined and null
// //NAN

// let b;
// console.log(b);

// //js ka code top to bottom
// //acc to comp code running from left to right

// //event trigger- event call horha
// //event trigger -> event listen hoga -> function call

// //who is responsible for pattern matching in js- Rgex(regular expression) also it works in the 3-tier architecture
// // 3-tier arch (frontend / backend / database)
// // two types of arch- monolithic /2-tier / 3-tier

// //what is instance in fetch method
// //payload - voh data jo frontend se data carry hoti hai
// //payload jaa rha toh post req/ nhin jaaa rha toh get
// //data jab api main travel karta hai toh voh string ki format main karta hai
// // middleware - to encode data

// //call back functions /promises/ synchronous and asynchronous
// //async/await
// //diff es5 and es6

// emojis in html - 
//webkit in css
//what is chunks- when you fetch something from the website the rquest goes to backend and then it gets send to the database
//suppose at the backend the result is 50000 it will not send 50000 data to rather in small chunks
//sending small small data to the frontend is chunks
// databse chunks amin data bhejta hai
//frontend maangta saara hai its database who send it in chunks

//what is load balancing and load balancer
// what is pagination
//pagination is now replaced by on scroll

//how is object data stored in json = in key value pair
//how to handle data in objects/manipulate data in objects
//methods to manipulate data in objects 
//what is key value pair 
//how to store multiple data in key value pair
  const myProfile={
    name: 'yashika',
    age: 20,
    city: 'rajpura',
    address: { 
        town: 'sundar nagar',
        postalcode: 140401,
        landmark: 'ambedkar park',
        city: 'rajpura',
        data:{
            district:'patiala'
        }

    }
  };

  console.log(myProfile.city);

  //to update
  myProfile.city="Chandigarh";
  console.log(myProfile.city);
  
//destructuring / rest operator and spread operator
//what is deep copy and shallow copy
  //how database keeps the data-schema
  //nesting of objects - object ke andr object
   
  const myProfile={
    name: 'yashika',
    age: 20,
    city: 'rajpura',
    address: { 
        town: 'sundar nagar',
        postalcode: 140401,
        landmark: 'ambedkar park',
        city: 'rajpura',
        data:{
            district:'patiala'
        }

    }
  };
  // aceess object inside object

  console.log(myProfile.address.data.district);

  const BankData={
    BankName:'SBI',
    IFSC: 'SBI976993',
    BranchName: 'Rajpura'
}
const newBankName={
  Bank_Name: BankData.BankName,
    IFSC: BankData.IFSC,
    Branch_Name: BankData.BankName
}


// changinf the data of objects by making new objects-  destructuring
// shallow copy type- destructuring

//andr ka data ko copy karna - deep copy

//spread operator
const arr=[1,2,3,4];
const b= [5,6,7];
//put both the data into c
//use spread operator
   const c=[...arr, ...b];
   console.log(c);

   //rest operator

   //diff between rest operator and spread operator
   



 
