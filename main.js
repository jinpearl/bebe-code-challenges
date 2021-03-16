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

