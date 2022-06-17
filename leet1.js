/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var number = x;
     var digits = Array.from(String(number), Number);
     let reverseNum = digits.reverse(); 
       
     let check = true;
       
     for ( let i = 0; i < digits.length; i ++){
           if (digits[i] !== reverseNum[i] ){
              check = false;
           }else {
              check= true;
           }
              
     }  
     if ( check ==true){
         
         return true;
     }else{
         return false;
     }
       
   
       
   };