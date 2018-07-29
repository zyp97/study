$(document).ready(function(){
	$(".yx").click(function(){
		$(".sjs").show();
		$(".yxs").hide();
		$(this).css("color" , "#000000");
		$(".sj").css("color" , "#747474");
	});
	$(".sj").click(function(){
		$(".yxs").show();
		$(".sjs").hide();
		$(this).css("color" , "#000000");
		$(".yx").css("color" , "#747474");
	});
});
