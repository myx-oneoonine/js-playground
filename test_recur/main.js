function x(n) {
    sum = 0;
    for (i = 0; i < n; i++) {
        sum = sum + 2 * i
        console.log(sum);
    }

    return sum;
}

num = 10;
console.log("loop >>>: " + x(num));
console.log("recur >>>: " + recur(num));


function recur(n) {
    n--;
    sum = n * 2;
    console.log(sum);
    if (n > 0) {
        return sum + recur(n);
    }
    return sum;
}