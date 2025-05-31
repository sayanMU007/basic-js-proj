let tasks=["washing","cleaning","cooking","shopping","reading"];
let userInput=prompt("Enter a task to add to the list:");
tasks.push(userInput);
for(let i=0; i<tasks.length; i++){
    console.log(`${i+1}.${tasks[i]}`);
}
let taskIndex=prompt("Enter the task number to remove:");
if(taskIndex>0 && taskIndex<=tasks.length){
    tasks.splice(Number(taskIndex)-1, 1);
    console.log("Task removed successfully.");
}else{
    console.log("Invalid task number.");
}