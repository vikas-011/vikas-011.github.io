
function SendEmail(){
    event.preventDefault()
    var fullName = document.getElementById("fullName").value;
    var email_id = document.getElementById("email_id").value;
    var phone_id = document.getElementById("phone_id").value;
    var message = document.getElementById("Message").value;
    
    if (fullName === "" || email_id === "" || message === "") {
      // Display  an error message if any of the fields are empty
      swal("⌛PLEASE ENTER⏳\n ❓NAME‍\n ❓EMAIL\n ❓MESSAGE");
      return;
    }
    

    // var parmas ={
    //     from_name : document.getElementById("fullName").value,
    //     email_id : document.getElementById("email_id").value,
    //     phone_id : document.getElementById("phone_id").value,
       
    //     message : document.getElementById("Message").value

       
    // }
    var parmas = {
        from_name: fullName,
        email_id: email_id,
        phone_id: phone_id,
        message: message
      }

    empty();
    emailjs.send("service_77v0y07", "template_1jqqn6o", parmas).then(function(res){
        swal("✔ Message sent successfully\n \n⏰  CHECK YOUR EMAIL  📧");
       
        
        // console.log(parmas)
    })
    console.log(parmas)
   
}

function empty(){
    

    setTimeout(()=>{document.getElementById("fullName").value=null
    document.getElementById("email_id").value=null
    document.getElementById("phone_id").value=null
    document.getElementById("Message").value=null
   
    
},7000);
    

}
