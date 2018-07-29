$(function() {

  /* 头部搜索框获取焦点改变placeholder样式 */
  $("#mainSearch").focus(function(){
    $(this).attr("placeholder","请输入产品关键字等...");
  }).blur(function(){
    $(this).attr("placeholder","请输入产品关键字，如品牌、型号等");
  });






  /* 所有商品分类鼠标放上显示选择层 */

  $("#headChoose").mouseenter(function() {
    $(".hcBody").css("display","block");
  }).mouseleave(function() {
    $(".hcBody").css("display","none");
  })


  $(".hcbMess").mouseenter(function() {
    $(this).find(".hcbmElse").css("display","block");
  }).mouseleave(function() {
    $(this).find(".hcbmElse").css("display","none");
  });
  


  $(".pnav_select").mouseenter(function() {
    $(this).find(".pnav_chodiv").css("display","block");
  }).mouseleave(function() {
    $(this).find(".pnav_chodiv").css("display","none");
  })


















})