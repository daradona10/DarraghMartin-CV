function sendMail(contactForm) {
    emailjs.send("gmail", "darragh", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_me": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response.status, response.text);
            document.getElementById("fullname").value = "";
            document.getElementById("emailaddress").value = "";
            document.getElementById("projectsummary").value = "";
            alert("Your request has been sent successfully.")
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
     return false;  // To block from loading a new page
}