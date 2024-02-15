console.log(multiplyNumbers(3, 4));//ReferenceError : Cannot acess 'multiplyNumbers' before initialization
const multiplyNumbers = function (num1, num2){
    return num1 * num2;
}
