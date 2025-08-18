function palindrome(str1){
    for(i=str1.length-1;i>=0;i--){
        str2=str2+str1[i]
    }
    if(str1===str2){
        return true
    }else{
        return false
    }
}
const str1='madam'
// const str1='hello'
let str2=''
let result=palindrome(str1)
console.log(result);
// expected output: true