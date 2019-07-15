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

## 🤑 Lista de la compra
---
<script>printGames(games.filter(game => game.wantToBuy))</script>

## 💫 Lista de deseos
---


### 🤤 Must have

<script>printGames(games.filter(game => game.wishList && game.wishlistpriority == 1))</script>

### 😍 Love to have

<script>printGames(games.filter(game => game.wishList && game.wishlistpriority == 2))</script>

### 😊 Like to have

<script>printGames(games.filter(game => game.wishList && game.wishlistpriority == 3))</script>

### 🤨 Thinking about it

<script>printGames(games.filter(game => game.wishList && game.wishlistpriority == 4))</script>