/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
let presentSalary = startingSalary * (1.05 ** experience)
console.log(presentSalary.toFixed(2))