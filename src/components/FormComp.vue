<template>
  <form @submit="cadastrarCliente">
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
    <button type="submit">Cadastrar</button>
  </form>
</template>

<script>
import axios from 'axios'
import { TheMask } from 'vue-the-mask'
export default {
  name: 'FormComp',
  data() {
    return {
      nome: '',
      cpf: '',
      data: null,
      msg: null
    }
  },
  components: { TheMask },
  methods: {
    cadastrarCliente(e) {
      e.preventDefault()
      if (this.nome.trim() === '' && this.cpf.trim() === '') {
        this.msg = 'Os campos não podem ser vazios'
        setTimeout(() => this.msg = '', 3000)
      } else if (this.cpf.length != 11) {
        this.msg = 'Cpf Inválido'
        setTimeout(() => this.msg = '', 3000)
      } else {
        const cpfFormatado = this.formataCPF(this.cpf)
        axios.post("http://localhost:3000/pessoas", {
          nome: this.nome, cpf: cpfFormatado, dataNascimento: this.data
        }).then((r) => console.log(r.data)).catch((err) => console.log(err))
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
}
</script>

<style scoped>
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