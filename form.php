<?php
	$facultyid = $_POST['facultyid'];
	$Name = $_POST['Name'];
	$Department = $_POST['department'];
	$designation =$_POST['designation'];
	$totalexperience =$_POST['totalexperience'];
	$dob=$_POST['dob'];
	$doj=$_POST['doj'];
	$mobileno=$_POST['mobileno'];
	$email=$_POST['email'];
	$password=$_POST['password'];







	// Database connection
	$conn = new mysqli('localhost','root','','database123');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into form1_details(facultyid,Name,department,designation,totalexperience,dob,doj,mobileno,email,password) values(?,?,?,?,?,?,?,?,?,?)");
		$stmt->bind_param("ssssississ", $facultyid, $Name,$Department,$designation,$totalexperience,$dob,$doj,$mobileno,$email,$password);
		$execval = $stmt->execute();
		echo $execval;  
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>