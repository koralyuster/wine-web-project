var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


//form:

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
