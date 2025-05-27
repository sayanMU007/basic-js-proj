let a=prompt("Enter value of first number :");
let b=prompt("Enter value of second number :");
let operator=prompt("Enter value of operator :");
let result;
if(operator=== "+"){
    result=Number(a)+Number(b);
}else if(operator==="-"){
    result=Number(a)-Number(b);
}else if(operator==="*"){
    result=Number(a)*Number(b)
}else if(operator==="/"){
    result=Number(a)/Number(b);
}else{
    result="Invalid operator";
};
alert("Result is:" + result);