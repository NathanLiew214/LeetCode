/**
26. Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    

      for (let i = 0; i < nums.length-1; i++){
            for (let j= i+ 1; j< nums.length; j++){          
                if(nums[i] == nums[j]){
                   nums[j] = '_'
                }
            }
        }
    
     let newArray = new Array(3);
     for (let k = 0; k < nums.length; k++){
       if(nums[k] !== '_'){
           newArray.push(nums[k]);
       }
         
     }
     for (let m = 0; m < nums.length; m++){
         nums[m] = newArray[m];
     }


};
