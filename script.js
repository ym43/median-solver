let input = document.getElementById("input")
let h1 = document.getElementById("solvDis")
let button = document.getElementById("solve")

button.addEventListener("click",() => {
    if(input.value < 0) input.value = 0
    h1.innerHTML = input.value / 2
})