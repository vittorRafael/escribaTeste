<template>
  <div id="app">
    <HeaderComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';

export default {
  name: 'App',
  components: { HeaderComp, FooterComp }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

*:root {
  --branco: #eeeeee;
  --preto: #222831;
  --amarelo: #ffd369;
  --cinza: #393e46;
}

a {
  font-weight: bold;
  text-decoration: none;
  transition: all .5s;
  color: var(--cinza);
}

a:hover {
  font-size: 1.1rem;
}

.container {
  display: flex;
  padding: 0 20px;
}

main {
  min-height: 48rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(6rem, auto);
  padding: 20px 20px;
}

.mensagem {
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b81414;
  font-weight: bold;
}


@media(min-width: 700px) {
  main {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(11rem, auto);
  }
}

@media (min-width: 1200px) {
  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0;
  }

  main {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px 0;
  }
}

/* scrollbar */
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #221f02 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #221f02;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
