const str1 = "silent";
const str2 = "listen";

function isAnagrams(str1, str2) 
{
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

if (isAnagrams(str1, str2)) 
{
    console.log("Anagram");
}
else 
{
    console.log("Not Anagram");
}