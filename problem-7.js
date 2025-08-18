function even(numbers){
    for (i of numbers){
        if(i%2==0){
            even_numbers.push(i)
        }
    }
    return even_numbers
}

const numbers=[1,2,3,4,5,6]
let even_numbers=[]
even_numbers=even(numbers)
console.log(even_numbers);