// function mergeArrays(...arr) {
//     return [].concat(...arr);
//   }
//   console.log(mergeArrays([1, 2], [3, 4]));
//   console.log(mergeArrays([15, 4], [2, 3],[5,7]));




// function findElement(arr, element) {
//     return arr.indexOf(element);
// }
// console.log(findElement([1, 2, 3], 2));





// function removeDuplicates(arr) {
//     let sum = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (sum.indexOf(arr[i]) == -1) {
//             sum.push(arr[i]);
//         }
//     }

//     return sum;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


 


// function removeNegativeNumbers(arr) {
//     return arr.filter(num => num >= 0);
// }
// console.log(removeNegativeNumbers([-1, 2, -3, 4, -5]));




// function calculateAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calculateAverage([2, 4, 6, 8, 10]));





// function isPalindromeArray(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] != arr[arr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindromeArray([1, 2, 3, 2, 1]));






// function filterNumbers(num1, num2, arr) {
//     return arr.filter(num => num > num1 && num < num2);
// }
// console.log(filterNumbers(3, 8, [1, 5, 95, 0, 4, 7]));





// function getTypes(arr) {
//     return arr.map(item => typeof item);
// }
// console.log(getTypes([1, 2,"null", []]));




// function getWordLengths(arr) {
//     return arr.map(word => word.length);
// }
// console.log(getWordLengths(["hello","world"]));






