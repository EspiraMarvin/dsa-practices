/**
 * 
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"the_pippi-was_kawaii" gets converted to "thePippiWasKawaii"

*/
function toCamelCase(str) {
  let fStr = ""
  let nextIdx = null
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      nextIdx = str[i + 1]
      continue
    }
    if (nextIdx === str[i]) {
      fStr += str[i].toUpperCase()
      nextIdx = null
    } else {
      fStr += str[i]
    }
  }
  return fStr
}

console.log("toCamelCase", toCamelCase("the-stealth-warrior")) // theStealthWarrior
console.log("toCamelCase", toCamelCase("the_stealth_warrior")) // theStealthWarrior

console.log("toCamelCase", toCamelCase("the_pippi-was_kawaii")) // thePippiWasKawaii
