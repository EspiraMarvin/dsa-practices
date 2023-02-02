//Create a utility function / modify the code to access the values in the object via string references

const sourceObject = {
  props: {
    read: "a",
    write: "b",
    array: [{ key: "c" }, { key: "d"}],
  },
}

function getValueInObject(obj, path) {
  const pathArray = path.split(".")
  let result = obj

  pathArray.forEach((key) => {
    // console.log("result", result)
      result = result[key]
    // console.log("result", result)
  })
  return result
}

const referenceA = "props.read" // output: valueA: 'a'
const referenceB = "props.write" // output: valueB: 'b'
const referenceC = "props.array.0.key" // output: c
const referenceD = "props.array.1.key" // output: d

const valueA = sourceObject[referenceA]

console.log("Result A", getValueInObject(sourceObject, referenceA))
console.log("Result B", getValueInObject(sourceObject, referenceB))
console.log("Result C", getValueInObject(sourceObject, referenceC))
console.log("Result D", getValueInObject(sourceObject, referenceD))


// another solution is using js proxy
