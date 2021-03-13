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