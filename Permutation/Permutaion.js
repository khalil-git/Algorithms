/*
 Permuation Algorithm 
 - return all the possible permutations
*/
const permutation = {

    // Get permutaion list of a giving string
    permutate: function (str="", temp =[], result=[]){
    
            const arr = [...str];     
    
            if(arr.length === 0){	
            result.push([...temp].join(''));  
            return;
            }
                
            
            for(let i in arr){
    
            let curr = arr[i];

            //push current character  
            temp.push(curr);     
            //get rest char
            const rest = arr.filter((item, index) =>{
                return index != i;
            })        

            this.permutate(rest, temp, result)
    
            //remove last char from temp array
            temp.pop();
    
            }
    
            return result;
    },
    //Get the count of the avilable permuation
    count: function(str){
            let c = this.permutate(str).length;	 
            return c;
    }
  }  
  
 
  console.log(permutation.permutate("abcd"));
  console.log(permutation.count("abcd"));
  
  