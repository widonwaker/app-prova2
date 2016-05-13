<?php
if(isset($_POST['nomeUtente']) && isset($_POST['cognomeUtente']) && isset($_POST['emailUtente']) && isset($_POST['pax']) && isset($_POST['dataArrivo']) && isset($_POST['dataPartenza']) && isset($_POST['offerta'])) {

$nome=$_POST['nomeUtente'];
$cognome=$_POST['cognomeUtente'];
$email=$_POST['emailUtente'];
$pax=$_POST['pax'];
$dataArrivo=$_POST['dataArrivo'];
$dataPartenza=$_POST['dataPartenza'];
$offerta=$_POST['offerta'];
$messaggio=$_POST['messaggio'];

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-l\r\n";

$msg = "L'utente <b>$nome $cognome</b> ($email) ha inviato il seguente messaggio: <br><i>$messaggio</i><br>Arrivo: $arrivo<br>Partenza: $partenza<br>Numero persone: $persone<br>Offerta: $offerta";

mail("tuamail@dominio.it","Email inviata dall'app App Prova",$msg,$headers);
echo "true";
exit();
}
?>