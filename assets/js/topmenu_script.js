$(document).ready(function () {
  var path = window.location.pathname;
  var depth = path.split("/").length - 2; 
  var prefix = ""; 

  if (depth > 1) {
    prefix = "../".repeat(depth - 1);
  } else {
    prefix = "./";
  }

  var imgPath = prefix + "assets/img/common/";

  $(".sh_nav")
    .mouseenter(function () {
      $("#shGnb").addClass("on");
      $("#shGnb:not(.fix) .sh_logo img").attr(
        "src",
        imgPath + "logo_luxury-interior.svg"
      );
      $(".sh_lnb_s").fadeIn(200);
      $(".sh_lnb_bg").fadeIn(200);
    })
    .mouseleave(function () {
      $("#shGnb").removeClass("on");
      $("#shGnb:not(.fix) .sh_logo img").attr(
        "src",
        imgPath + "logo_w_luxury-interior.svg"
      );
      $(".sh_lnb_s").stop().fadeOut(200);
      $(".sh_lnb_bg").stop().fadeOut(200);
    });

  $(window).on("scroll", function () {

    if ($(window).scrollTop() > 50) {
      $("#shGnb.main").addClass("fix");
      $("#shGnb .sh_logo img").attr(
        "src",
        imgPath + "logo_luxury-interior.svg"
      );
    } else {
      $("#shGnb.main").removeClass("fix");
      $("#shGnb .sh_logo img").attr(
        "src",
        imgPath + "logo_w_luxury-interior.svg"
      );
    }
    return false;
  });

  /* 반응형 [s] */
  $("#m_navBtn").click(function () {
    m++;
    if (m % 2 == 1) {
      $("#m_navBtn").addClass("on");
      $("#navWrap").fadeIn(300).addClass("on");
    } else {
      navClose();
    }
  });
  $("#topmenuM .m_bmenu").click(function () {
    $(".m_smenu").not($(this).next()).slideUp(200);
    $(".m_bmenu").removeClass("on");
    $(this).addClass("on");
    $(this).next().slideDown(200);
  });

  m = 0;
  function navClose() {
    $("#m_navBtn").removeClass("on");
    $("#navWrap").fadeOut(300).removeClass("on");
  }
  /* 반응형 [e] */
});
