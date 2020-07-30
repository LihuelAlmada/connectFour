var contactName = null;
var contactEmail = null;
var contactMessage = null;
var contactError = '';
//  open the operating system's default emailing tool
var sendEmail = (contactName, contactMessage)=> {
    window.open('mailto:lihuel.almada@gmail.com?subject=' + encodeURIComponent(contactName) +'&body=' + encodeURIComponent(contactMessage));
}
var validateForm = ()=> {
    var alphaNum = /^[a-zA-Z0-9]*$/; //alphanumeric characters only
    var validEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/; //regex with multiple email formats
    var isValid = true;
    var contactMessageError = [];
    if(contactName.value.length < 3) {
        contactMessageError.push ('Name short, minimum three characters');
        isValid = false;
    }
    if(!alphaNum.test(contactName.value)) {
        contactName.value = '';
        contactMessageError.push ('Invalid characters in name');
        isValid = false;
    }   
    if(!validEmail.test(contactEmail.value)) {
        contactEmail.value = '';
        contactMessageError.push ('Invalid Email format');
        isValid = false;
    }
    if(contactMessage.value.length < 5) {
        contactMessage.value = '';
        contactMessageError.push ('Message short, minimum five characters');
        isValid = false;
    }
    if(isValid) {
        sendEmail(contactName, contactMessage)
        contactMessage.value = '';
        contactEmail.value = '';
        contactName.value = '';
        contactError.innerHTML = '';
    } else {
        contactError.innerHTML = '<p class = "error">' + contactMessageError.join('</p> <p class = "error"> ') + '</p>';
    } 
}
