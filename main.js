//8 kyu: Opposite Number
//Very simple, given a number, find its opposite.

let num 

console.log(-num)

function opposite(number){
    return(-number)
}

//8 kyu: Sum of Positive
//You get an array of numbers, return the sum of all of the positives ones.
let numbs = []

let pos = numbs.filter(numbs => num > 0)

sum = (a, c) => a + c

return pos.reduce(sum)

function positiveSum(arr) {
  let pos = arr.filter(num => num > 0)
  sum = (a, c) => a + c
  return pos.reduce(sum, 0)
}

//8 kyu: Reversed Strings
//Complete the solution so that it reverses the string passed into it. 

let str = "hello world"
let arr = str.split('')

let rra = arr.reverse()
return rra.join('')

function solution(str){
  let arr = str.split('')
  let rra = arr.reverse()
  return rra.join('')
}

//8 kyu: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//take in a number
let num 

//check if number < 0 or if it's 0; if it's number > 0 then, * 1
return num < 0 ? num
    : num > ? num*(-1) 
    : num = 0 ? 0

function makeNegative(num) {
  return num > 0 ? num*-1 : num
  
}

//8 kyu: We need a function that can transform a number into a string. What ways of achieving this do you know?
let num = 

return num.toString

function numberToString(num) {
  return num.toString()
}

//8 kyu: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// if true return "yes"

//if false return "no"

function boolToWord( bool ){
  return bool ? "Yes" : "No"
}

//8 kyu: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//get string
let str =
//turn the string to arry
let arr = str.split('')

//take off index 0 
arr.shift()

//take off last index

arr.pop('')
//turn array to string
let str = arr.join('')
//return str

return str

function removeChar(str){
  let arr = str.split('')
  
  arr.shift()
  arr.pop()
  let newStr = arr.join('')
  return newStr
};

//8 kyu: Write a function called repeat_string which repeats the given string str exactly count times.


let str
let count
// for loop
let newString
for(let i; i < count; i++) {
  return newString + str
}

//8 kyu: Write a function to split a string and convert it into an array of words. 

let str "Hi Buddy I miss so much"

function splitWords(str){
  return str.split(" ")
   
}