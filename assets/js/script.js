

function SendEmail(){
    event.preventDefault()
    var parmas ={
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        phone_id : document.getElementById("phone_id").value,
       
        message : document.getElementById("Message").value
    }
    empty();
    emailjs.send("service_77v0y07", "template_1jqqn6o", parmas).then(function(res){
        swal(" Message sent successfully ");
       
        
        // console.log(parmas)
    })
    console.log(parmas)
}



function empty(){

    setTimeout(()=>{document.getElementById("fullName").value=null
    document.getElementById("email_id").value=null
    document.getElementById("phone_id").value=null
    document.getElementById("Message").value=null
   
    
},10000);
    

}

