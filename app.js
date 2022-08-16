const x = require('lodash')

const items = [1, [2, 3], [4,4, [6, ['s'], ['l']]]]

const newItems = x.flattenDeep(items)

console.log(newItems)