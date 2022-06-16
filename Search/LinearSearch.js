function linearSearch(arr, num){
    
    let key = num;
    
    for(let i in arr){
        //if found the key return it's index in the array        
        if(arr[i] === key ){
            return i;
        }
    }

    //return -1 if the key not found 
    return -1;
}

console.log(linearSearch([10,20,30,40,50], 50));