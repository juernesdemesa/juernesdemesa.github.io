---
layout: page
title: Ludoteca
permalink: /ludoteca
comments: false
---

<script src="../assets/js/games.js"></script>
<script>
    const games = getGames();
</script>

## 🎲 Ludoteca
---
<script>printGames(games.filter(game => game.owned))</script>

## 📦 Trastero
---

<script>printGames(games.filter(game => game.prevowned))</script>
