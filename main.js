let arr=[1,2,3,4,5,5,6]
let result=[]
document.write("Given Array = [1,2,3,4,5,5,6]<br><br>");

for(let i=0;i<arr.length;i++){
    if(result.length===0){
        result.push(arr[i])
    }
    else if(result.indexOf(arr[i])===-1){
        result.push(arr[i])
    }
}

document.write(`Delete dublicate value answer = ${result}`)