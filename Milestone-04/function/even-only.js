function evenNumbersOnly (Numbers){
    let evens = [];
    for(const num of Numbers){
        if(num % 2 === 0){
            // console.log(num);
            evens.push(num);
        }
    }
    return evens;
}

const arr = [5, 8, 91, 6, 24];
console.log(evenNumbersOnly(arr));