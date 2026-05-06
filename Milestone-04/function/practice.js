function calculateGrade(marks){
    if(marks >= 90){
        return "A+"
    }
    else if(marks >= 80 && marks <= 89){
        return "A"
    }
    else if(marks >= 70 && marks <= 79){
        return "B"
    }
    else if(marks >= 60 && marks <= 69){
        return "C"
    }
    else {
        return "F"
    }
}
function getAverage(numbers){
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    return sum/numbers.length;
} 

let students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 62 },
  { name: "Salam", marks: 92 },
  { name: "Jabbar", marks: 78 }
];

const marks = []

for(let student of students){
    console.log(student.name + ": " + calculateGrade(student.marks))
    marks.push(student.marks)
}
console.log("Average marks: "+ getAverage(marks))