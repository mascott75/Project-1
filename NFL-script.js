var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl-t1/teams/hierarchy.json?api_key=b2uf4274y4r7ywx89fmph5e2"
var myDictionary = {
    "BUF": "nfl-logos/bills.png",
    "MIA": "nfl-logos/dolphins.png",
    "NYJ": "nfl-logos/jets.png",
    "NE": "nfl-logos/patriots.jpg",
    "CIN": "nfl-logos/bengals.png",
    "CLE": "nfl-logos/browns.jpg",
    "BAL": "nfl-logos/ravens.png",
    "PIT": "nfl-logos/steelers.png",
    "IND": "nfl-logos/colts.png",
    "JAC": "nfl-logos/jaguars.jpg",
    "HOU": "nfl-logos/texans.png",
    "TEN": "nfl-logos/titans.jpg",
    "DEN": "nfl-logos/broncos.png",
    "LAC": "nfl-logos/chargers.png",
    "KC": "nfl-logos/chiefs.jpg",
    "OAK": "nfl-logos/raiders.png",
    "DAL": "nfl-logos/cowboys.png",
    "PHI": "nfl-logos/eagles.jpg",
    "NYG": "nfl-logos/giants.png",
    "WAS": "nfl-logos/red-skins.png",
    "CHI": "nfl-logos/bears.png",
    "DET": "nfl-logos/lions.png",
    "GB": "nfl-logos/packers.png",
    "MIN": "nfl-logos/vikings.png",
    "TB": "nfl-logos/buccaneers.png",
    "ATL": "nfl-logos/falcons.png",
    "CAR": "nfl-logos/panthers.png",
    "NO": "nfl-logos/saints.png",
    "SF": "nfl-logos/49ers.png",
    "ARI": "nfl-logos/cardinals.png",
    "LA": "nfl-logos/rams.png",
    "SEA": "nfl-logos/seahawks.png",

}

var teamsArray = [];
var responseExt;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    responseExt = response;
    // setting the team logos to an array.

    response.conferences.forEach(conference => {
        conference.divisions.forEach(division => {
            division.teams.forEach(team => {
                var myImg = `<img class="team-logos" src=${myDictionary[team.id]}>`
                console.log(myImg)

                teamsArray.push(myImg);
            })
        });

    });

    console.log(teamsArray)
})
console.log(responseExt)




// responseExt.conferences[0].divisions.unshift("empty");
$(".div-btn").on("click", function() {
    $("#AFC-divisions").empty();
    var currentIndex = $(this).attr("data-index")



    for (let j = currentIndex - 1; j < currentIndex; j++) {
        for (let i = 0; i < 4; i++) {
            var team = responseExt.conferences[0].divisions[j].teams[i].id
            var afcEastTxt = $(`<div>
                <div class="teams"><button class="team-btn">${team}</button> ${teamsArray[((j*4)+i)]}</div>
                </div>`)
            $("#AFC-divisions").append(afcEastTxt)
        }
    }
})
$(document).on("click", ".team-btn", function() {
    $(".list-container").empty();
    console.log(this)
    var teamAbrv = $(this).text();
    console.log(teamAbrv)
    var urlTeam = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl-t1/teams/" + teamAbrv + "/roster.json?api_key=b2uf4274y4r7ywx89fmph5e2"
    $.ajax({
        url: urlTeam,
        method: "GET"
    }).then(function(responseTeam) {
        console.log(responseTeam)
        var count = 0;

        var roster = responseTeam.players;
        var rowPlayers = $(`<div class = "row row-players"></div>`)
        while (count < roster.length) {

            if (count % 3 === 0) {

                $(".list-container").append(rowPlayers);
                rowPlayers = $(`<div class = "row row-players"></div>`)
            }
            var fullName = responseTeam.players[count].name_full;
            var college = responseTeam.players[count].college;
            var jerseyNum = responseTeam.players[count].jersey_number;
            var draftRnd = responseTeam.players[count].draft_round;
            var draftPst = responseTeam.players[count].draft_pick;
            var yearsPlayed = responseTeam.players[count].experience;
            var position = responseTeam.players[count].position;
            var displayPlayers = $(`
                <section class="col-sm-4 player-col">
                    <div>
                        <li class="player-list">Player: ${fullName}, #:${jerseyNum}, ${college}</li>
                        <li class="player-list">Draft: Round-${draftRnd}, pick-${draftPst}</li>
                        <li class="player-list">Position: ${position}, year-${yearsPlayed}</li>
                    </div>
                </section>`)

            rowPlayers.append(displayPlayers)





            count++;
        }
    })
})