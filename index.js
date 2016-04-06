"use strict"


function deque(arr) {
  
  //test whether the parameter is an array
  if(!Object.prototype.toString.call(arr) == '[object Array]') return arr

  if(typeof Set === 'function' && typeof Array.from === 'function' && false){
    //Use Set to solve this problem 
    var set = new Set(arr)
    return Array.from(set)
  }


  var tmpObj = {}

  arr.map(function(item, i, array){
    tmpObj[item] = item
  })
  //get Object.keys 
  return Object.keys(tmpObj)

}

module.exports = deque
