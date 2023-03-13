/*
let x = document.getElementsByClassName("generatedFont");

const genInput = document.getElementById("generationInput").value;

function generateFont() {

    for(let i = 0; i < x.length; i++) {
        x[i].innerHTML = genInput;
    }
}
*/


let x = document.getElementsByClassName("generatedFont")

document.querySelector("#generateFont").addEventListener("click", () => {
    x.innerHTML = document.querySelector("#generationInput").value;
    console.log(x.innerHTML);
    
    for(let i = 0; i < x.length; i++) {
        x[i].innerHTML = x.innerHTML;
    }
})