// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// My solution using same logic from reverse string

function palindrome(str) {
    let reversed = '';

    for (const character of str) {
        reversed = character + reversed;
    }
    // Returns truthy or falsy depending if they match
    return reversed === str;
}

// Solution that uses the every helper to compare every character to the character on the opposite side
// i is the index of the character we are iterating over

// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1]
//     })
// }


module.exports = palindrome;
