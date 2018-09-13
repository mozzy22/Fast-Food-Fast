function validatesignup(){
    var name1 = document.forms["signup"]["first"].value;
    var name2 = document.forms["signup"]["second"].value;
    var email = document.forms["signup"]["email"].value;
    var pass1 = document.forms["signup"]["pass1"].value;
    var pass2 = document.forms["signup"]["pass2"].value;

    if (name1 == "")  {
        alert("Empty name, plese fill in the first name");
        return false;
    } 

    if (pass1 == "")  {
        alert("Empty Password, plese fill in the password");
        return false;
    }
    if (pass2 == "")  {
        alert("Empty Password, plese re enter the password");
        return false;
    }

    if (pass1!==pass2)  {
        alert("Password missmatch");
        return false;
    }
    if (pass1.length <= 5 ) {
      alert("please enter pawword with more than 5 characters")
      return false;

    }

    if (name2 == "")  {
        alert("Empty name, plese fill in the second name");
        return false;
    }

    if (email== "")  {
        alert("Empty email, plese fill in the email");
        
        return false;}
    else 
     filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if (filter.test(email)) {
  
     return true;  }  
     else 
     {  
        alert("invalid email");
        return false;        }
    


}
