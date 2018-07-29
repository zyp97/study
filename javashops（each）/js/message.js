$(document).ready(function(){

	
	var name = $("#name").val();
	var time = $("#time").val();
	var address = $("#address").val();
	var xl = $("#xl").val();
	var email = $("#email").val();
	$("#name").bind({
		focus: function() {
			$(".btx").show();
		},
		blur: function() {
			name = $("#name").val();
			if(name == ""){
				$(".btx").show();
			}else{
				$(".btx").hide();
			}
		}
	});
	$("#time").bind({
		focus: function() {
			$(".btx2").show();
		},
		blur: function() {
			time = $("#time").val();
			if(time == ""){
				$(".btx2").show();
			}else{
				$(".btx2").hide();
			}
		}
	});
	$("#address").bind({
		focus: function() {
			$(".btx4").show();
		},
		blur: function() {
			address = $("#address").val();
			if(address == ""){
				$(".btx4").show();
			}else{
				$(".btx4").hide();
			}
		}
	});
	$("#xl").bind({
		focus: function() {
			$(".btx3").show();
		},
		blur: function() {
			xl = $("#xl").val();
			if(xl == ""){
				$(".btx3").show();
			}else{
				$(".btx3").hide();
			}
		}
	});
	$("#email").bind({
		focus: function() {
			$(".btx5").show();
		},
		blur: function() {
			email = $("#email").val();
			if(email == ""){
				$(".btx5").show();
			}else{
				$(".btx5").hide();
			}
		}
	});
	
	$("#vb").click(function(){
		if(name == "" || time == "" || address == "" || xl == "" || email == ""){
			alert("必填项不能为空!");
		}
		
	});
});
