const a = [1, 123, 72, 94, 6];

function evenDigitNumbers(a) 
{
    return a.filter(x => String(x).length % 2 === 0);
}

console.log(evenDigitNumbers(a));
