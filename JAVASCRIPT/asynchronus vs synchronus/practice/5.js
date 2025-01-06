
// * group anagrams into subarrays?.

// input : ["eat", "tea", "tan", "ate", "nat", "bat"] , output : [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]


function groupAnagrams(strs) {
    // Create an object to hold the groups of anagrams
    let anagramGroups = {};

    // Iterate through each string in the input array
    for (let str of strs) {
        // Sort the string to use as a key for anagram groups
        let sortedStr = str.split('').sort().join('');

        // If this sorted string is already a key, push the word to the group
        if (!anagramGroups[sortedStr]) {
            anagramGroups[sortedStr] = [];
        }
        anagramGroups[sortedStr].push(str);
    }

    // Return all values of the object (which are arrays of anagrams)
    return Object.values(anagramGroups);
}

// Example usage:
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
