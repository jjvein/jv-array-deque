
var jvArrayDeque = require('../')
var log = console.log, ret, arr

arr = [1, 2, 3, 4, 3, 2, 1]
ret = jvArrayDeque(arr)
console.log(ret)

arr = ['he', 'hehe', 'hhh', 'heh', 'hehh', 'heee', 'hehe']
ret = jvArrayDeque(arr)
console.log(ret)
