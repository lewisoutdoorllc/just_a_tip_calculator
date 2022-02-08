// document.getElementById("left").onchange = function() {
//     let bill = Number(document.getElementById("number_bill").value);
//     let people = Number(document.getElementById("number_people").value);
//     let tip = Number(document.querySelectorAll("tip_btn"));
//     percent.forEach(function(btn) {
//         btn.onclick = function() {
//             console.log(btn.value);
//         };
        
//     });
//     console.log(bill, people, tip);

//     let tipPerPerson = (bill * (tip/100)) / people;
//     let totalPerPerson = tipPerPerson + (bill / people);

//     if (isNaN(tipPerPerson)) {
//     tipPerPerson = 0.00;
//     totalPerPerson = 0.00;
//     }


//     document.getElementById("tip_display").innerHTML = `$${tipPerPerson.toFixed(2)}`;
//     document.getElementById("total_display").innerHTML = `$${totalPerPerson.toFixed(2)}`;

// };

console.log(`
====================== BREAK ===========================

============== THIS IS CODE FROM CLASS NOTES ===========
`);
// console.log("HELLO WORLD")
// document.getElementById("left").onchange = function() {
//======================= How do I grab the bill input elements
let bill = document.getElementById("number_bill");
let people = document.getElementById("number_people");
let percent = document.querySelectorAll(".tip_btn");
// console.log(bill.value);
// console.log(percent.value);
// console.log(people.value);


function tipSplit(billAmount, amtPeople, percentage) {
    //================= Write code below

    billAmount = parseInt(bill.value)
    amtPeople = parseInt(people.value)

    console.log(billAmount,amtPeople,percentage)

    //====================== Write a condition that check if all 3 inputs are there?

    if (billAmount && amtPeople && percentage) {
        let tip = (billAmount * (percentage/100)) / amtPeople;
        let total = tip + (billAmount / amtPeople);
        console.log(tip, total)
        document.getElementById("tip_display").innerHTML = `$${tip.toFixed(2)}`;
        document.getElementById("total_display").innerHTML = `$${total.toFixed(2)}`;
    } 
    // else {
    //     document.getElementById("tip_display").innerHTML = `$${0.00}`;
    // }
    
    let tipPerPerson = (billAmount * percentage) / amtPeople
    
    let totalPerPerson = tipPerPerson + (billAmount / amtPeople)

}


console.log(tipSplit(100, 2, .20));


bill.addEventListener("change", tipSplit)

//==================== How do I grab the people input element?


people.addEventListener("change", tipSplit)

//======================= How do I make it so when I click each button it will console log the percent

percent.forEach((btn)=> {
    btn.addEventListener("click", function() {
        let btns = parseInt(btn.value)/100;
        tipSplit(bill, people, btns)
    })
})


// };
console.log(`
====================== BREAK ===========================`);