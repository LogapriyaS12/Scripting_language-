/*Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.
A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.
inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.*/

function* inorderTraversal(arr) {
    for (let item of arr) {
        if (Array.isArray(item)) {
            yield* inorderTraversal(item); 
        } else {
            yield item; // Yield the integer if it's not an array
        }
    }
}
const arr1 = [[[6]],[1,3],[]];
const generator1 = inorderTraversal(arr1);

console.log(generator1.next().value); 
console.log(generator1.next().value); 
console.log(generator1.next().value); 
console.log(generator1.next().done);  

const arr2 = [];
const generator2 = inorderTraversal(arr2);
console.log(generator2.next().done); 
