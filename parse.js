/*
create a parser that evaluates and executes ternary operations in the string  of
"if ( <condition>, <truthy value>, <falsy value> )"
Which would normally equate to:

if ( <condition> ) {
   return <truthy value>
} else {
   return <falsy value>
}


*/
// hint: recursion and regex
const run = function (expression, data) {
  // pick split operators from the expression: +, -, *, /, %
  const operators = expression.match(/[\+\-\*\/\%]/g)

  // split expression strings by +, -, *, /, %
  const expressions = expression.split(/[\+\-\*\/\%]/g)
  // console.log("expressions", expressions)
  const replacedValues = expressions.map((exp) => replaceValues(exp, data))
  // console.log("replacedValues", replacedValues)

  const finalArrayValues = replacedValues.map((exp) => evaluateExpression(exp))
  console.log("finalArrayValues", finalArrayValues)

  const result = finalArrayValues.reduce((acc, curr, index) => {
    if (index === 0) {
      return curr
    }
    const operator = operators[index - 1]
    return new Function(`return ${acc} ${operator} ${curr}`)()
  })
  console.log("Result", result)
}
const replaceValues = function (expression, data) {
  // get variables from the expression and trim any spaces
  const variables =
    expression.match(/var_[0-9]+/g)?.map((variable) => variable.trim()) ?? []

  // replace variables with values from data
  variables.forEach((variable) => {
    expression = expression.replace(variable, data[variable])
  })
  // console.log("expression", expression)
  return expression
}

function evaluateExpression(expression) {
  // expression e.g  if (1 == 2, 0, if (4 == 4, 15, 0))
  // for every occurrence of if, we need to evaluate the values in the brackets
  // remove the first if
  const expressionWithoutIf = expression.replace(/if\s*/, "").trim()
  // console.log('expressionWithoutIf', expressionWithoutIf);

  // check if there is another if
  const ifIndex = expressionWithoutIf.indexOf("if")
  // if there is no if, evaluate the expression
  if (ifIndex == -1) {
    // pick the expression between the brackets
    // e.g  (1 == 2, 0, 15)
    const expressionToEvaluate = expressionWithoutIf.substring(
      expressionWithoutIf.indexOf("(") + 1,
      expressionWithoutIf.indexOf(")")
    )
    // evaluate the string "4 == 4, 15, 0" into a ternary operator
    const [condition, trueValue, falseValue] = expressionToEvaluate.split(",")

    return new Function(
      `return (${condition} ? ${trueValue} : ${falseValue})`
    )()
  }

  // pick the part from this if including the if
  // e.g  (1 == 2, 0, if (4 == 4, 15, 0))
  const expressionToEvaluate = expressionWithoutIf.substring(ifIndex)
  let expressionBeforeIf = expressionWithoutIf.substring(0, ifIndex)
  // remove brackets from the expression
  expressionBeforeIf = expressionBeforeIf.replace("(", "").replace(")", "")

  const recursiveEvaluation = evaluateExpression(expressionToEvaluate)

  // evaluate the string "4 == 4, 15, 0" into a ternary operator
  const [condition, trueValue, falseValue] = expressionBeforeIf.split(",")

  return new Function(
    `return (${condition} ? ${trueValue} : ${recursiveEvaluation})`
  )()
}

run(
  `if (var_1 == 2, 0, if (var_2 == 4, 15, 0)) + if (var_2 == 3, 5, 0) - if (var_4 == 2, 0, 5) + if (var_3 == 3, 5, 0)`,
  {
    var_1: 1,
    var_2: 4,
    var_3: 3,
    var_4: 5,
  }
)
// output: 15
