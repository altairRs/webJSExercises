// 5 two sentences about me

console.log("I like hobbyhorsing");
console.log("I llke millitary academy");

// 6 three sentences with variables

let a = "Altair";
let gpa = 19;
let b = false;

console.log(`My name is ${a}`);
console.log(`Im ${gpa} years old`);
console.log(`J J Okocha ${b}`);

// 7 difference with prompt

// let q,w;

// q = prompt("Please enter first number: ")
// w = prompt("Please enter second number: ")
// dif = q - w
// console.log(`Difference: ${dif}`)

// 8 current date

let date = new Date();
console.log(date);

// 9 leap year

let year = 2024

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}

value1 = getelementbyid

// 10 multiplication and division

function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('result').textContent = result;
}


function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    

    let result = num1 / num2;
    document.getElementById('result').textContent = result;

}
  

// 11 Temperature Converter

function convertFahr() {
    num1 = parseFloat(document.getElementById('TempFahrenheit').value);
    result = (num1 - 32) * (5 / 9);
    document.getElementById('resultTemp').textContent = result;
}

function convertCels() {
    num2 = parseFloat(document.getElementById('TempCelsius').value);
    result = num2 * (9/5) + 32;
    document.getElementById('resultTemp').textContent = result;
}

// 12 even or odd

function evenOdd() {
    num1 = parseFloat(document.getElementById('num4').value);
    let result;

    if (num1 % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    document.getElementById('ResultEvenOdd').textContent = result;
}

// 13 min max

function minMax() {
    let num1 = parseFloat(document.getElementById('mnum1').value);
    let num2 = parseFloat(document.getElementById('mnum2').value);
    let num3 = parseFloat(document.getElementById('mnum3').value);

    arr = [num1, num2, num3]

    let max = num1
    let min = num1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    document.getElementById('ResultMinMax').textContent = 
        `Max: ${max}, Min: ${min}`;
}

// 14 area of triangle

function calculateArea() {
    // Get the input values
    let a = parseFloat(document.getElementById('sideA').value);
    let b = parseFloat(document.getElementById('sideB').value);
    let c = parseFloat(document.getElementById('sideC').value);

    // Calculate the semi-perimeter (s)
    let s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Check if the input forms a valid triangle
    if (isNaN(area) || area <= 0) {
        document.getElementById('resultArea').textContent = 
            "Invalid triangle sides. Please enter valid lengths.";
    } else {
        // Display the result on the HTML page
        document.getElementById('resultArea').textContent = 
            `Area: ${area.toFixed(2)} square units`;
    }
}

    
// 15 factorial

function factorial() {
    value1 = document.getElementById("fnum").value;


    let fSum = 1;
    for (let i = 1; i<=value1; i++) {
        fSum = fSum * i;
    }

    document.getElementById('FResult').innerHTML = fSum;
}

// 16 count vowels and consonants

function countVowelsConsonants() {
    let value1 = document.getElementById("cString").value;
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let letter of value1) {
        if (vowels.includes(letter)) {
            vowelCount++;
        } else if (letter.match(/[a-z]/i)) {
            consonantCount++;
        }
    }

    document.getElementById('ResultVC').textContent =
        `Vowels: ${vowelCount} | Consonants: ${consonantCount}`;

}

// 17 transform second into hour and minutes

function transformTime() {
    let value1 = document.getElementById("SecNum").value;

    let minutes = value1 / 60;
    let hours = Math.floor(minutes/60);

    document.getElementById("HourResult").innerHTML = hours
    document.getElementById("MinuteResult").innerHTML = minutes;

}

// 18 most frequent number

function findMostFrequent() {
    let arr = document.getElementById('inputArray').value.split(',').map(Number);
    let frequency = {};

    // Count the frequency of each number
    for (let num of arr) {
            frequency[num] = (frequency[num] || 0) + 1;
    }

    // Find the most frequent number
    let mostFrequent = null;
    let maxCount = 0;

    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }

    document.getElementById("FrequentResult").innerHTML = mostFrequent;
}

// 19 fibonacci

function fib(x) {
    if (x < 2) {
        return x;
    }
    return fib(x - 1) + fib(x - 2);
}

function countFib() {
    const n = parseInt(document.getElementById('fibInput').value);
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }

    document.getElementById('fibResult').innerHTML = result;
}

// 20 New year

function NewYear() {
    let today = new Date();
    let newYear = today.getFullYear();

    let newYearDate = new Date(newYear, 11, 31);
    let dayMilliseconds = 1000 * 60 * 60 * 24;

    let remainingDays = (newYearDate.getTime() - today.getTime()) /
    (dayMilliseconds);

    document.getElementById("NYResult").innerHTML = remainingDays
}