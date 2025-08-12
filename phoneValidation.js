
//  Create a function called validatePhoneNumber that takes a string as input and 
// returns true if the string represents a valid phone number and false otherwise.

const  validatePhoneNumber =(phone)=>{

       if(phone.includes('-') && phone.length<=12){
           return true
       }
       else{
        return false
       }

}

console.log(validatePhoneNumber('078-602-0445'))