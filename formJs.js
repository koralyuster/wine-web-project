form.addEventListener('submit',function(e){
    e.preventDefault();
    let checker = 0;
    //console.log("Submit was clicked");
    if(firstName.value === ""){
        showError(firstName, "Please enter your first name");
    }
    else{
        showSuccess(firstName);
        checker++

    }
    if(lastName.value === ""){
        showError(lastName, "Please enter your last name");
    }
    else{
        showSuccess(lastName);
        checker++
    }
    if(email.value === ""){
        showError(email, "Please enter an Email");
    }
    else{
        showSuccess(email);
        checker++
    }
    if(message.value === ""){
        showError(message, "Please enter your message");
    }
    else{
        showSuccess(message);
        checker++
    }
   
    if(checker == 4){
    swal("Thank you " + firstName.value + " !", "We will answer your question soon", "success");
    }
}); 