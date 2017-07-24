
<?php
// Fetching Values From URL

$to = $_POST['email'];
$subject = 'the subject';
$message = 'hello';
$headers = 'From: bjin718@aucklanduni.ac.nz' . "\r\n" .
    'Reply-To: $to'. "\r\n" ."X-Mailer: PHP";

mail($to, $subject, $message, $headers);

echo $to;
return true;
?>