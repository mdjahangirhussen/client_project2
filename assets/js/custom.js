$(document).ready(function () {
    "use strict";
    $(".faq-content-title i").click(function () {
        $(".faq-content-box").slideDown();
        $(".down_icon").hide();
    });
    $(".faq-content-box i").click(function () {
        $(".faq-content-box").slideUp();
        $(".down_icon").show();
    });

    $(".faq-content-title1 i").click(function () {
        $(".faq-content-box2").slideDown();
        $(".down_icon2").hide();
    });
    $(".faq-content-box2 i").click(function () {
        $(".faq-content-box2").slideUp();
        $(".down_icon2").show();
    });

    $(".faq-content-title3 i").click(function () {
        $(".faq-content-box3").slideDown();
        $(".down_icon3").hide();
    });
    $(".faq-content-box3 i").click(function () {
        $(".faq-content-box3").slideUp();
        $(".down_icon3").show();
    });
    $(".faq-content-title4 i").click(function () {
        $(".faq-content-box4").slideDown();
        $(".down_icon4").hide();
    });
    $(".faq-content-box4 i").click(function () {
        $(".faq-content-box4").slideUp();
        $(".down_icon4").show();
    });
    $(".faq-content-title5 i").click(function () {
        $(".faq-content-box5").slideDown();
        $(".down_icon5").hide();
    });
    $(".faq-content-box5 i").click(function () {
        $(".faq-content-box5").slideUp();
        $(".down_icon5").show();
    });
    //-------- 0.9 WoW Js --------
    new WOW().init({});

});