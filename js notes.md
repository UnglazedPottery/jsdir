-open test.html to open in browser
-inspect page in browser to see console logs 

JS NOTES 

Math.floor(5 / 2) = 2

var myStr = "I am a \"double quoted string\" ";
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';    //single,double quote stuff 

items.sort(function (a, b) {
  return a.value - b.value;
});p

\n      newline
\r      carriage return
\t      tab
\b      word boundary
\f      form feed 

firstName[firstName.length - 1]

var ourArray = [["the universe", 42], ["everything", 101010]];      //nested/multi-dimensional array 

arr[3][0][1]

var arr = [1,2,3];          //add to end of array
arr.push(4);
// arr is now [1,2,3,4]

var threeArr = [1, 4, 6];               //pop off end of array, remove last element
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]


var threeArr = [1, 4, 6];               //remove first element
var oneDown = threeArr.shift();
console.log(oneDown); // Returns 1
console.log(threeArr); // Returns [4, 6]

myArray.unshift(["Paul", 35]);      //add element in front of array 

function functionName() {           //resusable javascript 
  console.log("Hello World");       
}
functionName();

typeof 3   // returns 'number'

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
  default:
    defaultStatement;
    break;
}

switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

//if statement
if(condition){
  blahblah
}else if(condition){
  blahblah
}else{ stuff }

//JS object
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

accessing object properties
-dot notation
-bracket notation 

//object has property
const object1 = new Object();
object1.property1 = 42;
object1.hasOwnProperty('property1')

//while loop
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

//for loop
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

//iterate through array
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

//nesting for loops
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

//do while loop
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

-recursion: write fxn using itself

//replace loops using recursion
function multiply(arr, n) {
    var product = arr[0];
    for (var i = 1; i <= n; i++) {
        product *= arr[i];
    }
    return product;
}
    same as                     //multiply(arr, n) == multiply(arr, n - 1) * arr[n]

function multiply(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return multiply(arr, n - 1) * arr[n];
    }
}

//random whole number between 1-9
Math.floor(Math.random() * 10)

//random whole number between max-min inclusive
Math.floor(Math.random() * (max - min + 1)) + min

//change string into integer
parseInt("007");    //returns 7 

//ternary replaces if else
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}



