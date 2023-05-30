
function sendEmail() {
//  Create an account on https://app.elasticemail.com/api/
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "**********@gmail.com",
    Password: "**********",
    To: "**********@gmail.com",
    Port: 2525,
    From: "**********@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Phone no: " + document.getElementById("phone").value
    + "<br> Message: " + document.getElementById("message").value
    }).then((message) => alert(message));
}
