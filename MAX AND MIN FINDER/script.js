let num=[1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<num.length;i++){
    if(num[i]===1){
        console.log("The minimum number is :" + num[i]);
    }else if(num[i]===10){
        console.log("The maximum number is :" + num[i]);
    }else{
        console.log("The number is neither minimum nor maximum:" + num[i]);
    }
}