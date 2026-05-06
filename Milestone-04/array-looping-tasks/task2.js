const numbers = [12, 98, 5, 41, 23, 78, 46];
const even_numbers = [];

for (let num of numbers){
    if(num % 2 == 0){
        even_numbers.push(num);
    }
}

console.log(even_numbers)