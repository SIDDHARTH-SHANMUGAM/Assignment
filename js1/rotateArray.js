const arr = [1, 12, 43, 5, 6];
const n = 3;

function rotateArray(arr, n) 
{
    const rotated = arr.slice(n).concat(arr.slice(0, n));
    return rotated;
}

console.log(rotateArray(arr, n));