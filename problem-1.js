function reverse(str1){
    const L=str1.length
    for (let i=L;i>0 ; i--){
        str2=str2+str1[i-1]
        
    }
    return str2
}

const str1='hello'
let str2=''
str2=reverse(str1)
console.log(str2);