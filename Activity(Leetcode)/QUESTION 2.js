/*Write a generator function that returns a generator object which yields the fibonacci sequence.
The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.*/

function* fibGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b]; 
    }
}
function generateFibonacci(callCount) {
    const gen = fibGenerator();
    const result = [];
    
    for (let i = 0; i < callCount; i++) {
        result.push(gen.next().value);
    }

    return result;
}
console.log(generateFibonacci(5)); 
console.log(generateFibonacci(0));  
