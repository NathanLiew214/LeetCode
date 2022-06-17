/**
 * @param {number[]} nums
 * @return {number}
 */

/**
26. Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
/* fill in _ for duplicates*/
      for (let i = 0; i < nums.length-1; i++){
            for (let j= i+ 1; j< nums.length; j++){          
                if(nums[i] == nums[j]){
                   nums[j] = '_'
                }
            }
        }
    
    
/*create new Array and push non empty into new Array*/
     let newArray = [];
     for (let k = 0; k < nums.length; k++){
       if(nums[k] !== '_'){
           newArray.push(nums[k]);
       }
 
     }
    
    /*empty nums array and copyover newArray to nums*/
    nums.length = 0;
     for (let m = 0; m < newArray.length; m++){
         nums[m] = newArray[m];
     }


};
