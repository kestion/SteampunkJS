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

});