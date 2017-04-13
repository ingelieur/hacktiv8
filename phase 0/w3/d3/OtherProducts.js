/*
Challenge
Using the JavaScript language, have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all the other numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least 1 element of only positive integers. 

Sample Test Cases
Input:1,4,3
Output:"12-3-4"

Input:3,1,2,6
Output:"12-36-18-6"
*/

function OtherProducts(arr) { 

    var total = 1;
    var arrTimes = [];
    for (i=0; i<arr.length; i++) {
            total = total*arr[i];
        } 
    for (j=0;j<arr.length;j++) {
            arrTimes [j] = total/arr[j];
        }
    var stringArr = arrTimes.join('-');
    return stringArr; 
           
}
   
// keep this function call here 
// OtherProducts(readline());
