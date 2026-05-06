let numbers = [10, 20, 30, 40, 50];

while(numbers.length > 0) {
    let item = numbers.pop();  // শেষ থেকে তুলে নেই
    numbers.unshift(item);     // সামনে যোগ করি
}

console.log(numbers);  // [50, 40, 30, 20, 10]