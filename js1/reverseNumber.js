const n = 32243;

function reverseNumber(n) 
{
    return parseInt(String(n).split('').reverse().join(''));
}
console.log(reverseNumber(n));