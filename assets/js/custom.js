$(document).ready(function () {
    "use strict";
    $(".showd").click(function () {
        $("#collapseOne").slideDown();
        $(".showd").hide();
    });
    $(".none").click(function () {
        $("#collapseOne").slideUp();
        $(".showd").show();
    });
    $(".showd2").click(function () {
        $("#collapsetwo").slideDown();
        $(".showd2").hide();
    });
    $(".none2").click(function () {
        $("#collapsetwo").slideUp();
        $(".showd2").show();
    });

    $(".showd3").click(function () {
        $("#collapsethree").slideDown();
        $(".showd3").hide();
    });
    $(".none3").click(function () {
        $("#collapsethree").slideUp();
        $(".showd3").show();
    });
    $(".showd4").click(function () {
        $("#collapsefour").slideDown();
        $(".showd4").hide();
    });
    $(".none4").click(function () {
        $("#collapsefour").slideUp();
        $(".showd4").show();
    });
    $(".showd5").click(function () {
        $("#collapsefive").slideDown();
        $(".showd5").hide();
    });
    $(".none5").click(function () {
        $("#collapsefive").slideUp();
        $(".showd5").show();
    });

    $(function () {
        //adding a new class on button element
        $(".showd").on('click', function () {
            $(".card_header_one").addClass('clicked');
        });
        $(".none").on('click', function () {
            $(".card_header_one").removeClass('clicked');
        });

    });
    $(function () {
        //adding a new class on button element
        $(".showd2").on('click', function () {
            $(".card_header_two").addClass('clicked');
        });
        $(".none2").on('click', function () {
            $(".card_header_two").removeClass('clicked');
        });

    });
    $(function () {
        //adding a new class on button element
        $(".showd3").on('click', function () {
            $(".card_header_three").addClass('clicked');
        });
        $(".none3").on('click', function () {
            $(".card_header_three").removeClass('clicked');
        });

    });
    $(function () {
        //adding a new class on button element
        $(".showd4").on('click', function () {
            $(".card_header_four").addClass('clicked');
        });
        $(".none4").on('click', function () {
            $(".card_header_four").removeClass('clicked');
        });

    });
    $(function () {
        //adding a new class on button element
        $(".showd5").on('click', function () {
            $(".card_header_five").addClass('clicked');
        });
        $(".none5").on('click', function () {
            $(".card_header_five").removeClass('clicked');
        });

    });

    $(".repay_content_one").on('click', function () {
        $(".repay_content_one , .repay_content_one span i").addClass('repay_content_bg , icon_active');
        $(".repay_content_two , .repay_content_two span i").removeClass('repay_content_bg_active , icon_active');
    });

    $(".repay_content_two").on('click', function () {
        $(".repay_content_one , .repay_content_one span i").removeClass('repay_content_bg , icon_active');
        $(".repay_content_two , .repay_content_two span i").addClass('repay_content_bg_active , icon_active');
    });



    $(".repay_content2").on('click', function () {
        $(".repay_content1 , .repay_content3 , .repay_content1 span i , .repay_content3 span i").removeClass('rcb_active , icon_active');
        $(".repay_content2 , .repay_content2 span i").addClass('rcb_active , icon_active');
    });

    $(".repay_content3").on('click', function () {
        $(".repay_content1 , .repay_content2 , .repay_content1 span i , .repay_content2 span i").removeClass('rcb_active , icon_active');
        $(".repay_content3 , .repay_content3 span i").addClass('rcb_active , icon_active');
    });

    $(".repay_content1").on('click', function () {
        $(".repay_content2 , .repay_content3 , .repay_content2 span i , .repay_content3 span i").removeClass('rcb_active , icon_active');
        $(".repay_content1 , .repay_content1 span i").addClass('rcb_active , icon_active');
    });

    //-------- 0.9 Price_range Js --------
    $(function () {
        $("#slider-range-min").slider({
            range: "min",
            value: 2,
            min: 1,
            max: 35,
            slide: function (event, ui) {
                $("#amount").val(ui.value + " 年間 ");
            }
        });
        $("#amount").val(" 年間 " + $("#slider-range-min").slider("value"));
    });
    $(function () {
        $("#slider-range-min2").slider({
            range: "min",
            value: 2,
            min: 1,
            max: 35,
            slide: function (event, ui) {
                $("#amount2").val(ui.value + " 年間 ");
            }
        });
        $("#amount2").val(" 年間 " + $("#slider-range-min2").slider("value"));
    });
    $(function () {
        $("#slider-range-min3").slider({
            range: "min",
            value: 2,
            min: 1,
            max: 35,
            slide: function (event, ui) {
                $("#amount3").val(ui.value + " 年間 ");
            }
        });
        $("#amount3").val(" 年間 " + $("#slider-range-min3").slider("value"));
    });
    $(function () {
        $("#slider-range-min4").slider({
            range: "min",
            value: 2,
            min: 1,
            max: 35,
            slide: function (event, ui) {
                $("#amount4").val(ui.value + " 年間 ");
            }
        });
        $("#amount4").val(" 年間 " + $("#slider-range-min4").slider("value"));
    });

    //-------- 0.9 WoW Js --------
    new WOW().init({});

});