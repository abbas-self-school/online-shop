$(function (){
    $("#slide1 img:gt(0)").hide();
    $("#next").click(function() {
        $("#slide1 img:first").hide(1).next().show(1).end().appendTo("#slide1");
    });
    $("#prev").click(function() {
        $("#slide1 img:last").prependTo("#slide1").show(1).next().hide(1);
    });
});
/**/
/* animate boxes sliding */
/* Electronics */
$(function (){
    $(".buttons-prev-next1").children("#next").click(function() {
        $(".item7").children(".box4").hide(100).next().hide(200).next().hide(300).next().hide(400).next().next().next().show(100).next().show(200).next().show(300).next().show(400);
    });
});
$(function (){
    $(".buttons-prev-next1").children("#prev").click(function() {
        $(".item7").children(".box4").show(400).next().show(300).next().show(200).next().show(100).next().next().next().hide(100).next().hide(100).next().hide(100).next().hide(100);
    });
});
/* Phone Accessories */
$(function (){
    $(".buttons-prev-next2").children("#next").click(function() {
        $(".item8").children(".box4").hide(100).next().hide(200).next().hide(300).next().hide(400).next().next().next().show(100).next().show(200).next().show(300).next().show(400);
    });
});
$(function (){
    $(".buttons-prev-next2").children("#prev").click(function() {
        $(".item8").children(".box4").show(400).next().show(300).next().show(200).next().show(100).next().next().next().hide(100).next().hide(100).next().hide(100).next().hide(100);
    });
});
/* Home & Outdoor */
$(function (){
    $(".buttons-prev-next3").children("#next").click(function() {
        $(".item9").children(".box4").hide(100).next().hide(200).next().hide(300).next().hide(400).next().next().next().show(100).next().show(200).next().show(300).next().show(400);
    });
});
$(function (){
    $(".buttons-prev-next3").children("#prev").click(function() {
        $(".item9").children(".box4").show(400).next().show(300).next().show(200).next().show(100).next().next().next().hide(100).next().hide(100).next().hide(100).next().hide(100);
    });
});
/* Car Accessories */
$(function (){
    $(".buttons-prev-next4").children("#next").click(function() {
        $(".item10").children(".box4").hide(100).next().hide(200).next().hide(300).next().hide(400).next().next().next().show(100).next().show(200).next().show(300).next().show(400);
    });
});
$(function (){
    $(".buttons-prev-next4").children("#prev").click(function() {
        $(".item10").children(".box4").show(400).next().show(300).next().show(200).next().show(100).next().next().next().hide(100).next().hide(100).next().hide(100).next().hide(100);
    });
});
/* NEW ARRIVALS */
$(function (){
    $(".buttons-prev-next5").children("#next").click(function() {
        $(".item11").children(".box4").hide(100).next().hide(200).next().hide(300).next().hide(400).next().next().next().show(100).next().show(200).next().show(300).next().show(400);
    });
});
$(function (){
    $(".buttons-prev-next5").children("#prev").click(function() {
        $(".item11").children(".box4").show(400).next().show(300).next().show(200).next().show(100).next().next().next().hide(100).next().hide(100).next().hide(100).next().hide(100);
    });
});
/**/
/* animate fb window */
$(function (){
    $(".fb").hover(function() {
        $(this).animate({left:"0px"}, "slow");
    },
    function() {
        $(this).animate({left:"-350px"}, "slow");
    });
});
/* animate tw window */
$(function (){
    $(".tw").hover(function() {
        $(this).animate({left:"0px"}, "slow");
    },
    function() {
        $(this).animate({left:"-350px"}, "slow");
    });
});
/* animate yt window */
$(function (){
    $(".yt").hover(function() {
        $(this).animate({left:"0px"}, "slow");
    },
    function() {
        $(this).animate({left:"-350px"}, "slow");
    });
});
/* animate pay-note window */
$(function (){
    $(".pay-note").hover(function() {
        $(this).animate({right:"0px"}, "slow");
    },
    function() {
        $(this).animate({right:"-350px"}, "slow");
    });
});
/* animate wts window */
$(function (){
    $(".wts").hover(function() {
        $(".wts").children("i").css("display","none").prev().css("display","block");
    },
    function() {
        $(".wts").children("div").css("display","none").next().css("display","block");
    });
});
/**/