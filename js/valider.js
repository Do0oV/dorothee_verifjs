
function valider ( )
{
	if ( document.formul.nom.value == "" )
	{
		alert ( "Veuillez entrer votre nom !" );
		document.formul.nom.value.focus();
		return false;
	}
	if ( document.formul.prenom.value == "" )
	{
		alert ( "Veuillez entrer votre prénom !" );
		document.formul.prenom.value.focus();
		return false;
	}
	if ( document.formul.mail.value == "" )
	{
		alert ( "Veuillez entrer votre email !" );
		document.formul.mail.value.focus();
		return false;
	}
	if ( document.formul.message.value == "" )
	{
		alert ( "Veuillez entrer votre message !" );
		document.formul.message.value.focus();
		return false;
	}
	if( document.formul.objet.value == "")  {
		alert("Veuillez selectionner un contact!");
		document.formul.objet.value.focus();
		return false;
	}
	

}