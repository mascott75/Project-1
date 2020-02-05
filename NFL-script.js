var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl-t1/teams/hierarchy.json?api_key=b2uf4274y4r7ywx89fmph5e2"
var myDictionary = {
    "MIA": "nfl-logos/dolphins.png",
    "BUF": "nfl-logos/bills.png",
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

var responseTemp;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    responseTemp = response

    // AFC division variables
    var afcEast = response.conferences[0].divisions[0];
    var afcNorth = response.conferences[0].divisions[1];
    var afcSouth = response.conferences[0].divisions[2];
    var afcWest = response.conferences[0].divisions[3];
    // AFC specific variables
    var afcEastName = response.conferences[0].divisions[0].name;
    var afcNorthName = response.conferences[0].divisions[1].name;
    var afcSouthName = response.conferences[0].divisions[2].name;
    var afcWestName = response.conferences[0].divisions[3].name;
    // NFC variables
    var nfcEast = response.conferences[1].divisions[0];
    var nfcNorth = response.conferences[1].divisions[1];
    var nfcSouth = response.conferences[1].divisions[2];
    var nfcWest = response.conferences[1].divisions[3];
    // NFC specific variables
    var nfcEastName = response.conferences[1].divisions[0].name;
    var nfcNorthName = response.conferences[1].divisions[1].name;
    var nfcSouthName = response.conferences[1].divisions[2].name;
    var nfcWestName = response.conferences[1].divisions[3].name;
    var nfcEastName1 = response.conferences[1].divisions[0].teams[0];
    console.log(nfcEastName1)
    response.conferences.forEach(conference => {
        conference.divisions.forEach(division => {
            division.teams.forEach(team => {
                var myImg = $(`<img src=${myDictionary[team.id]}>`)
                $(".container").append(myImg);
                console.log(myImg)
            })

        });
    });


})