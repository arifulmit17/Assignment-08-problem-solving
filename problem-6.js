function add(){
    for (let i of array1){
        sum=sum+i
    }
    return sum
}
const array1=[1,2,3,4]
let sum=0
sum = add(array1)
console.log(sum);
//  expected output: 10