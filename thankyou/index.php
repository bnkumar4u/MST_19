<!doctype html>
<?php 
	$server ="localhost";
	$username ="mst_user";
	$password ="Mstmnit@2019";
	$db ="mst";
	$conn = mysqli_connect($server,$username,$password,$db);
?>
<?php
		$id="";
		if(isset($_POST['submit'])){
			
			$name = mysqli_real_escape_string($conn,strip_tags($_POST['fullname']));
			
			$gender = mysqli_real_escape_string($conn,strip_tags($_POST['Gender']));
			
			$email = mysqli_real_escape_string($conn,strip_tags($_POST['Email']));
			
			$contact_number = mysqli_real_escape_string($conn,strip_tags($_POST['contact_number']));
			
			$college = mysqli_real_escape_string($conn,strip_tags($_POST['College']));
			
			$city = mysqli_real_escape_string($conn,strip_tags($_POST['City']));
			
			$designation = mysqli_real_escape_string($conn,strip_tags($_POST['designation']));
			
			$op_name="";
			$op_contact_number="";
			$op_designation="";
			
			if(isset($_POST['optional']))
			{
				if(isset($_POST['op_name']))
				$op_name = mysqli_real_escape_string($conn,strip_tags($_POST['op_name']));
				if(isset($_POST['op_contact']))
				$op_contact_number = mysqli_real_escape_string($conn,strip_tags($_POST['op_contact']));
				if(isset($_POST['op_designation']))
				$op_designation = mysqli_real_escape_string($conn,strip_tags($_POST['op_designation']));
			}
			
			$game_text = mysqli_real_escape_string($conn,strip_tags($_POST['game_data']));
			
			$myString = $game_text;
			$game = explode(',', $myString);
           // print_r($game);
			
			
			$date = date("y-m-d");
			
			$ins_sql = "INSERT INTO players (
			name,gender,email,contact_number,college,city,designation,op_name,op_contact,op_designation,date,badm_m,badm_f,basket_m,basket_f,chess_m,chess_f,cric_m,foot_m,gym_wl,gym_pl,gym_bp,kab_f,tt_m,tt_f,tennis_m,tennis_f, volly_m, volly_f) VALUES ('$name','$gender','$email','$contact_number','$college','$city','$designation','$op_name','$op_contact_number','$op_designation','$date','$game[0]','$game[1]','$game[2]','$game[3]','$game[4]','$game[5]','$game[6]','$game[7]','$game[8]','$game[9]','$game[10]','$game[11]','$game[12]','$game[13]','$game[14]','$game[15]','$game[16]','$game[17]')" ;
			
		if(mysqli_query($conn, $ins_sql))
		{
			
			$id="Team ID : mst19r".mysqli_insert_id($conn);
			
		}
		else $id= "failure";
		
		
	
//if "email" variable is filled out, send email
	  $sender = "mst.info@mstmnit.in";//sender mail
  
  //Email information
  $admin_email = $email;//receiver mail

  $subject = "MST19 Registration status";
  $message = "
