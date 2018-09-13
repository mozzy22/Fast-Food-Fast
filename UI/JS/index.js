function validatelogin() {
    var x = document.forms["login"]["email"].value;
    var y = document.forms["login"]["pass"].value;

    if (x == "")  {
        alert("Empty name, plese fill in the email");
        
        return false;}
    else 
     filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if (filter.test(x)) {
  
     return true;  }  
     else 
     {  
        alert("invalid email");
        return false;        }
    

    
    if (y == "")  {
        alert("Empty Password, plese fill in the password");
        return false;
    }
}
  