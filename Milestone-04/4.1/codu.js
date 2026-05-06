let fruits = ["Apple", "Banana", "Mango", "Orange", "Guava"];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

let i=0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

for(let fruit of fruits){
    console.log(fruit);
}