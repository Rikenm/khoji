import {Sub_Category_LIST,Sub_Category_DICT_ALL} from "../util/constant/categorylist"
import {STATE_CITY_DICT} from "../util/constant/statecity"

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

export const checkParams = (country,secondary,search,category,subcategory)=>{
    // call 

   
    return (checkCountrySecondary(country,secondary) && checkCategorySubcategory(category,subcategory) && checkSearch(search) ? true : false)
   


}

const checkCountrySecondary = (country,secondary) =>{
    //check if country and secondary is called
    //returns boolean if both of the params are valid
    if (country in STATE_CITY_DICT){
          
       

       
       return (isInArray(secondary,STATE_CITY_DICT[country]) ? true : false)

    }else{
        return false
    }
    


}

const checkCategorySubcategory = (category,subcategory) =>{
    //check if subcategory is valid. category validation is already done by the router
    //returns boolean if both of the params are valid
    
    
    return (isInArray(subcategory,Sub_Category_DICT_ALL[category])?true:false)
    
    
}

const checkSearch = (search) =>{
    //check if search is a number and greater than 0
    //returns boolean if  the params is valid
    if (isNumeric(search)){
      const numb = parseInt(search) 
      return (typeof(numb) === "number" && search>0? true : false)

    }else{
        return false
    }


}


//helper 

function isNumeric(num){
    return !isNaN(num)
  }

  function isInArray(value, array) {
    return array.indexOf(value) > -1;
  }