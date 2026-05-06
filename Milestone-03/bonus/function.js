function subFunction(input1, input2){
    let sub = input1 - input2
    return sub
}
function malFunction(input1, input2){
    let mal = input1 * input2
    return mal
}
function divFunction(input1, input2){
    let div = input1 / input2
    return div
}
function callFunction(input1, input2){
    let sub = subFunction(input1, input2)
    let mal = malFunction(input1, input2)
    let div = divFunction(input1, input2)

    let result = [sub, mal, div]
    return result;
}

console.log(callFunction(10, 5))