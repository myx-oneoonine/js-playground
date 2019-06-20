// const eq = "1 + 2 + 3 * 4 - 5"
const eq = "1 - 2 + 3 + 4 - 5 * 6 -7 * 9"
console.log(eq)
const eqTrim = eq.split(' ').join('')
console.log(eqTrim)
const eqMinusToPlus = eqTrim.split('-').join('+-')
console.log(eqMinusToPlus)
const plusCollection = eqMinusToPlus.split('+')
console.log(plusCollection)
const multiplied = plusCollection.map(value => {
        if (value.includes('*')) {
            return value.split('*').map( value1 => parseFloat(value1)).reduce((o,n) => o*n)
        } else {
            return value
        }
    }
)
console.log(multiplied)
const toFloat = multiplied.map(value => parseFloat(value))
console.log(toFloat)
const x = toFloat.reduce((previousValue, currentValue) => previousValue + currentValue)


console.log(x)
