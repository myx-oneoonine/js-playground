"use strict";

function nonUniqueElements(data) {
  var dataSolved = Array.from(data);

  for (var i = data.length - 1; i >= 0; i--) {
    var dataTmp = Array.from(dataSolved);
    var removeValue = dataTmp.splice(i, 1);

    if (!dataTmp.some(value => value == removeValue)) {
      dataSolved.splice(i, 1);
    }
  }

  return dataSolved;
  // return data.filter(e => data.filter(k => k == e).length > 1); WRF!!!
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements(['a']), [], "zero example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
