/**
 * Created by Administrator on 2018/7/2.
 */
$(document).ready(function(){
   $("#deploy b").click(function(){
       if($(this).attr("rel")=="close"){
           $("#deploy .cashier-order-inside").css("height","auto");
           $(this).attr("rel","show");
           $(this).text("收起 -");
       }else{
           $("#deploy .cashier-order-inside").removeAttr("style");
           $(this).attr("rel","close");
           $(this).text("展开 +");
       }
   }) ;
    $(".cashier-pay-list li").click(function() {
        //切换选中态
        $(".cashier-pay-list li").removeClass("selected");
        $(this).addClass("selected");
        var payWay = $(this).attr("rel");
        $(".cashier-pay .same-pay-way").hide();
        $("#yes1").css("display","none");
        $("."+payWay+"-pay").show();
        $(".cashier-pay").css("border","1px solid #e1e1e1");
    });
});