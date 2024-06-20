
var courses = [
      {
        id: 1,
        name: 'Javascript',
        coin: 240,
      },
      {
        id: 2,
        name: 'Python',
        coin: 680,
      },
      {
        id: 3,
        name: 'C++',
        coin: 200,
      },
      {
        id: 4,
        name: 'PHP',
        coin: 570,
      },
      {
        id: 5,
        name: 'Nodejs',
        coin: 340,
      },
      {
        id: 6,
        name: 'Java',
        coin: 720,
      },
]

Array.prototype.map2 = function(callback){
    var arrayLength = this.length
    var output = []
    for(var i = 0; i < arrayLength; i++){
        var result = callback(this[i], i)
        output.push(result)
    }
    return output
}

Array.prototype.forEach2 = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this)
        }
    }
}

Array.prototype.filter2 = function(callback){
    var output = []
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this)
            if(result){
                output.push(this[index])
            }
        }
    }
    return output
}

Array.prototype.some2 = function(callback){
    var output = []
    for (var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this))
            {
                return true
            }
           
        }
    }
    return false
}

Array.prototype.every2 = function(callback){
    var output = true
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this)
            if(!result){
                output = false
                break
            }
        }
    }
    return output
}

Array.prototype.reduce2 = function(callback, init){
    var accumulator = init
    for (var index in this){
        if(this.hasOwnProperty(index)){
            accumulator = callback(accumulator, this[index], index, this)            
        }
    }
    return accumulator
}

var totalCoin = courses.reduce((a, b) => a + b.coin, 0)
var totalCoin1 = courses.reduce2((a, b) => a + b.coin, 0)
console.log(totalCoin)
console.log(' và ')
console.log(totalCoin1)

var mang = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var mangmoi = mang.reduce((a, b) => a.concat(b), [])

console.log(mangmoi)