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

    //-------- 0.9 WoW Js --------
    new WOW().init({});

});