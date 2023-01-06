/**
 * Email Js 
 * colletct and send data
 */
function sendEmail () {
    var data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceId = "gmail_dm415";
    const templateId = "template_3kr0lxt";

    emailjs.send(serviceId,templateId,data)
    .then(
        res =>{
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("message").value = ""
            console.log(res);
            alert("Message Sent!");
        }
    )
    .catch((error) => console.log(error));
    }