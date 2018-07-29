/**
 * Created by Administrator on 2018/6/28.
 */
$(document).ready(function(){
    //单击全选
    $("#select_all").click(function(){
        var subtotal=0;//商品总价
        var value1=$("#select_all").val();
        if(value1==1){
            // alert("true");0 true 1false
            $("#select_all").val("0");
            $("input[name=product_id]").prop("checked",true);

            $(".itemTotal span").each(function(i){
                subtotal+=parseFloat($(this).text());
            })
        }else{
            $("#select_all").val("1");
            $("input[name=product_id]").prop("checked",false);
        }
        calculateTotalPrice(2,parseFloat(subtotal));
    });
    //单击商品前的复选框
    $("input[name=product_id]").click(function(){
        var i1=true;//全选为true
        var subtotal=0;//商品小计
        $("input[name=product_id]").each(function(i){
            if(!$(this).is(":checked")){
                i1=false;
            }else{
                //钩中时触发计算总价事件
                var total=$(this).parent().siblings(".itemTotal").find("span").text();
                subtotal+=parseFloat(total);
            }
        });
        calculateTotalPrice(1,parseFloat(subtotal));
        if(i1){
            $("#select_all").val("0");
            $("#select_all").prop("checked",true);
        }else{
            $("#select_all").val("1");
            $("#select_all").prop("checked",false);
        }
    });
    //点击加号
    $(".increase").click(function(){
        var value1=parseInt($(this).prev().val())+1;
        $(this).prev().val(value1);//设置文本框数字
        var number1=parseFloat($(this).parent().parent().prev().find("span").text());//获得优惠价格
        $(this).parent().parent().siblings(".itemTotal").find("span").text(value1*number1);//设置小计价格
        // var number2=$(this).parent().parent().siblings(".itemTotal").find("span").text();//获得小计价格
        var true1=$(this).parent().parent().siblings("td").find("input").is(":checked");
        if(true1){//如果多选框是选中执行
            calculateTotalPrice(3,parseFloat(number1));
        }
    });
    //点击减号
    $(".decrease").click(function(){
        var value1=parseInt($(this).next().val())-1;
        if(value1<1){
            value1=1;
        }else{
            $(this).next().val(value1);//设置文本框数字
            var number1=parseFloat($(this).parent().parent().prev().find("span").text());//获得优惠价格
            $(this).parent().parent().siblings(".itemTotal").find("span").text(value1*number1);//设置小计价格
            var true1=$(this).parent().parent().siblings("td").find("input").is(":checked");
            if(true1){//如果多选框是选中执行
                calculateTotalPrice(4,parseFloat(number1));
            }
        }
    });

    //计算商品总价事件
    calculateTotalPrice=function(i, price){
        switch(i){
            case 1:
                //选中单选框触发
                $("#commodityPrice [name=price]").text(parseFloat(price));
                break;//跳出switch语句
            case 2:
                //全选执行
                $("#commodityPrice [name=price]").text(parseFloat(price));
                break;//跳出switch语句
            case 3:
                //单击加好
                var number1=parseFloat($("#commodityPrice [name=price]").text());
                $("#commodityPrice [name=price]").text(parseFloat(number1+price));
                break;
            case 4:
                //单击减号
                var number1=parseFloat($("#commodityPrice [name=price]").text());
                $("#commodityPrice [name=price]").text(parseFloat(number1-price));
                break;
        }
    };
});