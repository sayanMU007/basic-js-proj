let num=prompt("Enter a number to calculate its factorial:");
let fact=1;
for(let i=0; i<num; i++){
    fact*=i+1;
};
console.log(`The factorial of ${num} is ${fact}.`);