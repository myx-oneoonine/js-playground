// Array.prototype.customRandom = (arr) => {
//     console.log(`arr ${arr}`)
// }

Object.defineProperty(Array.prototype, 'sortf', {
    enumerable: false,
    value: function(compare) { return [].concat(this).sort(compare); }
})

// module.exports.setRandom = Object.defineProperty(Array.prototype, 'sortf', {
//     enumerable: false,
//     value: function(compare) { return [].concat(this).sort(compare); }
// });

// let a = [1, 2, 3, 4]

// console.log(a)
// console.log(a.sortf())
