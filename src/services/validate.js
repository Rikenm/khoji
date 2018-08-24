

export const validate= (value, type)=>{

   if (type === "email"){
      // check if email and not empty 
      if (value.length>1){
          const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

          const result = pattern.test(value);

          return result
      }
      return false

   }
   else if(type === "text"){
       //just check if it is empty

   }
   else if(type === "usernamePost"){
       // at least 4 letters



   }else if(type === "passwordPost"){

         //at least 1 capital letter
       //at least  1 small letter
       //at least one number
       // length 8 to 40 letters
     

   }else if(type === "password"){
       if (value.length !== 0){
           return true
       }else{
           return false
       }
   }

}

