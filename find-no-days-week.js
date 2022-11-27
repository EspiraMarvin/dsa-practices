/*
find the index of input "d" against days of the week
apply "x" to offset the found index
apply modulo operator by total number of days (7) to revolve offset index around valid day range
return resulting day by that computed index
*/

function getWeekDayFromOffsetDate(d, x) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  // find index
  const dIdx = days.indexOf(d)

  //  add x to index of the d, apply modulo % to revolve back through the array

  const xIdx = (dIdx + x) & days.length

  return days[xIdx]
}
