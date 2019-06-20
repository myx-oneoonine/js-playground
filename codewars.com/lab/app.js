//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
function SeriesSum2(n) {
    let result = 0;
    let denominator = 1;

    while (n != 0) {

        result += 1 / denominator
        denominator += 3;
        n--;
    }
    return result.toFixed(2)
}

//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
function SeriesSum1(n) {
    let result = 0;

    for (var i = 0; i < n; i++) {
        result += 1 / (1 + i * 3);
    }

    return result.toFixed(2)
}

function SeriesSum(n) {
    if (n != 0) {

        return SeriesSum(n - 1);
    }
    else return n;
}

console.log(SeriesSum(5));