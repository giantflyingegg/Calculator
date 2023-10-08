let calc = [];
let operation = "";

// target buttons
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const add = document.getElementById('+');
const subtract = document.getElementById('-');
const multiply = document.getElementById('x');
const divide = document.getElementById('/');
const equals = document.getElementById('equals');
const dec = document.getElementById('dot');

// target display
let display = document.getElementById('display')
// display.innerHTML = addition() // all aswers to calculations 

// target clear button
const clear = document.getElementById('clear');

// make clear button functional
document.getElementById("clear").addEventListener("click", function() {
    calc = [];
    display.innerHTML = "";
    // console.log("clear");
});

//add event listeners to buttons
one.addEventListener('click', () => {
    display.innerHTML = "1";
    // console.log(display);
});

two.addEventListener('click', () => {
    display.innerHTML += "2";
    // console.log(display);
});

three.addEventListener('click', () => {
    display.innerHTML += "3";
});

four.addEventListener('click', () => {
    display.innerHTML += "4";
});

five.addEventListener('click', () => {
    display.innerHTML += "5";
});

six.addEventListener('click', () => {
    display.innerHTML += "6";
});

seven.addEventListener('click', () => {
    display.innerHTML += "7";
});

eight.addEventListener('click', () => {
    display.innerHTML += "8";
});

nine.addEventListener('click', () => {
    display.innerHTML += "9";
    // console.log(display.innerHTML);
});

zero.addEventListener('click', () => {
    display.value += "0";   
});

add.addEventListener('click', () => {
    calc[0] = (Number(display.innerHTML));
    calc[1] = "+";
    display.innerHTML = "";
    // console.log(calc)
});

subtract.addEventListener('click', () => {
    calc[0] = (Number(display.innerHTML));
    calc[1] = "-";
    display.innerHTML = "";
});

multiply.addEventListener('click', () => {
    calc[0] = (Number(display.innerHTML));
    calc[1] = "x";
    display.innerHTML = "";
});

divide.addEventListener('click', () => {
    calc[0] = (Number(display.innerHTML));
    calc[1] = "/";
    display.innerHTML = "";
});

dec.addEventListener('click', () => {
    if (display.innerHTML == "") {
        display.innerHTML += "0.";
    } else {
        display.innerHTML += ".";
    }
    // console.log(dec);
});

clear.addEventListener('click', () => {
    display.value = "";
    calc = [];
});

equals.addEventListener('click', () => {
    calc[2] = display.innerHTML;
    console.log(calc);
    if (calc[1] === "+") {
        display.innerHTML = (Number(calc[0]) + Number(calc[2]));
    } else if (calc[1] === "-") {
        display.innerHTML = (Number(calc[0]) - Number(calc[2]));
    } else if (calc[1] === "x") {
        display.innerHTML = (Number(calc[0]) * Number(calc[2]));
    } else if (calc[1] === "/") {
        display.innerHTML = (Number(calc[0]) / Number(calc[2]));
    }
});

