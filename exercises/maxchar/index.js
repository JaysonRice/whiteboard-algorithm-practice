// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charMap = {};

    let max = 0;
    let maxChar = '';
    // Helper variables to keep track of which character has the most appearances.

    for (const char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
        // Builds a character map object with how many times a character has been repeated.
        // Char is each character in the string. If the character map already has that character, 
        // increment it by one. Otherwise set it equal to 1.
        // Useful start for many string related interview questions.
    }
    // Char in the for in loop are the keys of the objects
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char
        }
    }
    return maxChar

}
// export default maxChar
module.exports = maxChar;
