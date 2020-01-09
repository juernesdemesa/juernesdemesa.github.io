---
layout: page
title: Lista de deseos
permalink: /deseos
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

### 🤤 Lo necesito

<script>printGames(games.filter(game => game.wishList && game.wishlistpriority == 1))</script>

### 😍 Me encantaría tenerlo

<script>printGames(games.filter(game => game.wishList && game.wishlistpriority == 2))</script>

### 😊 Me gustaría tenerlo

<script>printGames(games.filter(game => game.wishList && game.wishlistpriority == 3))</script>

### 🤨 Me gusta este juego

<script>printGames(games.filter(game => game.wishList && game.wishlistpriority == 4))</script>

### 🤓 Juegos para revisar

<script>printGames(games.filter(game => game.wishList && game.wishlistpriority == 5))</script>
