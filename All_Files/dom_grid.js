function tap(){
var element = document.getElementsByTagName('input')[0].value
let newelement = document.createElement(element);
console.log(newelement)
var data = document.getElementsByTagName('input')[1].value
newelement.innerText = data;
newelement.setAttribute("class","heading");
let parent = document.getElementsByTagName("body")[0]
parent.appendChild(newelement)
}
function Grids() {
            let rows = parseInt(document.getElementById("rows").value);
            let cols = parseInt(document.getElementById("cols").value);

            let gridContainer = document.getElementById("gridContainer");

            gridContainer.innerHTML = "";

            gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

            for (let i = 1; i <= rows * cols; i++) {
                let box = document.createElement("div");
                box.className = "grid-item";
                box.innerText = i;
                gridContainer.appendChild(box);
            }
        }


