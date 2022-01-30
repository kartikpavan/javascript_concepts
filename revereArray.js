const revArray = (arr) => {
  let newarray = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newarray.push(arr[i])
  }
  return newarray;

}

console.log(revArray(['d', 'i', 'o']))