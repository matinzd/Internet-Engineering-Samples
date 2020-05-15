// function positional Argument
function minus(a, b) {
    console.log(b)
    if (!b) return -a
    return a - b
}
// driver code
// console.log(minus(-10))

// function with object arguments
function concatTwoStrings({ str1, str2 }) {
    return str1 + str2
}
// driver code
// console.log(concatTwoStrings("Hello ", "internet engineering class"))
// console.log(concatTwoStrings({ str2: 'internet engineering class', str1: 'hello ' }))

// closure definition
function closureTest(n) {
    let localvariableforclosurefunction = n
    return (localvariableforarrowfunction) => { return localvariableforclosurefunction * localvariableforarrowfunction } // in java is called lambda 
}

// driver code
let result = closureTest(100)(200)
// console.log(result)

/**
 * Function with callback
 */
function addWithTimeout(a, b, callback) {
    setTimeout(() => {
        callback(a, b, a + b)
    }, 5000)
}

// driver code
// addWithTimeout(100, 200, (a, b, sum) => {
//     console.log('Initial values are ', a, b)
//     console.log('sum after 5000ms ', sum)
// })


function max(...numbers) {
    // console.log(numbers)
    let result = -Infinity
    for(let number of numbers) {
        if(number > result) result = number
    }
    console.log(result)
}

max(1, 2, 40, 20, 40)