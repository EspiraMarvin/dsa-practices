/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

 */

function isIsogram(str) {
  let obj = new Set()

  for (let i = 0; i < str.length; i++) {
    if (obj.has(str[i])) {
      //   console.log("obj has", str[i])
      return false
    } else {
      //   console.log("obj lacks", str[i])
      obj.add(str[i])
    }
  }

  return true
}

console.log("isIsogram", isIsogram("Dermatoglyphics")) // true
console.log("isIsogram", isIsogram("moose")) // false
console.log("isIsogram", isIsogram("aba")) // false
