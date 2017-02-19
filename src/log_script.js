$(document).ready(function(){
	$("#log_send").prop("disabled", true);
	$("input").on("input", function(){
		champ_vide();
	});
	$("#log_send").click(function(){
		envoyer();
	});
	$("#inscr").click(function(){
		$("#sign_in").show();
		$("#inscr").hide();
		champ_vide();
	});
	$("#sign_disp_pass").change(function(){
		if($(this).prop("checked")){
			$("#sign_pass").prop("type", "text");
			$("#sign_pass_conf").prop("type", "text");
			$("#sign_pass").css("color", "blue");
			$("#sign_pass_conf").css("color", "blue");
		}
		else{
			$("#sign_pass").prop("type", "password");
			$("#sign_pass_conf").prop("type", "password");
			$("#sign_pass").css("color", "black");
			$("#sign_pass_conf").css("color", "black");
		}
	})
});

function envoyer(){
    var tab = {identifiant: $("#log_id").val(), mdp: $("#log_pass").val()};
    $.ajax({	
		type:"POST",	
		data:JSON.stringify(tab),
		dataType:"json",
		contentType:"application/json",
		url:'/confirm',
		processData: false,
		success: function(res){
			console.log(res.redirect);
		}
	});
}

function champ_vide(){
	var log_vide = false;
	if($("#log_id").val() == ""){
		log_vide = true;
	}
	if($("#log_pass").val() == ""){
		log_vide = true;
	}
	if(log_vide){
		$("#log_send").prop("disabled", true);
	}
	else{
		$("#log_send").prop("disabled", false);
	}

	$("#sign_fullname").val($("#sign_civstate").val()+" "+$("#sign_lastname").val()+" "+$("#sign_firstname").val());
	var sign_vide = false;
	if($("#sign_lastname").val()==""){
		$("#sign_lnlab").css("color", "red");
		sign_vide = true;
	}
	else{
		$("#sign_lnlab").css("color", "black");
	}
	if($("#sign_firstname").val()==""){
		$("#sign_fnlab").css("color", "red");
		sign_vide = true;
	}
	else{
		$("#sign_fnlab").css("color", "black");
	}
	if($("#sign_logname").val()==""){
		$("#sign_lognamelab").css("color", "red");
		sign_vide = true;
	}
	else{
		$("#sign_lognamelab").css("color", "black");
	}
	if($("#sign_pass").val()==""){
		$("#sign_plab").css("color", "red");
		sign_vide = true;
	}
	else{
		$("#sign_plab").css("color", "black");
	}
	if($("#sign_pass_conf").val()==""){
		$("#sign_pclab").css("color", "red");
		sign_vide = true;
	}
	else if($("#sign_pass").val()!=$("#sign_pass_conf").val()){
		$("#sign_pclab").css("color", "purple");
		sign_vide = true;
	}
	else{
		$("#sign_pclab").css("color", "black");
	}
	if(sign_vide){
		$("#sign_send").prop("disabled", true);
	}
	else{
		$("#sign_send").prop("disabled", false);
	}
}