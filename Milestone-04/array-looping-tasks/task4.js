const statement = 'I am a hard working person'

// 'person working hard a am I'
// let word = "";
// let arr_statement = [];

// for(let ch of statement){
//     if(ch === " "){
//         arr_statement.push(word);
//         word = "";
//     } else {
//         word += ch;
//     }
// }
// arr_statement.push(word);  // শেষ শব্দটা পুশ

// arr_statement.reverse();
// let result = arr_statement.join(" ");

// console.log(result);


let word = statement.split(" ");  //split(" ") ei function ta array hisebe return kore
word.reverse(); // reverse() ei function tao array te work kore. 
let result = word.join(" ");
console.log(result)