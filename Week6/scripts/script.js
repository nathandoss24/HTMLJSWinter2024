//example of regular string.
var name = "Dip";
var lastName = "Sh!t";
//example of string literal
var message = `Hello, welcome to the JavaScript lesson ${name}`;
//console.log(message);
outputToConsole(message);
//alert(message);
//example of traditional string concatenation
var message2 = "Hello, " + name + " " + lastName + ", welcome to the JavaScript lesson!"
//console.log(message2);
outputToConsole(message2);
var addProblem = 12 + 4;
//console.log(addProblem);
outputToConsole(addProblem);

function outputToConsole(data){
    console.log(data);
}

//document.getElementById("header").innerHTML = message2;
var myButton = document.querySelector("button");
//add an event listener to the button
myButton.addEventListener("click", changePage);

function changePage(){
    document.querySelector('h1').innerHTML = message;
    document.querySelector('body').style.backgroundColor = "#ff0000";
}

//var yourName = prompt("Please enter your name.");
//document.querySelector('h1').innerHTML = `Hello ${yourName} thanks for entering your name!`;


var dataPromptButton = document.getElementById("promptButton");
dataPromptButton.addEventListener('click', dataPrompt)

function dataPrompt(){
    alert(`My name is ${name}`);
    var yourName = prompt("Please tell me your name.");
    alert(`Hello ${yourName} nice to meet you.`);

    var yourLastName = prompt("Please tell me your last name");
    alert(`Great your full name is ${yourName} ${yourLastName}!`);

    var firstNumber = prompt("Let's add some numbers, enter the first number:");
    var secondNumber = prompt("Ok, now enter the second number:");

    var result = Number(firstNumber) + Number(secondNumber);
    
    alert(`The result is ${result}`);

    var documentBody = document.querySelector("body");

    var outputData = document.createElement("p");

    outputData.innerHTML = `Your name is ${yourName} ${yourLastName}<br>The result of your nmubers is ${result}<br>Thanks from ${name} ${lastName}`;
    documentBody.appendChild(outputData);
}