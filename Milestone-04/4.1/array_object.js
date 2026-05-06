let students = [
  { name: "Rahim", age: 20, marks: 85 },
  { name: "Karim", age: 22, marks: 72 },
  { name: "Salam", age: 19, marks: 95 },
  { name: "Jabbar", age: 21, marks: 68 }
];


for(let student of students){
    console.log(student.name + " - " + student.marks);
}

for(let student of students){
    if(student.marks > 80){
        console.log(student.name);
    }
}


let age=0;
for(let student of students){
    age = age + student.age
}
let avg_age = age/students.length;
console.log(avg_age);

