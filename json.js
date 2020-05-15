const sample = require('./sample.json')

console.log(sample.last_name)

console.log(JSON.stringify(sample))

console.log(JSON.parse(JSON.stringify(sample)))