// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Easiest solution using built in js functions. 
// Split the string into an array, reverse the array, then join the reversed array back to a string.

// function reverse(str) {
//     return str.split('').reverse().join('')
// }


// Create empty string called reversed. For each character in the string, take the character and add
// it to the start of reversed and return it.

function reverse(str) {
    let reversed = '';

    for (const character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

// Using JS reduce array helper

// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed
//     }, '')
// }

module.exports = reverse;
