<<<<<<< HEAD
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl-t1/teams/hierarchy.json?api_key=b2uf4274y4r7ywx89fmph5e2"

console.log("test")

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)

=======
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
>>>>>>> master
})