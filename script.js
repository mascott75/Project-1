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

// var weatherUrl = ("https://api.sportsdata.io/v3/nba/stats/json/AllStars/2020/bb504563bda7491994e11b52e783c884")
// $.ajax({ url: weatherUrl, method: "GET" }).then(function(response) {
//     console.log(response)
// })