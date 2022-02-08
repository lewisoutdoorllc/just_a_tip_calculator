let bill = document.getElementById("number_bill")
let people = document.getElementById("number_people")
let percent = document.querySelectorAll(".tip_btn")
let custom = document.getElementById("tip_input")
// ========= DARK MODE START VARIBLES
let theme = document.getElementById("theme_btn")
let darkMode = false;
let body = document.body.style
let container = document.querySelector(".container").style
let textP = document.querySelectorAll("p")
let totalText = document.querySelectorAll(".total_text")
let textPersonSub = document.querySelectorAll(".person_sub")
let inputContainers = document.querySelectorAll(".input_container")
let tipButton = document.querySelectorAll(".tip_btn")
let rightContainer = document.querySelector(".right").style
// =========  DARK MODE END VARIBLES 


function tipSplit(billAmount, amtPeople, percentage) {

    billAmount = parseInt(bill.value)
    amtPeople = parseInt(people.value)

    if (custom.value) {
        percentage = parseInt(custom.value) / 100
        if (billAmount && amtPeople) {
            let tip = (billAmount * percentage) / amtPeople
            let total = tip + (billAmount / amtPeople)
            document.getElementById("tip_display").innerText = `$${tip.toFixed(2)}`;
            document.getElementById("total_display").innerText = `$${total.toFixed(2)}`;
        }
    }

    else if (billAmount && amtPeople && percentage) {
        let tip = (billAmount * percentage) / amtPeople
        let total = tip + (billAmount / amtPeople)
        document.getElementById("tip_display").innerText = `$${tip.toFixed(2)}`;
        document.getElementById("total_display").innerText = `$${total.toFixed(2)}`;
    }
}

percent.forEach((btn) => {
    btn.addEventListener("click", function () {
        let btns = parseInt(btn.value) / 100;
        tipSplit(bill, people, btns)
    })
})

let current = document.getElementsByClassName("active");
for (var i = 0; i < percent.length; i++) {
    percent[i].addEventListener("click", function () {
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

bill.addEventListener("change", tipSplit)
people.addEventListener("change", tipSplit)
custom.addEventListener("change", tipSplit)
// ==================================
// ================== DARK MODE START
theme.addEventListener("click", function () {
    if (darkMode == false) {
        darkModeProps()
        darkMode = true;
    } else {
        lightModeProps()
        darkMode = false;
    }
})
function lightModeProps() {
    body.backgroundColor = "#00526d";
    theme.src = "./images/icon-moon.svg";
    container.backgroundColor = "#7e8287";
    textP.forEach(function (p) {
        p.style.color = "#000000";
    })
    textPersonSub.forEach(function (p) {
        p.style.color = "rgb(176, 167, 153)";
    })
    inputContainers.forEach(function (input) {
        input.style.backgroundColor = "#F6F7FC";
    })
    totalText.forEach(function (p) {
        p.style.color = "#FFFFFF";
    })
}
function darkModeProps() {
    body.backgroundColor = "rgb(62 62 63)";
    theme.src = "./images/icon-sun.svg";
    container.backgroundColor = "rgb(38 38 38)";
    textP.forEach(function (p) {
        p.style.color = "rgb(16 255 0 / 72%)";
    })
    textPersonSub.forEach(function (p) {
        p.style.color = "#c9c9c9";
    })
    inputContainers.forEach(function (input) {
        input.style.backgroundColor = "#4d4d4d";
    })
    tipButton.forEach(function (button) {
        button.filter = "invert(1)";
    })
    rightContainer.backgroundColor = "rgb(77, 77, 77)";
}
// =================== DARK MODE END
// =================================
