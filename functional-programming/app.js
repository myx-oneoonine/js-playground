// const add = a => b => a + b

const add = function(a) {
    return function(b) {
        return a + b
    }
}

const num = [1,2,3,4,5,6,7]

num.map(add(1))

console.log(num.map(add(1)))

const sumOf1toN = function(n) {

    return (n + 1) * n / 2
}