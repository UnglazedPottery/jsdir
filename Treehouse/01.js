//Selecting one element by id
//type color in input field, press button to change heading to that color 
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener("click", () => {
     myHeading.style.color = myTextInput.value;            
});


//Selecting many elements by tag
const myParagraph = document.getElementsByTagName("p");     //returns array
myParagraph.length;
myParagraph[0];
myParagraph[0].style.color = "blue";


const myList = document.getElementsByTagName("li"); 
for( let i = 0; i < myList.length; i++){
    myList[i].style.color = "purple";
}

//Selecting many by class name
const errorNotPurple = document.getElementsByClassName("error-not-purple"); 
for( let i = 0; i < errorNotPurple.length; i++){
    errorNotPurple[i].style.color = "purple";
}

//query selectors
document.querySelectorAll("li");            //all tags
document.querySelector("li");               //first tag
document.querySelector("#myHeading");           // id
document.querySelectorAll(".error-not-purple");    // class
document.querySelector("[title=label]");           // select p tag given property title=label

const evens = document.querySelectorAll('li:nth-child(even)');
for( let i = 0; i < evens.length; i++){
    evens[i].style.backgroundColor = "lightGray";   //CSS pseudo classes
}

//Getting and Setting text
// when the button is clicked, change the p content to what was entered in input
const input = document.querySelector("input");
const p = document.querySelector("p.description");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    p.textContent = input.value + ":";
})
    //or
button.addEventListener("click", () => {
     p.inner = input.value + ":";
})


//innerHTML can also be used to write html between stuff
const ul = document.querySelector('ul');
ul.innerHTML = "<li>red cabbage</li>"

//getting and changing attributes
input.type     //=> text
input.className    //gotta use className to access class
input.type = "checkbox"  //change from text input to checkbox


//Recap
document.getElementById()
document.getElementsByClassName()[0]
document.getElementsByTagName()[0]
document.querySelector("tagName")
document.querySelector("#id")
document.querySelector(".class")
document.querySelectorAll()[0]
someElement.addEventListener("click", () => {})
someElement.textContent = "somethin"
someElement.innerHTML = "<li>somethin</li>"






