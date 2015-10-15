<?php

$s  = 'user.username<=%binh%,user.age>20,user.username:%test%,';
$ss = explode(',',$s);
var_dump($ss);
foreach($ss as $sss){
    preg_match('/(\w+?).(\w+?)(:|<|>|<=|>=)(%?\w+?%?),/', $sss.',', $matches);
    var_dump($matches);
}

echo '<hr/>';
$s  = 'user.username:asc,user.age:desc';
$ss = explode(',',$s);
var_dump($ss);
foreach($ss as $sss){
    preg_match('/(\w+?).(\w+?):(asc|desc),/', $sss.',', $matches);
    var_dump($matches);
}

echo  json_encode('testing 123');