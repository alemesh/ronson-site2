<?php
//****************************************
//edit here
$senderName = 'Ronson floating forms';
$senderEmail = $_SERVER['SERVER_NAME'];
$targetEmail = [];
//$targetEmail = ['ravit@gofmans.co.il', 'office@ronson.co.il', 'idan@ronson.co.il', 'alemesh@acceptic.com', 'sales1@ronson.co.il', 'israel@gofmans.co.il', 'eli@gofmans.co.il'];
$targetEmail = ['alemesh@acceptic.com', 'eli@gofmans.co.il'];
$messageSubject = 'Message from web-site - '. $_SERVER['SERVER_NAME'];
$redirectToReferer = true;
$redirectURL = $_SERVER['SERVER_NAME'];
//****************************************

// mail content
$ufname = $_POST['name'];
$uphone = $_POST['tel'];
$umail = $_POST['email'];
$description = $_POST['description'];


// prepare message text
$messageText =	'First Name: '.$ufname."\n".
    'Phone: '.$uphone."\n".
    'Email: '.$umail."\n".
    'Description: '.$description."\n";

// send email
$senderName = "=?UTF-8?B?" . base64_encode($senderName) . "?=";
$messageSubject = "=?UTF-8?B?" . base64_encode($messageSubject) . "?=";
$messageHeaders = "From: " . $senderName . " <" . $senderEmail . ">\r\n"
    . "MIME-Version: 1.0" . "\r\n"
    . "Content-type: text/plain; charset=UTF-8" . "\r\n";

//if (preg_match('/^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,4}$/',$targetEmail,$matches))
foreach ($targetEmail as $val){
    mail($val, $messageSubject, $messageText, $messageHeaders);
}




//========== xml backups lids ================

$today = date("F j, Y, g:i a");

$file = 'sample.csv';
$tofile = "$ufname;$uphone;$umail;$today\n";
$bom = "\xEF\xBB\xBF";
@file_put_contents($file, $bom . $tofile . file_get_contents($file));




//$urlredirect = 'http://www.ronson.co.il/thanks-page.html?Lead=true';
$urlredirect = 'http://campaign.gofmans.co.il/ronson/thanks-page.html?Lead=true';
//$urlredirect = 'http://192.168.89.147/thanks-page.html?Lead=true';
//// redirect
if($redirectToReferer) {
    header("Location: ".$urlredirect);
} else {
    header("Location: ".$redirectURL);
}
?>
