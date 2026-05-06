function sumOfNumbers(numbers){
    let sum = 0;
    for(const num of numbers){
        sum = sum + num;
    }
    return sum;
}

const arr = [4, 6, 3, 7];
const sum = sumOfNumbers(arr);
console.log('Sum of Numbers: ', sum);