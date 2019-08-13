<!doctype html>
<?php 
	$server ="localhost";
	$username ="mst_user";
	$password ="Mstmnit@2019";
	$db ="mst";
	$conn = mysqli_connect($server,$username,$password,$db);
	$user_pass="mst19technical";
?>
<html>
<head>
	<title>Data Response</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	
	<style>
		th{
			text-shadow:0.75px 0px #a79b94;
			color:#ff5a60;
		}
		td{
			text-shadow:0.7px 0px #a79b94;
			color:#0070f7;
		}
		h2{
			font-size:40px;
			text-shadow:0px 1px white,1px 0px gray;
			
		}
		span{
			font-size:30px;
		}
	</style>
</head>
<body>
	<div class="container-fluid">
	    <div class="jumbotron">
			<h2>Database : <span>Registered students</span></h2> 
			<form class="form-inline" method="post">
			
				<div class="form-group">
					<label>Password</label>
					<input type="password" class="form-control" name="password" value="">
					<input type="submit" name="submit">
				</div>
			</form>
	    </div>
	    <?php 
			if(isset($_POST['submit']))
			{
				if($_POST['password']==$user_pass)
				{?>
		<div class="col-md-12">
	  			<?php
#Retriving data from database
				$sql = "SELECT * FROM players ORDER BY `p_id` DESC";
				$run = mysqli_query($conn,$sql);
		
				//table starting
				?>
				<div class="table-responsive">
					<table class="table table-striped table-bordered table-hover" >
				<?php
				echo "
						<thead> 
							<tr> 
								<th>Team Id</th>
								<th>Name</th>
								<th>Gender</th>
								<th>Email</th>
								<th>Con no.</th>
								<th>College</th>
								<th>City</th>
								<th>Designation</th>
								<th>Op Name</th>
								<th>Op Con no</th>
								<th>Op Designation</th>
								<th>Date</th>
								<th>badm_m</th>
								<th>badm_f</th>
								<th>basket_m</th>
								<th>basket_f</th>
								<th>chess_m</th>
								<th>chess_f</th>
								<th>cric_m</th>
								<th>foot_m</th>
								<th>gym_wl</th>
								<th>gym_pl</th>
								<th>gym_bp</th>
								<th>kab_f</th>
								<th>tt_m</th>
								<th>tt_f</th>
								<th>tennis_m</th>
								<th>tennis_f</th>
								<th>volly_m</th>
								<th>volly_f</th>
							</tr>
						</thead>
						<tbody>
				";
				while($rows = mysqli_fetch_assoc($run))
				{
					echo "
						<tr> 
							<td>mst19r$rows[p_id]</td>
							<td>$rows[name]</td>
							<td>$rows[gender]</td>
							<td>$rows[email]</td>
							<td>$rows[contact_number]</td>
							<td>$rows[college]</td>
							<td>$rows[city]</td>
							<td>$rows[designation]</td>
							<td>$rows[op_name]</td>
							<td>$rows[op_contact]</td>
							<td>$rows[op_designation]</td>
							<td>$rows[date]</td>
							<td>$rows[badm_m]</td>
							<td>$rows[badm_f]</td>
							<td>$rows[basket_m]</td>
							<td>$rows[basket_f]</td>
							<td>$rows[chess_m]</td>
							<td>$rows[chess_f]</td>
							<td>$rows[cric_m]</td>
							<td>$rows[foot_m]</td>
							<td>$rows[gym_wl]</td>
							<td>$rows[gym_pl]</td>
							<td>$rows[gym_bp]</td>
							<td>$rows[kab_f]</td>
							<td>$rows[tt_m]</td>
							<td>$rows[tt_f]</td>
							<td>$rows[tennis_m]</td>
							<td>$rows[tennis_f]</td>
							<td>$rows[volly_m]</td>
							<td>$rows[volly_f]</td>
							
						</tr>
					";
				}
				echo "</tbody></table>
					<br><br>
				</div>";
				//table end
			?>

		</div>
					</div>
					<?php
				}
			
				else{
					echo "<h3 text-align='center'>Wrong Password !</h3>";
				}
			}
		?>

	</div>
</body>
</html>