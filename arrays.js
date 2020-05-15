// define array
var numberArray = [1, 2]
var stringArray = ['str1', 'str2']
var objectArray = [{}, {}]
var booleanArray = [true, false, true]
var array = new Array(20)

// show array and fill arrays
array.fill('Hello')
// console.log(array)

// length of array
// console.log(array.length)

// join`
// console.log(array.join(' --- '))
// console.log(array.join())

// console.log(array.toString())


// push and pop (LIFO)
stringArray.push('str3')
// console.log(stringArray)
stringArray.pop()
// console.log(stringArray)

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.slice(1, 3))

let spliced = fruits.splice(1, 3, 'Kiwi', 'Watermelon')

// console.log('removed elements => ', spliced)
// console.log('fruits => ', fruits)

fruits.unshift('Fruit')
// console.log(fruits)

fruits.shift()
// console.log(fruits)

booleanArray.forEach((value, index) => {
    // console.log('This item has the value of -' + value + '- and index of ' + index)
})

for (let i = 0; i < booleanArray.length; i++) {
    // console.log('This item has the value of -' + booleanArray[i] + '- and index of ' + i)
}

var fruits2 = ["Banana", "Orange", "Apple", "Mango"];

let result = fruits2.map((value, index) => {
    if (index == 0) return 'Kiwi'
    else if (index == 1) return 'Mango'
    else if (index == 3) return 'Orange'
    else return value
})

// console.log(result)

let indexOfSearch = fruits2.indexOf('Mango')

// console.log(indexOfSearch)

let reversedFruits = fruits2.reverse()

// console.log(reversedFruits)

let concatFruits = fruits2.concat('hi', 'bye')

// console.log(concatFruits)


// Spread
let numbers = [5, 6, 7, 8]

let new_number = [1, 2, 3, 4, numbers, 9, 10]

let spread_number = [1, 2, 3, 4, ...numbers, 9, 10]

console.log(new_number)
console.log(spread_number)
