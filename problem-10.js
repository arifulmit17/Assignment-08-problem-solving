function count(){
    for (let i=1;i<=20;i++){
        if(i%3==0 && i%5==0){
            console.log('pingpong');
        }
        else if(i%3==0){
            console.log('ping');
        }
        else if(i%5==0){
            console.log('pong');
        }else{
            console.log(i);
        }
        
    }
}
const number=20
count(number)