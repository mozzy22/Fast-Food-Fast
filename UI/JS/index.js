function validatelogin() {
    var x = document.forms["login"]["email"].value;
    var pass = document.forms["login"]["pass"].value;
  
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (pass == "")  {
        alert("Empty Password, plese fill in the password");
        return false;
    }
     if(pass == "admin"  && x == "admin@gmail.com"){
       alert("admin redirected to admin page")
        window.location.replace("https://mozzy22.github.io/Fast-Food-Fast/UI/HTML/adminpage.html");
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
  