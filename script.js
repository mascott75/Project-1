var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl-t1/teams/hierarchy.json?api_key=b2uf4274y4r7ywx89fmph5e2"

console.log("test")

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)

})