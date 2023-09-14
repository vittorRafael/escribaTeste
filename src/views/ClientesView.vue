<template>
  <main>
    <div v-if="clientes.length == 0" class="sem-clientes">
      <h1>Não há clientes cadastrados no momento</h1>
      <router-link to="/novocliente"><span>+</span> Adicionar novo cliente</router-link>
    </div>
    <div v-else class="com-clientes">
      <router-link to="/novocliente"><span>+</span> Adicionar novo cliente</router-link>
      <input type="text" name="pesquisar" id="pesquisar" placeholder="Pesquisar" @change="pesquisar">
      <TabelaComp :clientes="clientes" v-if="!pesquisa && clientesPesquisa.length === 0" />
      <div v-else-if="clientesPesquisa.length === 0" class="sem-clientes">
        <h1>Sem resultados!</h1>
      </div>
      <TabelaComp :clientes="clientesPesquisa" v-else />
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import TabelaComp from '@/components/TabelaComp.vue';

export default {
  components: { TabelaComp },
  name: 'HomeView',
  data() {
    return {
      clientes: [],
      pesquisa: false,
      clientesPesquisa: []
    }
  },
  methods: {
    getClientes() {
      axios.get("http://localhost:3000/pessoas").then((r) => this.clientes = r.data)
    },
    pesquisar(e) {
      this.pesquisa = true
      this.clientesPesquisa = this.clientes.filter((cliente) => {
        return cliente.nome.toLowerCase().includes(e.target.value.toLowerCase())
      })
      console.log(this.clientesPesquisa)
    }
  },
  created() {
    this.getClientes();
  },
  mounted() {
  }
}
</script>

<style scoped>
.sem-clientes {
  grid-column: 1/-1;
  grid-row: span 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.com-clientes {
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 30px;
}

a {
  display: flex;
  gap: 10px;
  align-items: center;
}

a span {
  padding: 0 15px;
  font-size: 1.5rem;
  color: green;
  border: none;
  background-color: #fff;
  box-shadow: 1px 3px 5px rgb(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all .2s;
}

.content {
  display: flex;
  margin: auto;
}

.mensagem {
  background-color: rgba(0, 100, 0, 0.4);
  color: #0a5c0a;
}

input {
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 14px;
  font-family: Inter;
}

input:focus {
  outline: 0;
  border: 2px solid var(--amarelo);
}

@media (min-width: 700px) {
  .sem-clientes {
    flex-direction: row;
    justify-content: space-between;
  }

}
</style>