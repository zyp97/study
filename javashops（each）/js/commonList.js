$(function() {

  // var listHei = [];
  var showHei = 0;
  var elseHei = 0;
  var isShow = false;

  /* 商品类型选择 */
  $(".pnavs_line").each(function(i) {
    

    // listHei.push($(this).context.offsetHeight);
    elseHei += $(this).context.offsetHeight;

    if(i < 3) {
      showHei += $(this).context.offsetHeight;
    }
    if(i >= 3) {
      $(this).addClass("pnavs_hideen").css("display","none");

    }

    // console.log(listHei);
    // console.log(elseHei);

  })



  $(".pnav_chomore").click(function() {
    //$(".pnavs_line").css("display","block");
    if(!isShow) {
      $(".pNavsb").animate({"height":elseHei},100);
      setTimeout(function(){
        $(".pnavs_line").css("display","block");
        
      },100);
      $(this).text("收起选项");
      isShow = true;
    }else {
      $(".pnavs_hideen").css("display","none");
      $(".pNavsb").animate({"height":showHei},100);
      $(this).text("查看更多选项");
      isShow = false;
    }
  })

















})