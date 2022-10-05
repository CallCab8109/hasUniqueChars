// Write your code below
// function hasUniqueChars (char) {
//     if(char === "Monday"){
//          return true;
//     } else {
//         return false;
//     }
   
// }

// let charUnique = hasUniqueChars("Moonday")
// console.log(charUnique)

// function is_unique(str) {
//   var obj = {};
//   for (var z = 0; z < str.length; ++z) {
//     var ch = str[z];
//     if (obj[ch]) return false;
//     obj[ch] = true;
//   }
//   return true;
// }
// console.log(is_unique("aa"))

//----OR-----

function stringIsUnique(input) {
    for(i = 0; i < input.length; i++) {
        if(input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
            return false;
        }
    }
    return true;
}
console.log(stringIsUnique("aa"))