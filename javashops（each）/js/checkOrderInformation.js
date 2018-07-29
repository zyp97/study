/**
 * Created by Administrator on 2018/6/26.
 */
$(document).ready(function(){
    // 收货人信息的操作显示
    $("#address_list>li").mouseenter(mouseenter_li=function(){
        var index=$("#address_list>li").index(this);
        $("#address_list>li:eq("+index+")").find(".operate-li-ckt-info").addClass("show");
    });
    $("#address_list>li").mouseleave(mouseleave_li=function(){
        var index=$("#address_list>li").index(this);
        $("#address_list>li:eq("+index+")").find(".operate-li-ckt-info").removeClass("show");
    });
    // 收起地址
    $("#cutOut").click(function(){
        if($(this).attr("name")==0){//收起地址
            $(this).text("更多地址");
            $(this).attr("name","1");
            $("#vipNumber").css("height","36px");
        }else{
            $(this).attr("name","0");
            $(this).text("收起地址");
            var i=$("#vipNumber ul li").length;
            $("#vipNumber").css("height",i*36+"px");
        }
    });
    // 单击修改时
    $("#checkoutform .box .amend").click(function(){
        $(this).css("display","none");
        var index=$("#checkoutform .box .amend").index(this)+1;
        $("#checkoutform .box:eq("+index+") .box_d1").css("display","none");
        $("#checkoutform .box:eq("+index+") .box_d2").css("display","block");
    });
    // 单击确认付款方式
    $("#checkoutform .box input[type=button]").click(function(){
        var text2="";
        var index=$("#checkoutform .box input[type=button]").index(this)+1;
        $("#checkoutform .box:eq("+index+") .box_d2 label").each(function(i){
            var true1=$("#checkoutform .box:eq("+index+") .box_d2 label").eq(i).find("input[type=radio]").is(":checked");
            if(true1){
                var text1=$(this).find("p").text();
                if(text2==""){
                    text2=text1;
                }else{
                    text2 =text2+"&nbsp;&nbsp;"+text1;
                }
                $("#checkoutform .box:eq("+index+") .box_d1 .boxd1_s1 i").html(text2);
            }
        });
        $("#checkoutform .box:eq("+index+") .box_d1").css("display","block");
        $("#checkoutform .box:eq("+index+") .box_d2").css("display","none");
        $("#checkoutform .box:eq("+index+") .amend").css("display","inline-block");

        //如果按钮是”保存发票信息“触发事件
        if($(this).attr("name")=="保存发票信息"&&text2!==""){
            biilPreserve();
        }
    });
    biilPreserve=function(){
        $("#color_text1").css("display","inline-block");
    }
    //单击取消发票
    $("#color_text1").click(function(){
       $(this).css("display","none");
       $(this).prev().text("无需发票");
    });
    //单击新增单位发票
    $("#new1").click(function(){
       $(this).css("display","none");
       $(this).next().css("display","inline-block");
       $("#bill_ul2").css("display","block");
    });
    //单击新增单位发票中的保存
    $("#new1").next().find("a").click(function(){
       $(this).parent().css("display","none");
       $(this).parent().prev().css("display","inline-block");
        $("#bill_ul2").css("display","none");
    });
    //单击订单备注
    $("#remark .show1").click(function(){
        if($(this).attr("name")==0){
            $(this).attr("name","1");
            $("#remark .remark_show").css("display","none");
            $("#remark .remark_d1").css("display","block");
        }else{
            $(this).attr("name","0");
            $("#remark .remark_show").css("display","block");
            $("#remark .remark_d1").css("display","none");
        }
    });
    //单击保存备注
    $("#remark .remark_d1 input[type=button]").click(function(){
       var value_text=$("#remark .remark_d1 input[type=text]").val();
        $("#remark .remark_show").text(value_text);
        $("#remark .remark_show").css("display","inline-block");
        $("#remark .remark_d1").css("display","none");
        $("#remark .show1").attr("name","0");
    });
    //单击确认结算
    $("#createBtn").click(function(){
        $("#form_show").css("display","block");
    });

    // <!-- 新增地址隐藏显示内容 -->
    //单击地区名
    $("#cilckArea a").click(function(){
        var index=$("#cilckArea a").index(this);
        var text=$(this).text();
        $("#regionalSelection").val(text);
        $("#regionalSelection").removeAttr("style");
        $("#receivingArea").css("display","none");
    });
    //单击收货地区的下箭头
    $("#regionalSelection").parent().click(function(){
        if($(this).attr("key")==1){
            $(this).attr("key","0")
           $(this).find("input").css("border-bottom","#fff");
           $("#receivingArea").css("display",'block');
        }else{
            $(this).attr("key","1");
            $(this).find("input").removeAttr("style");
            $("#receivingArea").removeAttr("style");
        }
    });
    //地址别名后的框框
    $("#addressAlias a").click(function(){
        var index=$("#addressAlias a").index(this);
        var text1=$(this).text();
        $(this).parent().prev().val(text1);
    });
    // 保存地址
    $("#preserveAddress").click(function(){
        var text1=$("#newReceiver .input_length1").val();//获取收货人信息
        var text2=$("#newReceiver .input_length2").val();//获取收货地区信息
        if(text2=="-- 请选择 --"){
            text2="";
        }
        var text3=$("#newReceiver .input_length3").val();//获取详细地址信息
        var text4=$("#newReceiver .input_length4").val();//获取手机号信息
        var text5=$("#newReceiver .input_length5").val();//获取地址别名
        // alert("收货人："+text1+"\n收货地区："+text2+"\n详细信息："+text3+"\n手机号："+text4+"\n地址别名："+text5)
        if($("#checkbox1").is(":checked")){//作为默认收货地址
            var text6="<li class='li-ckt-info selected'> <div class='ckt-checkbox info selected'><span>"+text1+"</span></div><div class='name-li-ckt-info'>"+text1+"</div><div class='address-li-ckt-info'>"+text2+" "+text3+"</div><div class='mobile-li-ckt-info'>"+text4+"</div> <div class='default-li-ckt-info'>默认地址</div> <div class='operate-li-ckt-info'> <a href='javascript: void(0);' class='edit' address_id='1'>编辑</a> </div> </li>";
            $("#address_list .default-li-ckt-info").remove().next().html();//.html("<div class='operate-li-ckt-info'><a href='javascript: void(0);' class='set' address_id='3'>设置为默认</a><a href='javascript: void(0);' class='edit' address_id='3'>编辑</a><a href='javascript: void(0);' class='delete' address_id='3'>删除</a></div>");
            $("#address_list").prepend(text6);
        }else{
            var  text6="<li class='li-ckt-info'><div class='ckt-checkbox info'><span>"+text1+"</span></div><div class='name-li-ckt-info'>"+text1+"</div><div class='address-li-ckt-info'>"+text2+" "+text3+"</div><div class='mobile-li-ckt-info'>"+text4+"</div><div class='operate-li-ckt-info'><a href='javascript: void(0);' class='set' address_id='3'>设置为默认</a><a href='javascript: void(0);' class='edit' address_id='3'>编辑</a><a href='javascript: void(0);' class='delete' address_id='3'>删除</a></div></li>";
            $("#address_list").prepend(text6);//.bind({"mouseenter":mouseenter_li,"mouseleave":mouseleave_li});//前置内容
        }
        $("#checkout-address-append").css("display","none");
    });
    //新建收货地址
    $("#newDizhi1").click(function(){
        $("#checkout-address-append").css("display","block");
    });
});