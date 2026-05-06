function pucku(number){
    if(number%2!==0){
        return number*2;
    }else{
        return number/2;
    }
}

const result = pucku(12);
const answer = pucku(15);
console.log(result, answer);