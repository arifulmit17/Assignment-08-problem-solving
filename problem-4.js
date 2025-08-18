function biggest(number){
for (let i =0;i<number.length;i++){
    if(big_number<number[i]){
        big_number=number[i] 
    }
}
return big_number
}

const number=[5,1,9,3]
let big_number=0
big_number=biggest(number)
console.log(big_number);
// expected output: 9