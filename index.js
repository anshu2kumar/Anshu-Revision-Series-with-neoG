// console.log('Anshu Kumar');
// var oldBoolean = 0;
// var readlineSync= require('readline-sync');
// var ans=readlineSync.question("Hi Anshu,Tell me your passing year.");
// if(ans>=2020){
//   oldBoolean= oldBoolean+1;
// }
// console.log("You are " + ans + ","+ "graduate!Congratulations !!"  + '\n' + "");




//functions

var readlineSync = require('readline-sync');
var x1= readlineSync.question("Input your first number: ");
var x2= readlineSync.question("Input your second number: ");

function product(n1, n2){
  const product= n1*n2;
  return product;

}

var output= product(x1,x2);
console.log("Your answer is :" + " "+ output);