// ADD A FUNCTION CALLED CALCULATE
function calculate(first, second, operation) {
    switch (operation) {
        case "add":
            return first + second
        case "subtract":
            return first - second
        case "multiply":
            return first * second
        case "divide":
            return first / second
    }

}
let x, y, process;
do {
// COLLECT FIRST NUMBER FROM USER
    x = parseFloat(prompt("enter a number"))
    //  input validation on number
    if (isNaN(x)) {
        alert("Invalid input, try again.")
        //  skip to next iteration, force next loop iteration
        continue
    }

// COLLECT SECOND NUMBER FROM USER
    y = parseFloat(prompt("enter another number"))
    // input validation on number
    if (isNaN(y)) {
        alert("invalid input, try again.")
        //  skip to next iteration, force next loop iteration
        continue
    }


// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    //  check to confirm that user entered correct input
    process = prompt(`enter one of the given operations: "add", "subtract", "multiply" or "divide"`)
    if (process !== "add" && process !== "subtract" && process !== "multiply" && process !== "divide") {
        alert(`you did not enter one of the correct operations, please try again`)
    }

} while (process !== "add" && process !== "subtract" && process !== "multiply" && process !== "divide")

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(x, y, process)
alert(result)
