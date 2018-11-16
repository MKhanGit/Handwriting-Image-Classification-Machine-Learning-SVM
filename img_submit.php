<?php

define('UPLOAD_DIR', 'submissions/');
$img = $_POST['img'];
$label = $_POST['digit'];
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
$file = UPLOAD_DIR . $label . "_" . uniqid() . '.png';
$success = file_put_contents($file, $data);
//echo $file;
//echo "<br>";
//echo $success;
//echo "<br>";
print $success ? $file : 'Unable to save the file.';
echo "\r\nOK";
 ?>
