---
layout: page
title: Lista de deseos
permalink: /wishlist
comments: false
---

<script src="../assets/js/games.js"></script>
<script>
    const games = getGames();
</script>
## Lista de la compra

<script>printGames(games.filter(game => game.wantToBuy == 1))</script>

## Me gustan

<script>printGames(games.filter(game => game.wantToPlay == 1))</script>

## En el radar

<script>printGames(games.filter(game => game.wishList == 1))</script>