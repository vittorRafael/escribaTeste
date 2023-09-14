<template>
  <main>
    <div>
      <h1>Sejam Bem Vindos!!!!</h1>
      <p>
        <router-link to="/clientes">Clique Aqui</router-link>
        para ver ou cadastrar novos clientes!
      </p>
    </div>
  </main>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style scoped>
div {
  grid-column: 1/-1;
  grid-row: span 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 4rem;
}

p {
  font-size: 1.5rem;
}

a {
  color: var(--amarelo);
}

a:hover {
  font-size: 1.6rem;
}
</style>
