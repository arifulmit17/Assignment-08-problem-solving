function vowel(str1){
    for (let i of str1){
        if (i=='a' || i=='e' || i=='i' || i=='o'||i=='u' ){
            count=count+1
        }
        
    }
    return count

}
const str1="programming"
let count=0
let number_of_vowel=vowel(str1)
console.log(number_of_vowel);