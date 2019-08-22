function printGames(games) {
    games.sort(function (a, b) { return a.rank - b.rank });
    let items = "";
    for (let i = 0; i < games.length; i++) {
        items +=
            `<div class="masonry-item" title="${games[i].name}">
                    <div class="game-details-element">
                        <div class="game-details-icon">🎲</div>
                        <div class="game-details">
                        👨‍👩‍👧‍👦${games[i].minplayers != games[i].maxplayers ? games[i].minplayers + " - " + games[i].maxplayers : games[i].minplayers}
                        ⌛️${games[i].minplaytime != games[i].maxplaytime ? games[i].minplaytime + " - " + games[i].maxplaytime : games[i].minplaytime}</div>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://boardgamegeek.com/boardgame/${games[i].RowKey}">
                        <img src="${games[i].thumbnail}" alt="${games[i].name}">
                    </a>
            </div>`;
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
        file = `https://ikeinyyo.table.core.windows.net/boardgames?sv=2018-03-28&si=boardgames-16BE7DA488A&tn=boardgames&sig=enGpZzCuAmlLNEVOquLTaUAbo4CE63lWfsW1dFMl9U0%3D`
        request.open("GET", file, false);
        request.setRequestHeader("Accept", "application/json")
        request.send(null)
        var result = JSON.parse(request.responseText);
        console.log(result.value)
        return result.value;
    }
    catch (e) {
        if (retries > 4) return []
        sleep(2000);
        return getGames(retries ? retries + 1 : 1);
    }
}
