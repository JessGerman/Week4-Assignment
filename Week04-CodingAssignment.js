console.log('1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');

console.log('a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.');

console.log('- Do not use numbers to reference the last element, find it programmatically.');
console.log('- ages[7] - ages[0] is not allowed!');
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
let newAge = ages[ages.length - 1] - ages[0]; 
                   //last index       //access the first index
console.log(newAge)

//-------------------------------------------

console.log('b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).');
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
ages.push(33) //added age
console.log(ages)

let newAge33 = ages[ages.length - 1] - ages[0];
                     //last index      //access the first index
console.log(newAge33)

//---------------------------------------------

console.log('c. Use a loop to iterate through the array and calculate the average age.');
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
ages.push(33) //added age from the previous exercise

//declares a variable equal to the total sum 
var sum = 0, avg = 0.0 //have no defined value - until a value is first assigned

for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i] //adding each age
}
avg = sum / ages.length //average math
console.log(avg);

//---------------------------------------------

console.log('2. Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob.');

console.log('a. Use a loop to iterate through the array and calculate the average number of letters per name.');

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] // array called names

var totalLetters = 0; //it'll store the sum of the lengths of all the names.

for (let i = 0; i < names.length; i++) { //iterates over each element in the array
  totalLetters += names[i].length; //this loop starts: index 0 & continue till it gets the end of the array
}
//math
var averageLetters = totalLetters / names.length; 

console.log(averageLetters); // result of the calculation above

//---------------------------------------------

console.log('b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] 
var concatenatedNames = ''; //empty string to store the concatenated names

//starting at Sam    //all the way to the end of the array
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' '; //concatenate each name
}
console.log(concatenatedNames.trim()); //removes extra spaces

//---------------------------------------------

console.log('3. How do you access the last element of any array?');
console.log('Answer: All the arrays have your last element as an index of array.length minus 1. So, you can subtract 1 from the length of an array. Like I did in Exercise 1: ages[ages.length - 1]');

//---------------------------------------------

console.log('4. How do you access the first element of any array?');
console.log('Answer: All the arrays have your first element as an index of 0. So, you can access it as arr[0]. Here is an example how I did in Exercise 1: ages[0]')

//---------------------------------------------

console.log('5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.');

let nAmes = ["Kelly", "Sam", "Kate"]; // starting with this array
let nameLengths = []; //array created. It'll store the lengths of the names from line 82

for (let i = 0; i < nAmes.length; i++) { //iterate over the names (line 82) 
    nameLengths.push(nAmes[i].length); //add length of each name 
  }
  
  console.log(nameLengths); 

//---------------------------------------------

console.log('6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');

nameLengths = [0, 4, 4];
let totalLengths = 0; //declares a variable equal to the total sum

// using it to add each element of array to totalLengths
 for(let i = 0; i < nameLengths.length; i++) {
 	totalLengths += nameLengths[i]; //Accumulates the sum of all elements in the nameLengths array
}  
//After the loop - totalLengths holds the sum of all elements in nL

//sum of all elements in the array
console.log(totalLengths);

//---------------------------------------------
console.log('7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. i.e. if I pass in Hello and 3, I would expect the function to return HelloHelloHello');
                            //parameters 2
function writingThisFunction (word, n) {
    console.log(word.repeat(n)); //repeat the word and n
}
//calling this function
console.log(writingThisFunction("Hello", 3)) // the word is Hello, n is 3x

//---------------------------------------------

console.log('8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.');
                    //parameters
function fullName (firstName, lastName) {
    return firstName + " " + lastName; //quotes are to leave space in between these words
}

//calling - assigning the return to a variable
var fullName = fullName('Jessica', 'German');
console.log(fullName)

//---------------------------------------------

console.log('9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.');

function sumNumbersGreaterThan100 (numbers) {
    let sum = 0; //declares a variable equal to the total sum (have no defined value - until a value is first assigned.)
    for (let i = 0; i < numbers.length; i++) { //iterates over each element in numbers array
        sum += numbers[i]; //the current number in the array is added to the sum variable
                        //accumulates sum of all the numbers in the array
    }
    return sum > 100;
} 

const numbers = [3, 9, 23, 64, 2, 8, 28, 93] //array of numbers from exercise 1
console.log(sumNumbersGreaterThan100(numbers)) //sum numbers 

//---------------------------------------------

console.log('10. Write a function that takes an array of numbers and returns the average of all the elements in the array.');
//basically, the same description exrc.9
function averageOfAllElements (numbersAverage) {
    let sum = 0;
    for (let i = 0; i < numbersAverage.length; i++) {
        sum += numbersAverage[i];
    }
    return sum / numbersAverage.length; //calculates the average
}

const numbersAverage = [3, 9, 23, 64, 2, 8, 28, 93] //array of number from exercise 1
console.log(averageOfAllElements(numbersAverage)); // call the function. returning average of all elements
                                //argument

//---------------------------------------------

console.log('11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.');

function compareTwoAverage (arr1, arr2) {

//acc stores ACCUMULATOR values | num is the CURRENT ELEMENT during each iteration
//acc+num is the CALCULUS of the sum of elements as the reduce operations is happening
//sum / by the length of the array

    const average1 = arr1.reduce((acc, num) => acc + num, 0) / arr1.length;
    const average2 = arr2.reduce((acc, num) => acc + num, 0) / arr2.length;

    return average1 > average2;
}
const arr1 = [10, 20, 30, ,40 ,50];
const arr2 = [60, 70, 80, 90, 100];

console.log(compareTwoAverage(arr1, arr2));//call the function
                            //two arguments
//---------------------------------------------

console.log('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.');

let isHotOutside = true; //boolean
let moneyInPocket = 20; //number

                        
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 20));//call the function
                        //two arguments
//---------------------------------------------

console.log('13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.');
console.log("I have a niece and a nephew, so I thought about them and how much fun they'll have if only kids were allowed");

let kidsParty = true; //boolean
let myAge = 31; //number
                    //parameters
function letsParty(kidsParty, myAge) {
if (kidsParty && myAge <= 12) {
    return ("Uhull, let's have fun kids!");
} else {
    return ("Sorry, you are too old for this!");
}
}
console.log(letsParty(true, 31));
                    //arguments