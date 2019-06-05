function printGames(file) {
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null)
    var games = JSON.parse(request.responseText);
    games.sort(function(a, b){return a.tier - b.tier});
    let items = "";
    for (let i = 0; i < games.length; i++) {
        items += `<div class="card">
                <img src="${games[i].image}" alt="${games[i].name}">
                <div class="card-container">
                    <h4><b>${games[i].name}</b></h4>
                    <div class="card-buttons">
                        <a target="_blank" rel="noopener noreferrer" href="${games[i].review}"><img class="card-button" src='/assets/images/css/yt.svg'></a>
                        <a target="_blank" rel="noopener noreferrer" href="${games[i].bgg}"><img class="card-button" src='/assets/images/css/bgg.svg'></a>
                        <a target="_blank" rel="noopener noreferrer" style="display:${games[i].buy ? 'inline' : 'none'}" href="${games[i].buy}"><img class="card-button" src='/assets/images/css/buy.svg'></a>
                    </div>
                </div>
            </div>`;
    }

    document.write(`<div class="game-list">${items}</div>`)
}