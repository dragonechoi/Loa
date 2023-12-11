$(document).ready(function () {
    initPage();
    eventBind();
});

function initPage() {
    getTabContainer();
    $(".sub-category").hide();
};

function eventBind() {
    $(".tab_btn").click(function(){
        if(!$(this).hasClass("active")){
            $(".tab_btn").removeClass("active");
            $(this).addClass("active");
            getTabContainer();
        }
    });

    $(".category").click(function(){
        $(".sub-category").hide();
        $(".category").css("background-color", "#1b1d23");
        $(this).css("background-color", "#7641cb");
        $(this).children("ul").show();
        //console.log("tt");
    });

    $(".sub-category li").click(function(){
        $(".sub-category li").css("color","#ffffff");
        $(this).css("color","#7641cb");
    });

};

function getTabContainer() {
    var tab_id = $(".tab_btn.active").attr("link");
    $(".tab_container").hide();
    $(tab_id).css("display","flex");
}