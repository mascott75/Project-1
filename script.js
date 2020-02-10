$(document).ready(function() {

    $(".move").hover(
        // when mouse hover
        function() {
            $(this).animate({
                marginTop: "-=1%"
            }, 200);
        },

        // when mouse out
        function() {
            $(this).animate({
                marginTop: "0%"
            }, 200);
        }
    )
})