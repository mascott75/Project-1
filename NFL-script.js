var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl-t1/teams/hierarchy.json?api_key=b2uf4274y4r7ywx89fmph5e2"
var myDictionary = {
    "BUF": "nfl-logos/bills.png",
    "MIA": "nfl-logos/dolphins.png",
    "NYJ": "nfl-logos/jets.png",
    "NE": "nfl-logos/patriots.png",
    "CIN": "nfl-logos/bengals.png",
    "CLE": "nfl-logos/bronws.png",
    "BAL": "nfl-logos/ravens.png",
    "PIT": "nfl-logos/steelers.png",
    "IND": "nfl-logos/colts.png",
    "JAC": "nfl-logos/jaguars.png",
    "HOU": "nfl-logos/texans.png",
    "TEN": "nfl-logos/titans.png",
    "DEN": "nfl-logos/broncos.png",
    "LAC": "nfl-logos/chargers.png",
    "KC": "nfl-logos/chiefs.png",
    "OAK": "nfl-logos/raiders.png",
    "DAL": "nfl-logos/cowboys.png",
    "PHI": "nfl-logos/eagles.png",
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

$("#afc-btn").on("click", function() {
    $("#AFC-divisions").empty();
    $("#AFC-divisions").append($(`<div><button type="button" id="afc-east" class="btn btn-outline-primary div-btn" data-index="1">AFC East</button></div><div><button type="button" id="afc-north" class="btn btn-outline-secondary div-btn" data-index="2">AFC North</button></div><div><button type="button" id="afc-south" class="btn btn-outline-success div-btn" data-index="3">AFC South</button></div><div><button type="button" id="afc-west" class="btn btn-outline-danger div-btn" data-index="4">AFC West</button></div>`))
})
$("#nfc-btn").on("click", function() {
    $("#NFC-divisions").empty();
    $("#NFC-divisions").append($(`<div><button type="button" id="nfc-east" class="btn btn-outline-primary div-btn-1" data-index="1">NFC East</button></div><div><button type="button" id="nfc-north" class="btn btn-outline-secondary div-btn-1" data-index="2">NFC North</button></div><div><button type="button" id="nfc-south" class="btn btn-outline-success div-btn-1" data-index="3">NFC South</button></div><div><button type="button" id="nfc-west" class="btn btn-outline-danger div-btn-1" data-index="4">NFC West</button></div>`))
})

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


// buttons for the specific divisions. Appends the teams to the collumn when clicked.
$(document).on("click", ".div-btn", function() {
        $("#AFC-divisions").empty();
        var currentIndex = $(this).attr("data-index")



        for (let j = currentIndex - 1; j < currentIndex; j++) {
            for (let i = 0; i < 4; i++) {
                var team = responseExt.conferences[0].divisions[j].teams[i].id
                var afcEastTxt = $(`<div>
                <div class="teams"><button class="team-btn">${team} ${teamsArray[((j*4)+i)]}</button></div>
                </div>`)
                $("#AFC-divisions").append(afcEastTxt)
            }
        }
    })
    // buttons for the specific divisions. Appends the teams to the collumn when clicked.
$(document).on("click", ".div-btn-1", function() {
        $("#NFC-divisions").empty();
        var currentIndex = $(this).attr("data-index")



        for (let j = currentIndex - 1; j < currentIndex; j++) {
            for (let i = 0; i < 4; i++) {
                var team = responseExt.conferences[1].divisions[j].teams[i].id
                var afcEastTxt = $(`<div>
                <div class="teams"><button class="team-btn">${team} ${teamsArray[((j*4)+i)+16]}</button> </div>
                </div>`)
                $("#NFC-divisions").append(afcEastTxt)
            }
        }
    })
    // listens for a click on team-btn, gets the abreviation of the team name, and ajax calls based on the name for the roster of the team.
$(document).on("click", ".team-btn", function() {
    $(".list-container").empty();
    $("#temp").empty();
    var teamAbrv = $(this).text();
    console.log(teamAbrv)
    var urlTeam = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl-t1/teams/" + teamAbrv + "/roster.json?api_key=b2uf4274y4r7ywx89fmph5e2"
    $.ajax({
        url: urlTeam,
        method: "GET"
    }).then(function(responseTeam) {
        console.log(responseTeam)
        var teamCity = (responseTeam.market);
        var teamName = (responseTeam.name);
        var coach = [responseTeam.coaches[0].name_full, responseTeam.coaches[1].name_full, responseTeam.coaches[2].name_full]
        var myImg = `<img class="team-logos-big" src=${myDictionary[responseTeam.id]}>`
        var count = 0;

        var roster = responseTeam.players;

        var information = $(`<div class="row" id="team-description"><div class="col-sm-3 offset-sm-2">${myImg}</div><div class="col-sm-4 offset-sm-2" id="team-col"><div id="clicked-team">${teamCity} ${teamName} <div id="coach">Head Coaches: ${coach[0]}, ${coach[1]}, ${coach[2]}</div></div></div>`)
        $("#temp").append(information)
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