//  网站首页JS

$(function() {

    var tid = 0 ;
    // 首页轮播
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: true,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }

    })


    /* 首页商品列表点击切换类型 */
    $(".itbrHead li").mouseenter(function() {
      //console.log(i);
      $(this).parent().find("li").addClass("itbrh_n").removeClass("itbrh_y");
      $(this).removeClass("itbrh_n").addClass("itbrh_y");

      $(this).parent().parent().find(".itbrbs").css("display","none");
      tid = $(this).attr("id");
      // //console.log(tid);

      $(".itbrb_" + tid).css("display","block");
      // //console.log($(".itbrb_" + tid));

    })
});
$.ajax({
    'url':'http://192.168.11.114:8080/web/index',
    'type':'GET',
    'data':'',
    'dataType':'json',
    beforeSend:function () {
        //alert("请稍后")
    },
    success:function (JSON) {
        callback(JSON)
    },
    error:function () {
        alert("请求失败")
    }
});
function callback(json) {
    $.each(json,function (i) {
       $('.hcBody').append(
           "<div class='hcbMess'>"+
           "<div class='hcbMBody'>"+
           "<div class='hcbmbText'>"+
           "<div class='hcbmbtTit'>"+
            "<a href=''> "
             +json[i].sclassification.name+
           "<a>"+
           "</div>"+
           "<div class='hcbmbtBody str'>"+
           "<a href='#'>"
           +json[i].sccationTypeVo[0].sclassification.name+
           "</a>"+
           "<a href='#'>"
           +json[i].sccationTypeVo[0].sccationTypeVo[0].sclassification.name+
           "</a>"+
           "</div>"+
           "</div>"+
           "<div class='hcbmbPic'>"+"</div>"+
           "</div>"+
           "<div class='hcbmElse'>"+
           "<div class='hcbmeLine'>"+
            "<div class='hcbmelType'>"+
           "<a href='#'>"
                   +json[i].sccationTypeVo[0].sclassification.name+
           "</a>"+
           "<a href=''>"+
                     +json[i].sccationTypeVo[0].sclassification.name+
                  "</a>"+
           "</div>"+
           "<ul class='hcbmelList str'>"+
                "<li>"+
                        +json[i].sccationTypeVo[0].sccationTypeVo[0].sclassification.name+
                "</li>"+
           "</ul>"+
           "</div>"+
           "<div class='hcbmeLine'>"+
           "<div class='hcbmelType'>"+
                   "<a href=''>"+
                         +json[i].sccationTypeVo[0].sccationTypeVo[0].sclassification.name+
                   "</a>"+
           "</div>"+
           "<ul class='hcbmelList str'>"+
                   "<li>"+
                        +json[i].sccationTypeVo[0].sccationTypeVo[0].sclassification.name+
                   "</li>"+
           "</ul>"+
           "</div>"+
           "</div>"+
           "</div>"
       )
    })
}
