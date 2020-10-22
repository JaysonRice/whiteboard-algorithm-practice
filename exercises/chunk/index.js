// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Solution 1
function chunk(array, size) {
    const chunked = [];

    for (const element of array) {
        // Always grabs the last element (array in this case) in the chunked array
        const lastElement = chunked[chunked.length - 1];

        // If there are no arrays in chunked OR if the last array in chunked has reached the size limit,
        // add the element in a new array. All other elements are added to lastElement arrays 
        // that have not reached their size limit yet  
        if (!lastElement || lastElement.length === size)
            chunked.push([element]);
        else {
            lastElement.push(element);
        }
    }
    return chunked;
}


module.exports = chunk;
