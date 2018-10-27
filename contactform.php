<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = 'andr5117@edu.eal.dk';
    $headers = 'From: '.$mailFrom;
    $txt = 'You have received an email from '.$name.'.\n\n'.$message;


    mail($mailTo, $txt, $headers);
    header('Location: index.php?mailsend');

}




?>