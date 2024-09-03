const fibonacci = function(index) {
    if ( index < 0 ) {
        return "OOPS"
    }
    
    return fibonacciR(index)
};

function fibonacciR(i) {
    if (i == 0) {
        return 0
    }

    if (i == 1) {
        return 1;
    }

    return fibonacciR(i - 1) + fibonacciR(i - 2);
}

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
