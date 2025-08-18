function capitalise(str1){
    for(let i in str1){
        if(i==0){
            str2=str1[i].toUpperCase()
        }
    }
    for(let j=1;j<str1.length;j++){
        if(str1[j]==' '){
            str2=str2+' '
            str2=str2+str1[j+1].toUpperCase()
            j=j+1
        }
        else{
            str2=str2+(str1[j])
        }
    }
    return str2
}
str1='hello world'
str2=''
str2=capitalise(str1)
console.log(str2);