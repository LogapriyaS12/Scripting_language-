/*Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more
than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).*/


function createCounter(n) {
    let current = n;  
    return function() {
        return current++;  
    };
}

// Example usage:
let counter1 = createCounter(10);
console.log(counter1());  // 10
console.log(counter1());  // 11
console.log(counter1());  // 12

let counter2 = createCounter(-2);
console.log(counter2());  // -2
console.log(counter2());  // -1
console.log(counter2());  // 0
console.log(counter2());  // 1
console.log(counter2());  // 2