<html>
	<head>
		<title>MST'19 | Malaviya Sports Tournament</title>
		
	</head>
	<body>
	    <p>Thank you for your interest in MST'19. You are now just 1 step away from completion of your registration !</p>
	    <br>
	    <p>Send a mail to <b>virendersingh.sports@mnit.ac.in</b> which has the following things :-</p>
	    <ul>
	        <li>Subject - MST'19 Registration</li>
	        <li>Attachment of your completely filled registration form.</li>
	    </ul>
	    
		<h2>'$id'</h2>
		<p>Registered Teams</p>
		<p>M : male , F : Female.</p>
		<table>
			<tr> 
				<th>Game</th>
				<th>Team size</th>
			</tr>";
			if($game[0]!=0)
			{$message = $message."
				<tr> 
					<td>Badminton M</td>
					<td>'$game[0]'</td>
				</tr>
				";
			}
			if($game[1]!=0)
			{$message = $message."
				<tr> 
					<td>Badminton F</td>
					<td>'$game[1]'</td>
				</tr>
				";
			}
			if($game[2]!=0)
			{$message = $message."
				<tr> 
					<td>Basketball M</td>
					<td>'$game[2]'</td>
				</tr>
				";
			}
			
			if($game[3]!=0)
			{$message = $message."
				<tr> 
					<td>Basketball F</td>
					<td>'$game[3]'</td>
				</tr>
				";
			}
			if($game[4]!=0)
			{$message = $message."
				<tr> 
					<td>Chess M</td>
					<td>'$game[4]'</td>
				</tr>
				";
			}
			if($game[5]!=0)
			{$message = $message."
				<tr> 
					<td>Chess F</td>
					<td>'$game[5]'</td>
				</tr>
				";
			}	
			if($game[6]!=0)
			{$message = $message."
				<tr> 
					<td>Cricket M</td>
					<td>'$game[6]'</td>
				</tr>
				";
			}	
			if($game[7]!=0)
			{$message = $message."
				<tr> 
					<td>Football M</td>
					<td>'$game[7]'</td>
				</tr>
				";
			}
			if($game[8]!=0)
			{$message = $message."
				<tr> 
					<td>Gym W.L. M</td>
					<td>'$game[8]'</td>
				</tr>
				";
			}
			if($game[9]!=0)
			{$message = $message."
				<tr> 
					<td>Gym P.L. M</td>
					<td>'$game[9]'</td>
				</tr>
				";
			}
			if($game[10]!=0)
			{$message = $message."
				<tr> 
					<td>Gym B.P. M</td>
					<td>'$game[10]'</td>
				</tr>
				";
			}
			if($game[11]!=0)
			{$message = $message."
				<tr> 
					<td>Kabaddi F</td>
					<td>'$game[11]'</td>
				</tr>
				";
			}
			if($game[12]!=0)
			{$message = $message."
				<tr> 
					<td>TableTennis M</td>
					<td>'$game[12]'</td>
				</tr>
				";
			}
			if($game[13]!=0)
			{$message = $message."
				<tr> 
					<td>TableTennis F</td>
					<td>'$game[13]'</td>
				</tr>
				";
			}
			if($game[14]!=0)
			{$message = $message."
				<tr> 
					<td>Tennis M</td>
					<td>'$game[14]'</td>
				</tr>
				";
			}
			if($game[15]!=0)
			{$message = $message."
				<tr> 
					<td>Tennis F</td>
					<td>'$game[15]'</td>
				</tr>
				";
			}
			if($game[16]!=0)
			{$message = $message."
				<tr> 
					<td>Vollyball M</td>
					<td>'$game[16]'</td>
				</tr>
				";
			}
			if($game[17]!=0)
			{$message = $message."
				<tr> 
					<td>Vollyball F</td>
					<td>'$game[17]'</td>
				</tr>
				";
			}
			$message = $message."
		</table>
		<h4>Things to submit while attending the event :</h4>
		<ul> 
			<li>No Objection Certificate (NOC)</li>
			<li>College ID Cards</li>
			<li>Printout of registration form needs to be taken and filled with appropriate details (attached below).</li>
		</ul>
		<h4>Payment for registration as follows:</h4>
		<ul>
			<li>Registration fee is to be paid either by  cash/DD on or before 21st February during reporting.</li>
			<li>1000rs/person (if accommodation is needed)</li>
			<li>500rs/person(if accomodation is not needed)</li>
			<li>Caution deposit of 100rs /person has to be deposited through cash(which will be refunded back after event) .</li>
		</ul>
		<h4>Report the details of your arrivals on or before Feb 15th to our team.</h4>
		
		<p>Registration Team details</p>
		<ul>
			<li>Sakshi: 6375588284</li>
			<li>Teja:   8639106097</li>
			<li>Keerti: 6281395751</li>
		</ul>
		<p>Reach us for any queries :</p>
		<p>Organising Secretary Details</p>
		<ul> 
			<li>Harish:  8239118094</li>
			<li>Jahanvi: 9982844505</li>
		</ul>
		<br>
		<a target='_blank' href='https://drive.google.com/open?id=1yVpgSDJ16Ra_8cvrSSUGICnjnUmOTrLG'>Registration Form</a>
		<br><br>
		<a target='_blank' href='https://drive.google.com/open?id=13hExLGqq9dI4fSmv6C8KxCbEmdTeFPA1'>Rules and Regulations</a>

	</body>
</html>
";
  // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From:' . $sender. "\r\n";
  //send email
  mail($admin_email, "$subject", $message,$headers);
}
?>
<html>
<head>
	<title> mst thank you </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="../files/common.css">
	<script src="../files/jquery-3.3.1.slim.min.js"></script>
</head>
<body>
	<div class="bg"></div>
	<nav class="menu">
    <header>Menu <span style="color:black;position:relative;top:-3px;font-weight:normal;">x</span></header>
    <ol>
        <li class="menu-item"><a href="../">Home</a></li>
        <li class="menu-item"><a href="../about_us/">About Us</a></li>
        <li class="menu-item"><a href="../registration/">Register</a></li>
        <li class="menu-item"><a href="../events/">Events</a></li>
        <li class="menu-item"><a href="../gallery/">Gallery</a></li>
	<li class="menu-item"><a href="../team/">Our Team</a></li>
    </ol>
    <footer><button aria-label="Toggle Menu">Toggle</button></footer>
</nav> 

		<a href="../" class="a"><img class="mstlogo" src="../logos/mstlogo.png" alt="malviya sports tournament"></a>
		<br><br><br><br><br>
		<h1 class="h1"><span style="color:green">M</span>alaviya&nbsp<span style="color:green">S</span>ports&nbsp <span style="color:green;">T</span>ournament'19 </h1>
		<h2 class="h2">Annual Sports Fest of MNIT,Jaipur<br>&nbsp(21st-23rd FEB)</h2>
		
		<h2 id="team_id">
			<button id="button"><span>
				<?php echo $id; ?></span>
			</button>
		</h2>
		<h3 class="h3">Thank you</h3>
		<p class="p"><b>You have successfully registered.</b><br>
			<span id="p01">Please check your email for further instructions or visit our website.</span>
			<br><br>
			<a href="https://www.facebook.com/mst.mnit/" target="_blank" class="a"><img class="fb" src="../logos/fb.png" alt="visit to our fb page"></a>
			<a href="https://www.instagram.com/mst.mnit" target="_blank" class="a"><img class="it" src="../logos/it.png" alt="visit to our instagram profile"></a>
			<a href="https://twitter.com/MST_MNIT" target="_blank" class="a"><img class="tw" src="../logos/tw.png" alt="visit to our twitter page"></a>
			<a href="https://www.youtube.com/channel/UCsucE9PcDMvo7DA9MY7hnIg" target="_blank" class="a"><img class="yt" src="../logos/yt.png" alt="visit to our youtube page"></a>
			<embed name="myMusic" src="../music/bgmusic.mp3" type="audio/mp3"
			autostart="false" Hidden="true" loop="true" autostart="true" style="width:0px;height:0px;opacity:0;"></embed>

	<script src="../files/common.js"></script>
		<script src="../files/home.js"></script>
		</body>
		</html>

