let arr=["a", "b", "c", "d", "e"];
for(let i=arr.length; i>=0 ;i++){
    console.log(arr[i]);
    let temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log(arr[i]);