function fibb(number){
    for (let i=1;i<=number;i++){
        product=product*i
    }
    return product
}
const number=5
let product=1
product = fibb(number)
console.log(product);
// expected output: 120