/*Given an object or an array, return if it is empty.
An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse*/

function sortArrayByFunction(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
}
console.log(sortArrayByFunction([5, 4, 1, 2, 3], (x) => x));
console.log(sortArrayByFunction([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x));
console.log(sortArrayByFunction([[3, 4], [5, 2], [10, 1]], (x) => x[1]));
