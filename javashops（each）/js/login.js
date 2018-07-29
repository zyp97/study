$(document).ready(function(){
	$(".bigbb").click(function(){
		var user = $("#names").val();
		var pass = $("#pass").val();
		var veirify = $("#chesks").val();
		if(user == ""){
			alert("用户名不能为空！");
		}else if(pass == ""){
			alert("密码不能为空！");
		}else if(veirify == ""){
			alert("请输入验证码!")
		}
	});
	
});
