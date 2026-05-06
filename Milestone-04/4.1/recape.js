let students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 62 },
  { name: "Salam", marks: 92 },
  { name: "Jabbar", marks: 78 }
];

let i=0;
while(i<students.length){
    if(students[i].marks >=90){
        console.log(students[i].name + ": A+")
    }
    else if(students[i].marks >=80){
        console.log(students[i].name + ": A")
    }
    else if(students[i].marks >=70){
        console.log(students[i].name + ": B")
    }
    else if(students[i].marks >=60){
        console.log(students[i].name + ": C")
    }
    else{
        console.log(students[i].name + ": F")
    }
    i++;
}
