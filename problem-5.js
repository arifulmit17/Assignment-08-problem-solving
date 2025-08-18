function duplicate(numbers){
  for(let i of numbers){
    if (!unique.includes(i)){
        unique.push(i)
    }
  }
  return unique
}
const numbers=[1,2,2,3,4,4]
let unique=[]
unique=duplicate(numbers)
console.log(unique);
// expected output: [1,2,3,4]