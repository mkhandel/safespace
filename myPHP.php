<?php
class SafeSpaceDB{
  public $first_name = "";
  public $last_name = "";
  public $email = "";
  public $password = "";
  public $safespaceproperties;

  function __construct($first_name, $last_name ,
  $email, $password, $safespaceproperties)
  {
    $this->first_name = $first_name;
    $this->last_name = $last_name;
    $this->email = $email;
    $this->password = $password;
    $this->safespaceproperties = $safespaceproperties;
  }

}

echo 5;


?>

