const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const number1 of numbers1){
  console.log(number1)
}


const double = (numbers2) => {
  let result2 = []
    for (const number2 of numbers2){
      result2.push(number2 * 2)
    }
  return result2
}

console.log(double([1, 2, 3, 4, 5, 6]))