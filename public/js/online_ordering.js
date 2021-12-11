
let container = document.getElementById('orCon');
let btn = document.getElementById('btn');

btn.addEventListener('click', order); {
    order();

}

function order(ev) {
let userInput = document.getElementById('userOrder').value;
   let pCon = document.createElement("p");
   let insert = document.createTextNode(userInput);
   container.appendChild(pCon);
   pCon.appendChild(insert);
    console.log(userInput);
}

// function update(ev) {
//     res.send('online_ordering ');
// }

let orderObject = order();


