$(document).ready(function () {
    $("#design").click(function () {
        $("#design-p").toggle();
        $("#design").toggle();


    });
    $("#design-p").click(function () {
        $("#design").toggle()
        $("#design-p").toggle()


    });
    $("#development").click(function () {
        $("#develop").show();
        $("#development").hide();

    });
    $("#develop").click(function () {
        $("#development").show();
        $("#develop").hide();

    });

    $("#product-design").click(function () {
        $("#product").show();
        $("#product-design").hide();
    });
    $("#product").click(function () {
        $("#product-design").show();
        $("#product").hide();
    });
});

