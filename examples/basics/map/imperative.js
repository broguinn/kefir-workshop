function addFive(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + 5)
  }
  return result
}

console.log(
  addFive([1, 2, 3]))
// >> [6, 7, 8]
