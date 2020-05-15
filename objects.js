// define object
var user = {
    name: 'Ali',
    lastName: 'Heidari',
    birthdate: '1377/10/10',
}

var physical_info = {
    height: 181,
    weight: 70
}

let new_user = {
    ...user,
    ...physical_info
}

console.log(new_user)

// console.log(user.name)

// accessor 
// console.log(user.name)

// console.log(user['name'])

// modify property of user
user.name = 'Reza'

// console.log(user.name)

// define object
function User(name) {
    this.name = name;
}

var userInstance = new User('Ali')

// Driver code
// console.log(userInstance)

// get keys from an object

// console.log(Object.keys(user))

Object.keys(user).map((key) => {
    // console.log(user[key])
})

var updatedUser = {
    birthdate: '1370/09/10',
    isActive: true,
    post: 300
}

// assign objects
Object.assign(user, updatedUser)

// console.log(user)

// Object.defineProperty(user, 'name', { writable: false })

Object.defineProperty(user, 'createdAt', { value: new Date() });

// console.log(user.createdAt)

// JSON Serializer (converts javascript object to json string)
let jsonData = JSON.stringify(user)


// console.log(user)
// console.log(jsonData)

let data = '{"name":"Reza","lastName":"Heidari","birthdate":"1370/09/10","isActive":true,"post":300, "newKey": 10}'

// parse data from json string
let parsedData = JSON.parse(data)

// console.log(parsedData)
