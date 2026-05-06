function make_avg(array, arrSize){
    let sum = 0;
    for(let num of array){
        sum = sum + num;
    }
    return sum/arrSize;
}

const arr = [5, 5, 5, 5];
console.log(make_avg(arr, arr.length))