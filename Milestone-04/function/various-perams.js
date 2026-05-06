function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log("Evne size");
        return true;
    }
    else{
        console.log("Odd size");
        return false;
    }
}

// evenSizedString("faka")
// evenSizedString("Dhaka")

function dubleOrTriple(number, doDouble){
    if(doDouble){
        return number * 2;
    }
    else{
        return number * 3;
    }
}

// console.log(dubleOrTriple(5, true))
// console.log(dubleOrTriple(5, false))

function pulling(something){
    const age = something.age;
    return age;
}

const person = {
    Name: "Ali",
    age: 24,
    Occupation: "Unemployed"
};

// console.log(pulling(person))

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

const array = [10, 12, 14, 16, 18, 20]
console.log(numberOfElements(array));