<template>
  <table class="tabela-clientes">
    <thead>
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th class="coluna-tabela">Cpf</th>
        <th>Data de Nascimento</th>
        <th>*</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(cliente, index) in clientes" :key="cliente.id">
        <td>{{ index + 1 }}</td>
        <td>{{ cliente.nome }}</td>
        <td class="coluna-tabela">{{ cliente.cpf }}</td>
        <td>{{ cliente.dataNascimento ? cliente.dataNascimento.split('-').reverse().toString().replaceAll(',', '/') : '--/--/----' }}</td>
        <td><button class="btn-cliente edit"><router-link :to="`/editarcliente/${cliente.id}`"><img src="../assets/pen.svg" alt="Editar"></router-link></button>
          <button class="btn-cliente delete" @click="deletarCliente(cliente.id)"><img src="../assets/trash.svg" alt="Editar"></button>
        </td>
      </tr>

    </tbody>
  </table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TabelaComp',
  props: ['clientes'],
  emits: ['deletarCliente'],
  methods: {
    deletarCliente(id) {
      axios.delete(`http://localhost:3000/pessoas/${id}`).then((r) => console.log(r.data)).then((err) => console.log(err))
      setTimeout(() => {
        location.reload()
      }, 1000)
    }
  }
}
</script>

<style scoped>
.tabela-clientes {
  width: 100%;
  text-align: center;
}

.tabela-clientes thead {
  background: var(--preto);
  font-weight: bold;
  color: var(--branco);
}

.tabela-clientes tbody tr:nth-child(2n) {
  background: #ccc;
}

.tabela-clientes th,
.tabela-clientes td {
  padding: 7px;
}

.coluna-tabela {
  display: none;
}

.btn-cliente {
  padding: 5px 10px;
  margin: 2px;
  border: none;
  background-color: #fff;
  box-shadow: 1px 3px 5px rgb(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all .2s;
}

.edit {
  fill: var(--amarelo);
}

@media (min-width: 550px) {
  .coluna-tabela {
    display: block;
  }
}
</style>