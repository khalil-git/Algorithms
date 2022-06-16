function bubbleSort(arr){
    
    const myArray = [...arr];
    let swapped;
    let i,j;
   
    for (i=0; i < myArray.length - 1; i++){                      

            swapped = false;   
          
            for (j=0; j < myArray.length - i - 1; j++){               
               
                if(myArray[j] > myArray[j + 1]){
                        swap(j, j+1);                       
                        swapped = true;                
                    }            
            }

            if (swapped == false){
                break;
            }
            
    } 
    
    function swap(indexA, indexB){       
        let temp = myArray[indexA];
        myArray[indexA] = myArray[indexB];
        myArray[indexB] = temp;      
    }


    return myArray ;  
}


console.log(bubbleSort( [50,10,40,30,20] ));