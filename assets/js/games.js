function printGames(games) {
    games.sort(function (a, b) { return a.rank - b.rank });
    let items = "";
    for (let i = 0; i < games.length; i++) {
        items += `<a target="_blank" 
                     href="https://boardgamegeek.com/boardgame/${games[i].gameId}" 
                     class="thumb thumb-img" 
                     style="background-image: url(${games[i].thumbnail})">
                  </a>`;
    }

    document.write(`<div class="masonry">${items}</div><br/>`)
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function getGames(retries) {
    try {
        var request = new XMLHttpRequest();
        const username = "ikeinyyo";
        file = `https://www.boardgamegeek.com/xmlapi2/collection?username=${username}&stats=1`
        request.open("GET", file, false);
        request.send(null)
        return parseGames(request.responseXML);
    }
    catch
    {
        if (retries > 4) return []
        console.log("error" + retries)
        sleep(2000);
        return getGames(retries ? retries + 1 : 1);
    }
}


function parseGames(responseXML) {
    const games = []
    const items = responseXML.getElementsByTagName("items")[0].children;
    for (var i = 0; i < items.length; i++) {
        games.push({
            image: items[i].getElementsByTagName("image")[0].textContent,
            thumbnail: items[i].getElementsByTagName("thumbnail")[0].textContent,
            name: items[i].getElementsByTagName("name")[0].textContent,
            gameId: items[i].getAttribute("objectid"),
            rank: items[i].getElementsByTagName("stats")[0].getElementsByTagName("rating")[0].getElementsByTagName("ranks")[0].children[0].getAttribute("value"),
            owned: items[i].getElementsByTagName("status")[0].getAttribute("own") == "1",
            wantToBuy: items[i].getElementsByTagName("status")[0].getAttribute("wanttobuy") == "1",
            wantToPlay: items[i].getElementsByTagName("status")[0].getAttribute("wanttoplay") == "1",
            wishList: items[i].getElementsByTagName("status")[0].getAttribute("wishlist") == "1",
        });
    }
    return games;
}