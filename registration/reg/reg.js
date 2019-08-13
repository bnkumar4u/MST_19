//values[badmintonMALE,badmintonFEMALE,basketballMALE,basketballFEMALE,chessMALE,chessFEMALE,cricketMALE,footballMALE,gymWeight,gymPower,gymPhysique,.........]
var values=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cur;
function back(){
document.getElementsByClassName("box")[0].style.backgroundImage="url('reg/"+cur+".jpg')";
}
function badminton(){
	cur=1;
	var i;
	document.getElementById("head").innerHTML="Badminton";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("mteam").innerHTML="";
	document.getElementById("fteam").innerHTML="";
	for(i=1;i<=5;i++){
	document.getElementById("mteam").innerHTML+="<option value="+i+">"+i+"</option>";
	document.getElementById("fteam").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[0]==0){document.getElementsByClassName("chkbx")[0].checked=false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	if(values[1]==0){document.getElementsByClassName("chkbx")[1].checked=false;}
	else{document.getElementsByClassName("chkbx")[1].checked=true;}
	document.getElementById("mteam").value=values[0];
	document.getElementById("fteam").value=values[1];
	back();
}
function basketball(){
	cur=2;
	document.getElementById("head").innerHTML="Basketball";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("mteam").innerHTML="";
	document.getElementById("fteam").innerHTML="";
	for(i=5;i<=12;i++){
	document.getElementById("mteam").innerHTML+="<option value="+i+">"+i+"</option>";
	document.getElementById("fteam").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[2]==0){document.getElementsByClassName("chkbx")[0].checked=false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	if(values[3]==0){document.getElementsByClassName("chkbx")[1].checked=false;}
	else{document.getElementsByClassName("chkbx")[1].checked=true;}
	document.getElementById("mteam").value=values[2];
	document.getElementById("fteam").value=values[3];
	back();
}
function chess(){
	cur=3;
	document.getElementById("head").innerHTML="Chess";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("mteam").innerHTML="";
	document.getElementById("fteam").innerHTML="";
	for(i=1;i<=4;i++){
	document.getElementById("mteam").innerHTML+="<option value="+i+">"+i+"</option>";
	document.getElementById("fteam").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[4]==0){document.getElementsByClassName("chkbx")[0].checked=false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	if(values[5]==0){document.getElementsByClassName("chkbx")[1].checked=false;}
	else{document.getElementsByClassName("chkbx")[1].checked=true;}
	document.getElementById("mteam").value=values[4];
	document.getElementById("fteam").value=values[5];
	back();
}
function cricket(){
	cur=4;
	document.getElementById("head").innerHTML="Cricket";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("mteam").innerHTML="";
	document.getElementsByClassName("right")[0].style.display="none";
	for(i=11;i<=16;i++){
	document.getElementById("mteam").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[6]==0){document.getElementsByClassName("chkbx")[0].checked=false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	document.getElementById("mteam").value=values[6];
	document.getElementsByClassName("left")[0].style.width="450px";
	back();
}
function football(){
	cur=5;
	document.getElementById("head").innerHTML="Football";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("mteam").innerHTML="";
	document.getElementsByClassName("right")[0].style.display="none";
	for(i=7;i<=16;i++){
	document.getElementById("mteam").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[7]==0){document.getElementsByClassName("chkbx")[0].checked=false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	document.getElementById("mteam").value=values[7];
	document.getElementsByClassName("left")[0].style.width="450px";
	back();
}
function gym(){
	cur=6;
	document.getElementById("head").innerHTML="Gym";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("mteam").innerHTML="";
	document.getElementById("fteam").innerHTML="";
	document.getElementsByClassName("frm")[0].innerHTML='<h1 id="head">Gym</h1><div class="left"><input type="checkbox" name="WLift" class="chkbx" onclick="male()"><h3>Weight Lifting</h3>Number of players:<br><br><select id="mteam" class="slct" disabled=true></select></div><div class="middle"><input type="checkbox" name="Plift" class="chkbx" onclick="female()"><h3>Power Lifting</h3>Number of players:<br><br><select id="fteam" class="slct" disabled=true></select></div><div class="right"><input type="checkbox" name="BPh" class="chkbx" onclick="end()"><h3>Best Physique</h3>Number of players:<br><br><select id="end" class="slct" disabled=true></select></div><button class="done" onclick="done()">Done</button><button class="cancel" onclick="cancel()">Cancel</button>';
	document.getElementsByClassName("left")[0].style.width=document.getElementsByClassName("middle")[0].style.width=document.getElementsByClassName("right")[0].style.width="150px";
	for(i=1;i<=8;i++){
	document.getElementById("mteam").innerHTML+="<option value="+i+">"+i+"</option>";
	document.getElementById("fteam").innerHTML+="<option value="+i+">"+i+"</option>";
	document.getElementById("end").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[8]==0){document.getElementsByClassName("chkbx")[0].checked==false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	if(values[9]==0){document.getElementsByClassName("chkbx")[1].checked=false;}
	else{document.getElementsByClassName("chkbx")[1].checked=true;}
	document.getElementById("mteam").value=values[8];
	document.getElementById("fteam").value=values[9];
	if(values[10]==0){document.getElementsByClassName("chkbx")[2].checked=false;}
	else{document.getElementsByClassName("chkbx")[2].checked=true;}
	document.getElementById("end").value=values[10];
	back();
}
function kabaddi(){
	cur=7;
	document.getElementById("head").innerHTML="Kabaddi";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("fteam").innerHTML="";
	document.getElementsByClassName("left")[0].style.display="none";
	for(i=7;i<=16;i++){
	document.getElementById("fteam").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[11]==0){document.getElementsByClassName("chkbx")[0].checked=false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	document.getElementById("fteam").value=values[11];
	document.getElementsByClassName("right")[0].style.width="450px";
	back();
}
function tt(){
	cur=8;
	document.getElementById("head").innerHTML="Table Tennis";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("mteam").innerHTML="";
	document.getElementById("fteam").innerHTML="";
	for(i=1;i<=4;i++){
	document.getElementById("mteam").innerHTML+="<option value="+i+">"+i+"</option>";
	document.getElementById("fteam").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[12]==0){document.getElementsByClassName("chkbx")[0].checked=false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	if(values[13]==0){document.getElementsByClassName("chkbx")[1].checked=false;}
	else{document.getElementsByClassName("chkbx")[1].checked=true;}
	document.getElementById("mteam").value=values[12];
	document.getElementById("fteam").value=values[13];
	back();
}
function tennis(){
	cur=9;
	document.getElementById("head").innerHTML="Tennnis";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("mteam").innerHTML="";
	document.getElementById("fteam").innerHTML="";
	for(i=1;i<=5;i++){
	document.getElementById("mteam").innerHTML+="<option value="+i+">"+i+"</option>";
	document.getElementById("fteam").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[14]==0){document.getElementsByClassName("chkbx")[0].checked=false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	if(values[15]==0){document.getElementsByClassName("chkbx")[1].checked=false;}
	else{document.getElementsByClassName("chkbx")[1].checked=true;}
	document.getElementById("mteam").value=values[14];
	document.getElementById("fteam").value=values[15];
	back();
}
function volleyball(){
	cur=10;
	document.getElementById("head").innerHTML="Volleyball";
	document.getElementsByClassName("box")[0].style.display="block";
	document.getElementById("mteam").innerHTML="";
	document.getElementById("fteam").innerHTML="";
	for(i=4;i<=12;i++){
	document.getElementById("mteam").innerHTML+="<option value="+i+">"+i+"</option>";
	document.getElementById("fteam").innerHTML+="<option value="+i+">"+i+"</option>";
	}
	if(values[16]==0){document.getElementsByClassName("chkbx")[0].checked=false;}
	else{document.getElementsByClassName("chkbx")[0].checked=true;}
	if(values[17]==0){document.getElementsByClassName("chkbx")[1].checked=false;}
	else{document.getElementsByClassName("chkbx")[1].checked=true;}
	document.getElementById("mteam").value=values[16];
	document.getElementById("fteam").value=values[17];
	back();
}

function cancel(){
	document.getElementsByClassName("frm")[0].innerHTML='<h1 id="head">Chess</h1><div class="left"><input type="checkbox" name="Boys Team" class="chkbx" onclick="male()"><h3>Boys Team</h3>Number of players:<br><br><select id="mteam" class="slct" disabled=true></select></div><div class="right"><input type="checkbox" name="Girls Team" class="chkbx" onclick="female()"><h3>Girls Team</h3>Number of players:<br><br><select id="fteam" class="slct" disabled=true></select></div><button class="done" onclick="done()">Done</button><button class="cancel" onclick="cancel()">Cancel</button>';
	document.getElementsByClassName("left")[0].style.display="inline-block";
	document.getElementsByClassName("right")[0].style.display="inline-block";
	document.getElementsByClassName("box")[0].style.display="none";
	document.getElementsByClassName("left")[0].style.width="225px";
	document.getElementsByClassName("right")[0].style.width="225px";
	}
function male(){
	if(document.getElementsByClassName("chkbx")[0].checked==true){document.getElementById("mteam").disabled=false;}
	else{document.getElementById("mteam").disabled=true;}
	}
function female(){

	if(document.getElementsByClassName("chkbx")[1].checked==true){document.getElementById("fteam").disabled=false;}
	else{document.getElementById("fteam").disabled=true;}
}
function end(){
if(document.getElementsByClassName("chkbx")[2].checked==true){document.getElementById("end").disabled=false;}
	else{document.getElementById("end").disabled=true;}
}
function done(){
	switch(cur){
	case 1:
	if(document.getElementsByClassName("chkbx")[0].checked==true){values[0]=document.getElementById("mteam").value;}
	else{values[0]=0;}
	if(document.getElementsByClassName("chkbx")[1].checked==true){values[1]=document.getElementById("fteam").value;}
	else{values[1]=0;}
	if(values[0]!=0||values[1]!=0){document.getElementsByClassName("sports")[0].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[0].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	
	case 2:
	if(document.getElementsByClassName("chkbx")[0].checked==true){values[2]=document.getElementById("mteam").value;}
	else{values[2]=0;}
	if(document.getElementsByClassName("chkbx")[1].checked==true){values[3]=document.getElementById("fteam").value;}
	else{values[3]=0;}
	if(values[2]!=0||values[3]!=0){document.getElementsByClassName("sports")[1].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[1].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	
	case 3:
	if(document.getElementsByClassName("chkbx")[0].checked==true){values[4]=document.getElementById("mteam").value;}
	else{values[4]=0;}
	if(document.getElementsByClassName("chkbx")[1].checked==true){values[5]=document.getElementById("fteam").value;}
	else{values[5]=0;}
	if(values[4]!=0||values[5]!=0){document.getElementsByClassName("sports")[2].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[2].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	
	case 4:
	document.getElementsByClassName("right")[0].style.display="inline-block";
	document.getElementsByClassName("left")[0].style.width="225px";
	if(document.getElementsByClassName("chkbx")[0].checked==true){values[6]=document.getElementById("mteam").value;}
	else{values[6]=0;}
	if(values[6]!=0){document.getElementsByClassName("sports")[3].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[3].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	
	case 5:
	document.getElementsByClassName("right")[0].style.display="inline-block";
	document.getElementsByClassName("left")[0].style.width="225px";
	if(document.getElementsByClassName("chkbx")[0].checked==true){values[7]=document.getElementById("mteam").value;}
	else{values[7]=0;}
	if(values[7]!=0){document.getElementsByClassName("sports")[4].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[4].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	
	case 6:
	if(document.getElementsByClassName("chkbx")[0].checked==true){values[8]=document.getElementById("mteam").value;}
	else{values[8]=0;}
	if(document.getElementsByClassName("chkbx")[1].checked==true){values[9]=document.getElementById("fteam").value;}
	else{values[9]=0;}
	if(document.getElementsByClassName("chkbx")[2].checked==true){values[10]=document.getElementById("end").value;}
	else{values[10]=0;}
	document.getElementsByClassName("frm")[0].innerHTML='<h1 id="head">Chess</h1><div class="left"><input type="checkbox" name="Boys Team" class="chkbx" onclick="male()"><h3>Boys Team</h3>Number of players:<br><br><select id="mteam" class="slct" disabled=true></select></div><div class="right"><input type="checkbox" name="Girls Team" class="chkbx" onclick="female()"><h3>Girls Team</h3>Number of players:<br><br><select id="fteam" class="slct" disabled=true></select></div><button class="done" onclick="done()">Done</button><button class="cancel" onclick="cancel()">Cancel</button>';
	document.getElementsByClassName("left")[0].style.display="inline-block";
	document.getElementsByClassName("right")[0].style.display="inline-block";
	document.getElementsByClassName("box")[0].style.display="none";
	document.getElementsByClassName("left")[0].style.width="225px";
	document.getElementsByClassName("right")[0].style.width="225px";
	if(values[8]!=0||values[9]!=0||values[10]!=0){document.getElementsByClassName("sports")[5].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[5].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	
	case 7:
	document.getElementsByClassName("left")[0].style.display="inline-block";
	document.getElementsByClassName("right")[0].style.width="225px";
	if(document.getElementsByClassName("chkbx")[1].checked==true){values[11]=document.getElementById("fteam").value;}
	else{values[11]=0;}
	if(values[11]!=0){document.getElementsByClassName("sports")[6].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[6].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	
	case 8:
	if(document.getElementsByClassName("chkbx")[0].checked==true){values[12]=document.getElementById("mteam").value;}
	else{values[12]=0;}
	if(document.getElementsByClassName("chkbx")[1].checked==true){values[13]=document.getElementById("fteam").value;}
	else{values[13]=0;}
	if(values[12]!=0||values[13]!=0){document.getElementsByClassName("sports")[7].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[7].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	
	case 9:
	if(document.getElementsByClassName("chkbx")[0].checked==true){values[14]=document.getElementById("mteam").value;}
	else{values[14]=0;}
	if(document.getElementsByClassName("chkbx")[1].checked==true){values[15]=document.getElementById("fteam").value;}
	else{values[15]=0;}
	if(values[14]!=0||values[15]!=0){document.getElementsByClassName("sports")[8].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[8].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	
	case 10:
	if(document.getElementsByClassName("chkbx")[0].checked==true){values[16]=document.getElementById("mteam").value;}
	else{values[16]=0;}
	if(document.getElementsByClassName("chkbx")[1].checked==true){values[17]=document.getElementById("fteam").value;}
	else{values[17]=0;}
	if(values[16]!=0||values[17]!=0){document.getElementsByClassName("sports")[9].style.backgroundColor="rgba(0,204,230,0.6)";}
	else{document.getElementsByClassName("sports")[9].style.backgroundColor="rgba(255,255,255,0.4)";}
	break;
	}
	document.getElementsByClassName("box")[0].style.display="none";
	document.getElementById('game_data').value=values;
	}
	$(document).ready(function(){
		
		document.getElementById('game_data').value=values;

		document.getElementById('op_name').style.display="none";
		document.getElementById('op_contact').style.display="none";
		document.getElementById('op_designation').style.display="none";
		
		$('#optional').click(function(){
			if($(this).is(":checked")){
                document.getElementById('op_name').style.display="inline";
				document.getElementById('op_contact').style.display="inline";
				document.getElementById('op_designation').style.display="inline";
				document.getElementById('op_name').required=true;
				document.getElementById('op_contact').required=true;
				document.getElementById('op_designation').required=true;
            }else{
				document.getElementById('op_name').style.display="none";
				document.getElementById('op_contact').style.display="none";
				document.getElementById('op_designation').style.display="none";
				document.getElementById('op_name').required=false;
				document.getElementById('op_contact').required=false;
				document.getElementById('op_designation').required=false;
			}
		});
	});