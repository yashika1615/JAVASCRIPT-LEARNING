let boxes= document.querySelectorAll(".box");
let reset=  document.querySelector("#reset");

let turnO= true;
//player x, player o

// store the winning patterns- we will use arrays


const winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("clcik", () =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO= false;
        } else{
            box.innerText= "X";
            turnO= true;
        }
        box.disabled=true;


        checkWinner();
    });
});

const checkWinner = () =>{
   for( let pattern of winPattern){
    console.log(pattern);
   }
}

