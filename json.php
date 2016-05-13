<?php

include "db.php";  
$data=array();  
$q=mysqli_query($conn, "select * from `user`");  
while ($row=mysqli_fetch_object($q))
{   
$data[]=$row;  
} 

echo json_encode($data);



?>
