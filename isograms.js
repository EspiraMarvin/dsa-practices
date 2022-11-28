/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

 */

function isIsogram(str) {
  let obj = new Set() // use a set/object

  for (let i = 0; i < str.length; i++) {
    // loop over the string
    if (obj.has(str[i].toLowerCase())) {
      /* 
      check if obj has a string as you iterate, converting each str value to lowercase for uniformity
       if obj has that string means its not an isIsogram, return false
       */
      //   console.log("obj has", str[i])
      return false
    } else {
      //   console.log("obj lacks", str[i])
      obj.add(str[i].toLowerCase())
      //  else if obj lacks the str add it to the obj and continue the loop
    }
  }
  //   console.log("obj after interation", obj)

  return true // after iterating return true, meaning to letters we found to equal the other in a set, hence an isIsogram
}

console.log("isIsogram", isIsogram("Dermatoglyphics")) // true
console.log("isIsogram", isIsogram("isogram")) // true
console.log("isIsogram", isIsogram("moOse")) // false
console.log("isIsogram", isIsogram("moose")) // false
console.log("isIsogram", isIsogram("aba")) // false
