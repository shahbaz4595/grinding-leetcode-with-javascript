/*
387. First Unique Character in a String
Link: https://leetcode.com/problems/first-unique-character-in-a-string/?envType=study-plan&id=data-structure-i

Description:
    Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
    Input: s = "leetcode"
    Output: 0

Example 2:
    Input: s = "loveleetcode"
    Output: 2

Example 3:
    Input: s = "aabb"
    Output: -1
 
Constraints:
    1 <= s.length <= 105
    s consists of only lowercase English letters.
*/

const firstUniqChar = str => {
    const map = new Map();
    for (let charIndex = 0; charIndex < str.length; charIndex++) {
        if (map.has(str[charIndex])) {
            let currentCount = map.get(str[charIndex]).count;
            map.set(str[charIndex], {count: currentCount + 1, index: charIndex})
        }
        else map.set(str[charIndex], {count: 1, index: charIndex});
    }
    
   for (let key of map.values()) {
       if (key.count === 1) return key.index;
   }
    return - 1;
};