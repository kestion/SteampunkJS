$(document).ready(function(){

$("#man_insect").click(function() {
	$('#default').hide();
	$('#entry_tower').hide();
	$('#entry_bird').hide();
	$('#entry_insect').show();
});

$("#man_tower").click(function() {
	$('#default').hide();
	$('#entry_insect').hide();
	$('#entry_bird').hide();
	$('#entry_tower').show();
});

$("#man_bird").click(function() {
	$('#default').hide();
	$('#entry_insect').hide();
	$('#entry_tower').hide();
	$('#entry_bird').show();
});

$("#man_cute").click(function() {
	$('#default').hide();
	$('#entry_spider').hide();
	$('#entry_android').hide();
	$('#entry_cute').show();
});

$("#man_spider").click(function() {
	$('#default').hide();
	$('#entry_cute').hide();
	$('#entry_android').hide();
	$('#entry_spider').show();
});

$("#man_android").click(function() {
	$('#default').hide();
	$('#entry_cute').hide();
	$('#entry_spider').hide();
	$('#entry_android').show();
});

var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
 // Le reste du script ici...
var ctx = c.getContext("2d");
ctx.beginPath();      // Début du chemin
ctx.moveTo(0,125);    // Le tracé part du point 50,50
ctx.lineTo(1700,125);   // Puis on trace jusqu'à 50,200
ctx.moveTo(0,250);    // Le tracé part du point 50,50
ctx.lineTo(1700,250);   // Puis on trace jusqu'à 50,200
ctx.moveTo(0,375);    // Le tracé part du point 50,50
ctx.lineTo(1700,375);   // Puis on trace jusqu'à 50,200
ctx.strokeStyle = "gainsboro";
ctx.fillStyle = "red";
ctx.closePath();      // Fermeture du chemin (facultative)ctx.stroke()
ctx.stroke();


ctx.beginPath();      // Début du chemin
ctx.moveTo(170,0);    // Le tracé part du point 50,50
ctx.lineTo(170,500);   // Puis on trace jusqu'à 50,200
ctx.moveTo(340,0);    // Le tracé part du point 50,50
ctx.lineTo(340,500);   // Puis on trace jusqu'à 50,200
ctx.moveTo(510,0);    // Le tracé part du point 50,50
ctx.lineTo(510,500);   // Puis on trace jusqu'à 50,200
ctx.moveTo(680,0);    // Le tracé part du point 50,50
ctx.lineTo(680,500);   // Puis on trace jusqu'à 50,200
ctx.moveTo(850,0);    // Le tracé part du point 50,50
ctx.lineTo(850,500);   // Puis on trace jusqu'à 50,200
ctx.moveTo(1020,0);    // Le tracé part du point 50,50
ctx.lineTo(1020,500);   // Puis on trace jusqu'à 50,200
ctx.moveTo(1190,0);    // Le tracé part du point 50,50
ctx.lineTo(1190,500);   // Puis on trace jusqu'à 50,200
ctx.moveTo(1360,0);    // Le tracé part du point 50,50
ctx.lineTo(1360,500);   // Puis on trace jusqu'à 50,200
ctx.moveTo(1530,0);    // Le tracé part du point 50,50
ctx.lineTo(1530,500);   // Puis on trace jusqu'à 50,200
ctx.strokeStyle = "gray";
ctx.closePath();      // Fermeture du chemin (facultative)ctx.stroke()
ctx.stroke();

});