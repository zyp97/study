$(function() {

  var comno = 1;
  var thisCommoCount = 0;
  

  /* 点击修改商品数量 */
  $("#cbo_contdown").click(function() {
    comno--;
  })

  $("#cbo_contup").click(function() {
    comno++;
  })



  $(".celh_ul li").each(function(i) {
    $(this).click(function() {
      $(".celh_ul li").removeClass("celhli_y");
      $(".cel_body > div").css("display","none"); 

      $(this).addClass("celhli_y");
      $(".celb_" + i).css("display","block");
    })
  })


  $(".pl_cho li").each(function(i) {
    $(this).click(function() {
      $(".pl_cho li").removeClass("cho_y");
      $(".pl_body > div").css("display","none");

      $(this).addClass("cho_y");
      $(".sppl_" + i).css("display","block");
    })
  })



  /* 商品数量加减 */
  $(".cmebo_comu").click(function() {
    thisCommoCount++;
    $("#thiscom_count").attr("value",thisCommoCount);
  })

  $(".cmebo_comd").click(function() {
    if(thisCommoCount > 0) {
      thisCommoCount--;
      $("#thiscom_count").attr("value",thisCommoCount);
    }
  })







})