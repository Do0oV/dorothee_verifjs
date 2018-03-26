/*// Below Function Executes On Form Submit
function ValidationEvent() {
// Storing Field Values In Variables
var nom = document.getElementById("nom").value;
var prenom = document.getElementById('prenom').value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
// Regular Expression For Email
var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
// Conditions
if (nom != '' && prenom != '' && email != '' && message != '') {
if (email.match(emailReg)) {
if (document.getElementById("monsieur").checked || document.getElementById("madame").checked) {
if (document.getElementById("pro").checked || document.getElementById("perso").checked) {
alert("All type of validation has done on OnSubmit event.");
return true;
} else {
alert("");
return false;
}
} else {
alert("Civilité non renseignée!");
return false;
}
} else {
alert("Invalid Email Address...!!!");
return false;
}
} else {
alert("All fields are required.....!");
return false;
}
}*/
function valider ( )
{
	if ( document.formul.nom.value == "" )
	{
		alert ( "Veuillez entrer votre nom !" );
		valid = false;
		return valid;
	}
	if ( document.formul.prenom.value == "" )
	{
		alert ( "Veuillez entrer votre prénom !" );
		valid = false;
		return valid;
	}
	if ( document.formul.mail.value == "" )
	{
		alert ( "Veuillez entrer votre email !" );
		valid = false;
		return valid;
	}
	if ( document.formul.message.value == "" )
	{
		alert ( "Veuillez entrer votre message !" );
		valid = false;
		return valid;
	}
}