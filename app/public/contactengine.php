<?php

$EmailFrom = "contact@caffenellecucine.com";
$EmailTo = "philjr@caffenellecucine.com";
$Subject = "Website Contact";
$Name = Trim(stripslashes($_POST['contact_name'])); 
$Email = Trim(stripslashes($_POST['contact_email'])); 
$Message = Trim(stripslashes($_POST['contact_message'])); 

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";  
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

//redirect to success page 
if ($success){
	header('Location: http://caffenellecucine.com/#/contact-thanks');
}
else{
	header('Location: http://caffenellecucine.com/#/contact-error');
}
?>