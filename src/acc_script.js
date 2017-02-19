$(document).ready(function(){
	var note = new Array(10);
	var nbr_note = 0;
	var full = false;
	$("#send").prop("disabled", true);
	$("#note").on("input", function(){
		if($("#note").val() == 0){
			$("#note_show").text("");
			$("#send").prop("disabled", true);
		}
		else{
			$("#note_show").text($("#note").val());
			$("#send").prop("disabled", false);
		}
	});
	$("#send").click(function(){
		if(nbr_note >= 10){
			full = true;
			nbr_note = 0;
		}
		note[nbr_note] = $("#note").val();
		nbr_note ++;
	});
	$("#avg_calc").click(function(){
		var moyenne = 0;
		for(var i=0; i<10; i++){
			if(!isNaN(note[i])){
				moyenne += parseInt(note[i]);
			}
		}
		if(full){
			moyenne = moyenne/10;
		}
		else{
			moyenne = moyenne/nbr_note;
		}
		$("#avg_show").text(moyenne);
	});
});