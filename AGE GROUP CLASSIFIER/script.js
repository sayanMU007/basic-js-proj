let age=prompt("Enter your age :");
if(age<13){
    console.log("You are a child");
}else if(age>=13 && age<=19){
    console.log("You are a teenager");
}else if(age>=20 && age<=59){
    console.log("You are an adult");
}else if(age>=60){
    console.log("You are a senior citizen");
}else{
    console.log("Invalid age entered");
}