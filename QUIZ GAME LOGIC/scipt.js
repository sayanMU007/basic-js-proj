let score=0;
let ques1=prompt("What is the capital of India>\n a) New Delhi b) Mumbai c) kolkata d) Chennai");
let ques2=prompt("What is the currency of  USA?? \n a) Dollar b) Rupee c) Euro d) Pound");
let ques3=prompt("what is the capital of Japan?\n a) Bangkok b) Tokyo c) Beijing d) Bangkok");


if(ques1=="a" || ques1=="New Delhi"){
    alert("Correct Answer");
    score++;    
}else{
    alert("Wrong Answer");
}

if(ques2=="a" || ques1=="Dollar"){
    alert("Correct Answer");
    score++;    
}else{
    alert("Wrong Answer");
}

if(ques1=="b" || ques1=="Tokyo"){
    alert("Correct Answer");
    score++;    
}else{
    alert("Wrong Answer");
}

alert("Your score is "+ score + " out of 3");
if(score==3){
    alert("You are a genius");
}
else if(score==2){
    alert("You are smart");
}
else if(score==1){
    alert("You are average");
}
else{
    alert("You need to work hard");
};
// End of the quiz game logic
