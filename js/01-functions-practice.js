//STEP 1
function halfNumber(someNum) {
    let half = someNum / 2
    console.log(`Half of ${someNum} is ${half}.`)
    return half
}

//STEP 2
function squareNumber(aNum) {
    let square = aNum * aNum
    console.log(`The result of squaring the number ${aNum} is ${square}.`)
    return square
}

//STEP 3
function percentOf(numOne, numTwo) {
    let truePercent = (numOne / numTwo) * 100
    console.log(`${numOne} is ${truePercent}% of ${numTwo}`)
    return truePercent

}

//STEP 4
function findModulus(first, second) {
    let modulo = second % first 
    console.log(`${modulo} is the modulus of ${first} and ${second}`)
    return modulo

}

//STEP 5


let g = halfNumber(4)
let k = squareNumber(10)
let r = percentOf(5, 20)
let x = findModulus(5, 6)