var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-nba-v1.p.rapidapi.com/teams/confName/west",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "3c294ad22bmshdb279125c188473p1aed37jsne14aaa78a30c"
    }
}

$.ajax(settings).done(function(response) {
    console.log(response);

    // $(".dallas").html(response.api.teams[0].fullName);
    // $(".denver").html(response.api.teams[1].fullName);
    // $(".goldenState").html(response.api.teams[2].fullName);
    // $(".houston").html(response.api.teams[3].fullName);
    // $(".la").html(response.api.teams[4].fullName);
    // $(".losAngles").html(response.api.teams[5].fullName);
    // $(".memphis").html(response.api.teams[6].fullName);
    // $(".minnesota").html(response.api.teams[7].fullName);
    // $(".newOrleans").html(response.api.teams[8].fullName);
    // $(".oklahomaCity").html(response.api.teams[9].fullName);
    // $(".phoenix").html(response.api.teams[10].fullName);
    // $(".portland").html(response.api.teams[11].fullName);
    // $(".sacramento").html(response.api.teams[12].fullName);
    // $(".sanAntonio").html(response.api.teams[13].fullName);
    // $(".teamLeBron").html(response.api.teams[14].fullName);
    // $(".utah").html(response.api.teams[15].fullName);

    $(".next").on("click", function(event) {

        event.preventDefault();

        console.log(test);

        var currentIndex = $(this).attr("data-index")

        var teamName = response.api.teams[currentIndex]
        console.log(teamName)

        var logoLink = teamName.logo;

        var teamLogo = $(`<img src=${logoLink} alt="" style= "height: 200px;
        width: auto">`)

        console.log(response)

        $(".teamCityName").text(teamName.city);
        $(".teamFullName").text(teamName.fullName);
        $(".shortName").text(teamName.shortName);
        $(".teamLogo").html(teamLogo)


    })




});

// live NBA games API
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api-nba-v1.p.rapidapi.com/games/live/",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
//         "x-rapidapi-key": "3c294ad22bmshdb279125c188473p1aed37jsne14aaa78a30c"
//     }
// }

// $.ajax(settings).done(function(response) {
//     console.log(response);
// });


var test = "Hello";