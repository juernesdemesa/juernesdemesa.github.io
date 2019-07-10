---
layout: page
title: Ludoteca
permalink: /ludoteca
comments: false
---

<script src="../assets/js/games.js"></script>

<script>
    const games = getGames();
    printGames(games.filter(game => game.owned))
</script>