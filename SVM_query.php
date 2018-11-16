<?php

define('UPLOAD_DIR', 'test/');
$img = $_POST['img'];
//echo $img;
//echo "<br>";
$img = str_replace('data:image/png;base64,', '', $img);
//echo $img;
//echo "<br>";
$img = str_replace(' ', '+', $img);
//echo $img;
//echo "<br>";
$data = base64_decode($img);
//echo $img;
//echo "<br>";

$UID = uniqid();
$FNAME = "T" . "_" . $UID . '.png';
$file = UPLOAD_DIR . $FNAME;

$success = file_put_contents($file, $data);
//echo $file;
//echo "<br>";
//echo $success;
//echo "<br>";
#print $success ? $file : 'Unable to save the file.';
#echo "\r\n";

echo shell_exec("/usr/bin/python3 /var/www/html/draw/test.py " . $file);

 ?>
