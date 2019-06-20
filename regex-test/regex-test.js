let assert = require('assert')



if (!global.is_checking) {
    assert.equal(regTest('0.1'), true, "0.1 match")
    assert.equal(regTest('0.01'), true, "0.01 match")
    assert.equal(regTest('1.01'), true, "1.01 match")
    assert.equal(regTest('1'), true, "1 match")
    assert.equal(regTest('0'), true, "0 match")
    assert.equal(regTest('0.00'), true, "0 match")
    assert.equal(regTest('a'), false, "a not match")
    assert.equal(regTest('0..'), false, "0.. not match")
    assert.equal(regTest('1..'), false, "1.. not match")
    assert.equal(regTest('11'), true, "11 match")
    assert.equal(regTest('0.50'), true, "0.50 match")
    assert.equal(regTest('0.5'), true, "0.5 match")
    assert.equal(regTest('0.5111'), false, "0.5111 not match")
    assert.equal(regTest('1,123'), true, "1,123 match")
    assert.equal(regTest('1,123'), true, "1,123 match")
    assert.equal(regTest('1,123,123'), true, "1,123,123 match")
    assert.equal(regTest('0,123'), false, "0,123 not match")
    assert.equal(regTest('n,123'), false, "n,123 not match")
    assert.equal(regTest('1,000'), true, "1,000 match")
    assert.equal(regTest('1,000.00'), true, "1,000.00 match")
    assert.equal(regTest('1000'), true, "1,000.00 match")
    assert.equal(regTest('100,000.00'), true, "100,000.00 match")
    assert.equal(regTest('1000,000.00'), false, "1000,000.00 no match"))
}

function regTest(varIn) {

    if (varIn.match('(^0(\\.\\d{1,2})?$)|(^[1-9]\\d*(\\.\\d{1,2})?$)|(^[1-9](\\d{0,2},\\d{3})*(\\.\\d{1,2})?$)') == null) {
        return false
    }

    else return true


}






assert.equal(mailTest('aaa@aaaaa'), false, "aaa@aaaa not match")

function mailTest(varIn) {
    if (varIn.match('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$') == null)
        return false
    else
        return true
}