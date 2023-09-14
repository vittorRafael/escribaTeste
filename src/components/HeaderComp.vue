<template>
  <header>
    <div class="container">
      <router-link to="/">
        <h1>Escriba</h1>
      </router-link>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/clientes">Clientes</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
header {
  padding: 20px 0;
  color: var(--branco);
  background-color: var(--cinza);
}

header div {
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-weight: bold;
  color: var(--amarelo);
}

nav a {
  color: var(--branco);
}

nav a.router-link-exact-active {
  color: var(--amarelo);
}
</style>