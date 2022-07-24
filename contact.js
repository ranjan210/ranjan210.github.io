initEmail()

function initEmail() {
    emailjs.init("uF3I_JxwKcCJvX-ll")
}

function sendEmail() {
    var templateParams = {

    }

    const contactName = document.getElementById("contact-name").value;
    templateParams.from_name = contactName;
    const contactMessage = document.getElementById("contact-message").value;
    templateParams.message = contactMessage;
    const contactMail = document.getElementById("contact-mail").value;
    templateParams.from_email = contactMail;

    emailjs.send('contact_service', 'contact_template', templateParams)
        .then(function () {
            console.log('SUCCESS!');
            document.getElementById("contact-name").value = ""
            document.getElementById("contact-mail").value = ""
            document.getElementById("contact-message").value = ""

            document.getElementById("alert-box").style.display = "block";
            setTimeout(
                function () {
                    document.getElementById("alert-box").style.display = "none";
                }, 1500
            )


        }, function (error) {
            console.log('FAILED...', error);
        });

}