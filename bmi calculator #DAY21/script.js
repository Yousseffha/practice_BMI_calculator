let inputs = document.querySelectorAll("input")
let btn = document.getElementById("btn")
let result = document.getElementById("result")

btn.onclick = function() {
    inputs.forEach((e) => {
        if(/\d+/g.test(e.value) === true) {
            result.innerHTML = (inputs[1].value / ((inputs[0].value / 100) ** 2)).toString().slice(0, 4)    
        }else {
            e.classList.add("red")
        }
        e.oninput = function() {
            e.classList.remove("red")
        }
    })
}