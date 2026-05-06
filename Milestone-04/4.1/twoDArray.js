let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for(row of matrix){
    console.log(row.join(" "));
}

let i=0;
for(let row of matrix){
    console.log(row[i]);
    i++;
}