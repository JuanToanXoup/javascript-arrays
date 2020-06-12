var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(a,b) {
  const newarray = [b,...a];
  return newarray
}
function destructivelyAddElementToBeginningOfArray(a,b) {
  a.unshift(b);
  return a
}
function addElementToEndOfArray(a,b) {
  const newarray = [...a,b];
  return newarray
}
function destructivelyAddElementToEndOfArray(a,b) {
  a.push(b);
  return a
}
function accessElementInArray(a,b) {
  return a[b];
}
function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a
}
function removeElementFromBeginningOfArray(a) {
  const newarray = a.slice(1);
  return newarray
}
function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a
}
function removeElementFromEndOfArray(a) {
  const newarray = a.slice(0,a.length-1);
  return newarray
}
