 function myFunction() {
                    window.quantity=document.getElementById("entry_895502648").value;
                    console.log(document.getElementById("entry_895502648").value);
                    localStorage.setItem("quantity", document.getElementById("entry_895502648").value);
                    var email = document.getElementById("entry_1337956581").value;

                    // Returns successful data submission message when the entered information is stored in database.
                    var dataString = 'email=' + email ;
                   
                    // AJAX code to submit form.
                    $.ajax({
                    type: "POST",
                    url: "sendEmail.php",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                        //alert(html);
                        console.log("sent");
                    }
                    });
}


function myFunc(){
 
            $('p.quantity').html(localStorage.getItem("quantity"));
    
            console.log("value is: "+localStorage.getItem("quantity"));
}  