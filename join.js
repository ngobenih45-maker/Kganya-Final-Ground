const form = document.getElementById("membershipForm");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
this
)

.then(function(){

alert("Application submitted successfully.");

form.reset();

})

.catch(function(error){

alert("Submission failed.");

console.log(error);

});

});
