<template>
  <main>
    <div>
      <h1>Editar Cliente</h1>
      <form @submit="editar">
        <div v-show="msg" class="mensagem">{{ msg }}</div>
        <div class="input-form">
          <label for="nome">Nome do Cliente </label>
          <input type="text" name="nome" id="nome" v-model="nome">
        </div>
        <div class="input-form">
          <label for="cpf">CPF </label>
          <the-mask :mask="['###.###.###-##']" name="cpf" id="cpf" v-model="cpf" />
        </div>
        <div class="input-form">
          <label for="data">Data de Nascimento </label>
          <input type="date" name="data" id="data" v-model="data">
        </div>
        <button type="submit">Editar</button>
      </form>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import { TheMask } from 'vue-the-mask'

export default {
  name: 'EditClienteView',
  data() {
    return {
      nome: '',
      cpf: '',
      data: '',
      msg: null
    }
  },
  components: { TheMask },
  methods: {
    editar(e) {
      e.preventDefault()
      if (this.nome.trim() === '' && this.cpf.trim() === '') {
        this.msg = 'Os campos não podem ser vazios'
        setTimeout(() => this.msg = '', 3000)
      } else if (this.cpf.length < 11) {
        this.msg = 'Cpf Inválido'
        setTimeout(() => this.msg = '', 3000)
      } else {
        const cpfFormatado = this.formataCPF(this.cpf)
        axios.patch(`http://localhost:3000/pessoas/${this.$route.params.id}`, {
          nome: this.nome,
          cpf: cpfFormatado,
          dataNascimento: this.data
        }).then((r) => console.log(r.data))
        setTimeout(() => {
          this.$router.push({ name: 'clientes' })
        }, 1000)
      }
    },
    formataCPF(cpf) {
      //retira os caracteres indesejados...
      cpf = cpf.replace(/[^\d]/g, "");

      //realizar a formatação...
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    },
  },
  mounted() {
    const id = this.$route.params.id
    axios.get(`http://localhost:3000/pessoas/${id}`).then((r) => {
      this.nome = r.data.nome;
      this.cpf = r.data.cpf;
      this.dataNascimento = r.data.dataNascimento
    })
  }
}
</script>

<style scoped>
main>div {
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: start;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-form input {
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 14px;
  font-family: Inter;
}

.input-form input:focus {
  outline: 0;
  border: 2px solid var(--amarelo);
}

button {
  border: none;
  border-radius: 5px;
  color: var(--branco);
  font-weight: bold;
  font-size: 1.1rem;
  padding: 10px 20px;
  background-color: green;
  cursor: pointer;
  transition: all .3s;
}

button:hover {
  background-color: #0a5c0a;
}

@media(min-width: 700px) {
  form {
    width: 25%;
  }
}
</style>