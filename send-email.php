<?php
if (!isset($_POST['submit'])) 
{
	echo "Error, You need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if (empty($name)||empty($visitor_email)) {
	echo "Name and Email are mandatory";
	exit();
}
$email_from = "\n $visitor_email";
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name.\n".
				"email address: $visitor_email\n".
				"Here is the message:\n $message".
$to = "sthaujwal8@gmail.com";
$headers = "From: $email_from \r\n";

mail($to,$email_subject,$email_body,$headers);

?>