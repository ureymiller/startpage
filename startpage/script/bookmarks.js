$(document).ready(function() {
    $("#university-bookmarks").mouseenter(function() {
        hideAll();
        $(".navigation-searchbar").hide();
        $(".bookmarks-university").css("display", "block");
    });

    $("#programming-bookmarks").mouseenter(function() {
        hideAll();
        $(".navigation-searchbar").hide();
        $(".bookmarks-programming").css("display", "block");
    });

    $("#finance-bookmarks").mouseenter(function() {
        hideAll();
        $(".navigation-searchbar").hide();
        $(".bookmarks-finance").css("display", "block");
    });

    $(".navigation-bookmarks").mouseleave(function() {
        hideAll();
        $(".navigation-searchbar").show();
    });

    function hideAll() {
        $(".bookmarks-university").css("display", "none");
        $(".bookmarks-programming").css("display", "none");
        $(".bookmarks-finance").css("display", "none");
    }
});