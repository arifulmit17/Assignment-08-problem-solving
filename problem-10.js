function count(){
    for (let i=1;i<=20;i++){
        if(i%3==0 && i%5==0){
            result.push('pingpong');
        }
        else if(i%3==0){
            result.push('ping');
        }
        else if(i%5==0){
            result.push('pong');
        }else{
            result.push(i);
        }
        
    }
    return result.join(',')
}
let result=[]
const number=20
result=count(number)
console.log(result);
// expected output: 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong,16,17,ping,19,pong