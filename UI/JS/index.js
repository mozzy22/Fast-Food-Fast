function validatelogin() {
    var x = document.forms["login"]["email"].value;
    var pass = document.forms["login"]["pass"].value;
  
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (pass == "")  {
        alert("Empty Password, plese fill in the password");
        return false;
    }
    

    if (x == "")  {
        alert("Empty email, plese fill in the email");
        
        return false;
     }
    else if (filter.test(x) )
    {
     return true;  
    }  
    
     else 
     {  
        alert("invalid email");
        return false;      
      }
    
   
    
}
  