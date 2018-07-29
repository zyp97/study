	$(function(){
		var wait=60;
	function time(o){
		if(wait==0){
			o.removeAttribute("disabled");
			o.value="获取验证码";
			wait=60;
		}else{
			o.setAttribute("disabled",true);
			o.value="重新发送("+wait+")";
			wait--;
			setTimeout(function(){
				time(o)
				},1000)
			}
		}
		document.getElementById("nameskl").onclick = function(){
			time(this);
		}
	})

$(document).ready(function(){
	$("#usernames").bind({
		focus: function() {
			$(".btxs1").show();
			$(".ptxs1").hide();
		},
		blur: function() {
			var usernames = $("#usernames").val();
			var reg = /^[\u4e00-\u9fa50-9a-zA-Z_\-]{4,20}$/;
			if(usernames == ""){
				$(".btxs1").show();
				$(".ptxs1").hide();
			}else{
				$(".btxs1").hide();
			}
			if(reg.test(usernames) == false && usernames != ""){
				$(".ptxs1").show();
				$(".btxs1").hide();
			}else{
				$(".ptxs1").hide();
			}
		}
	});
	$("#passwords").bind({
		focus: function() {
			$(".btxs2").show();
			$(".ptxs2").hide();
		},
		blur: function() {
			var passwords = $("#passwords").val();
			var reg2 = /^[a-zA-Z][A-Za-z0-9_]{5,19}$/;
			if(passwords == ""){
				$(".btxs2").show();
				$(".ptxs2").hide();
			}else{
				$(".btxs2").hide();
			}
			if(reg2.test(passwords) == false && passwords != ""){
				$(".ptxs2").show();
				$(".btxs2").hide();
			}
		}
	});
	$("#repassword").bind({
		focus: function() {
			$(".btxs3").show();
			$(".ptxs3").hide();
		},
		blur: function() {
			var repassword = $("#repassword").val();
			var passwords = $("#passwords").val();
			if(repassword == ""){
				$(".btxs3").show();
				$(".ptxs3").hide();
			}else{
				$(".btxs3").hide();
			}
			if(passwords != repassword){
				$(".ptxs3").show();
			
	}
		}
	});
	$("#phone").bind({
			focus: function() {
				$(".btxs4").show();
				$(".ptxs4").hide();
			},
			blur: function() {
				var phone = $("#phone").val();
				var reg4 = /^(13|15|18|17)\d{9}$/;
				if(usernames == ""){
					$(".btxs4").show();
					$(".ptxs4").hide();
				}else{
					$(".btxs4").hide();
				}
				if(reg4.test(phone) == false && phone != ""){
				$(".ptxs4").show();
				$(".btxs4").hide();
			}
			}
		});
	$(".btnseg button").click(function(){
		var usernames = $("#usernames").val();
		var reg = /^[\u4e00-\u9fa50-9a-zA-Z_\-]{4,20}$/;
		var passwords = $("#passwords").val();
		var reg2 = /^[a-zA-Z][A-Za-z0-9_]{5,19}$/;
		var repassword = $("#repassword").val();
		var phone = $("#phone").val();
		var reg4 = /^(13|15|18|17)\d{9}$/;
		if(usernames == "" || passwords == "" || repassword == "" || phone == "" || reg1.test(usernames) == false|| reg2.test(passwords) == false || reg4.test(phone) == false){
			alert("您提交的表单中有无效内容，请检查高亮部分内容.")
		}
	})
})