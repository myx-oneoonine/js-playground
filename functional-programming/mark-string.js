const word = "hello world"

const wordCollection = word.split('')

const x = wordCollection.map((char,index) => {
   return index == 0 || index == wordCollection.length  - 1 ? char : 'x'
}).join('')


console.log(wordCollection)
console.log(x)
