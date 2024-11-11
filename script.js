console.log('F U N C T I O N C H E C K I N G ');

let inputEmail = document.getElementById('inputEmail');
console.log(inputEmail)



function sendEmail(){
    console.log('sending to email....');
    inputEmail.placeholder = 'Email';
}

function sendMobile(){
    console.log('sending to mobile....');
    inputEmail.placeholder = 'Mobile';
}