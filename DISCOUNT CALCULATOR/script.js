let prurchaseAmount = prompt("Enter purchase amount :");
if(prurchaseAmount<300){
    console.log("No discount");
}else if(prurchaseAmount>= 300 && prurchaseAmount<=500){
    console.log("Discount is 10%");
}else if(prurchaseAmount>500){
    console.log("Discount is 20%");
}else{
    console.log("Invalid input");
};