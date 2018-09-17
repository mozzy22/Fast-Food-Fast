function open2(evt, divName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(divName).style.display = "block";
    evt.currentTarget.className += " active";
}


function validateadditem() {
    var name1 = document.forms["formitem"]["name"].value;
    var price2 = document.forms["formitem"]["price"].value;
  
  
    if (name1 == "")  {
        alert("Empty item name, plese fill in the name");
        return false;
    }

    if (price2 == "")  {
        alert("fill in the price");
        return false;
    }
       
    
}
  