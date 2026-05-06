function count_zero(str){
    let c = 0;
    for(let i of str){
        if(i === '0'){
            c++;
        }
    }
    return c;
}

const binary = "0242220005101035";
console.log(count_zero(binary));