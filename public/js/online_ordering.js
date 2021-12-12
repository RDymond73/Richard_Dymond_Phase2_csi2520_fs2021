let container = document.getElementById('orCon');
let btn = document.getElementById('btn');

btn.addEventListener('click', order); {
    order();
}

btn.addEventListener('click', showHidden()); {
    showHidden();
}

function order(ev) {
    let userInput = document.getElementById('userOrder').value;
   let pCon = document.createElement("p");
   let insert = document.createTextNode(userInput);
   let hidden = document.getElementById('hidden');
   hidden.style.visibility="visible";
   container.appendChild(pCon);
   pCon.appendChild(insert);
}

function showHidden(ev) {
    var node = document.getElementById('hidden');
    if (node.style.visibility=='hidden') {
        node.style.visibility = 'visible';
    }
    else
        node.style.visibility = 'hidden';
}
  
let orderObject = order();
let hiddenObject = showHidden();