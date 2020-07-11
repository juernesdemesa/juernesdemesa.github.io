function printGames(games) {
  games.sort(function (a, b) {
    return (
      (a.rank != "Not Ranked" ? parseInt(a.rank) : 100000) -
      (b.rank != "Not Ranked" ? parseInt(b.rank) : 100000)
    );
  });
  let items = "";
  for (let i = 0; i < games.length; i++) {
    items += `<div class="col-lg-3 col-md-6 mb-30px card-group">
    <div class="card h-100">
        <div class="gamethumb">
        <a target="_blank" rel="noopener noreferrer" href="https://boardgamegeek.com/boardgame/${
          games[i].RowKey
        }">
          <img class="img-fluid lazyimg" src="${games[i].thumbnail}" alt="${
      games[i].name
    }">
        </a>
        </div>
        <div class="game-card-body">
            <h2 class="game-card-title">
                <a class="text-dark" href="https://boardgamegeek.com/boardgame/${
                  games[i].RowKey
                }">${games[i].name}</a>
            </h2>
        </div>
        <div class="card-footer bg-white game-card-footer">
            <div class="wrapfooter" style="margin: 0px">
            🏆${games[i].rank}
            &nbsp;&nbsp;
            👥${
              games[i].minplayers != games[i].maxplayers
                ? games[i].minplayers + " - " + games[i].maxplayers
                : games[i].minplayers
            }
            &nbsp;&nbsp;
            ⏱${
              games[i].minplaytime != games[i].maxplaytime
                ? games[i].minplaytime + " - " + games[i].maxplaytime
                : games[i].minplaytime
            }
            </div>
        </div>
    </div>
</div>`;
  }

  document.write(`<div class="row listrecent">${items}</div><br/>`);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function getGames(retries) {
  try {
    var request = new XMLHttpRequest();
    file = `https://ikeinyyo001.table.core.windows.net/boardgames?sv=2018-03-28&si=Read&tn=boardgames&sig=FlGZcGPdRS%2FZ6eLnb4yMy65MluwDMI0BdRIfkX6MwN0%3D`;
    request.open("GET", file, false);
    request.setRequestHeader("Accept", "application/json");
    request.send(null);
    var result = JSON.parse(request.responseText);
    console.log(result.value);
    return result.value;
  } catch (e) {
    if (retries > 4) return [];
    sleep(2000);
    return getGames(retries ? retries + 1 : 1);
  }
}
