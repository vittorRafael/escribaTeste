<template>
  <main>
    <div>
      <h1>Adicionar Novo Cliente</h1>
      <FormComp texto-botao="Cadastrar" :editar="false" />
    </div>
  </main>
</template>

<script>
import FormComp from '@/components/FormComp.vue';

export default {
  name: 'AddClienteView',
  components: { FormComp }
}
</script>

<style scoped>
div {
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: start;
}
</style>