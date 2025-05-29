let sentence=prompt("Enter a Sentence :");
for(let i=0; i<sentence.length; i++){
    if(sentence[i].toLowerCase()==="a" || 
       sentence[i].toLowerCase()==="e" || 
       sentence[i].toLowerCase()==="i" || 
       sentence[i].toLowerCase()==="o" || 
       sentence[i].toLowerCase()==="u"){
        console.log(sentence[i]);
    }
}