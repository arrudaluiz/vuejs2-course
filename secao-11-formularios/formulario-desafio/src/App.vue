<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <!-- Criar uma formulário de registro -->
      <!-- Só mostrar o fomulário se não tiver sido submetido -->
      <form class="painel" v-if="!formSubmitted">
        <div class="cabecalho">Formulário</div>
        <!-- Criar um componente personalizado -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
        <FullName v-model.lazy.trim="user.fullName" />
        <!-- Email -->
        <Rotulo nome="E-mail">
          <input type="text" v-model.lazy.trim="user.email" />
        </Rotulo>
        <!-- Senha -->
        <Rotulo nome="Senha">
          <input type="password" v-model.lazy.trim="user.password" />
        </Rotulo>
        <!-- Armazenar Dados? (Sim/Não) -->
        <Rotulo nome="Armazenar dados">
          <span><input type="checkbox" v-model="storeData" /> Confirmar</span>
        </Rotulo>
        <button @click.prevent="sendForm">Enviar</button>
      </form>

      <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <!-- Nome completo (Nome e Sobrenome) -->
        <Rotulo nome="Nome">
          <span>{{ user.fullName.firstName }}</span>
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <span>{{ user.fullName.lastName }}</span>
        </Rotulo>
        <!-- Email -->
        <Rotulo nome="E-mail">
          <span>{{ user.email }}</span>
        </Rotulo>
        <!-- Senha -->
        <Rotulo nome="Senha">
          <span>{{ user.password }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
  import Rotulo from './components/Rotulo.vue'
  import FullName from './components/FullName.vue'

  export default {
    name: 'app',
    components: { Rotulo, FullName },
    data() {
      return {
        user: {
          fullName: { firstName: '', lastName: '' },
          email: '',
          password: ''
        },
        storeData: true,
        formSubmitted: false
      }
    },
    methods: {
      sendForm() {
        this.storeData
          ? localStorage.setItem('user', JSON.stringify(this.user))
          : localStorage.clear()

        this.formSubmitted = true
      }
    },
    created() {
      const json = localStorage.getItem('user')
      json && (this.user = JSON.parse(json))
    }
  }
</script>

<style>
  body {
    background-color: #ececec;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    display: flex;
    flex-direction: column;
  }

  .conteudo {
    display: flex;
  }

  .painel {
    flex: 1;
    background: #fff;
    margin: 0px 10px;
    padding: 20px;
    border: 1px solid #aaa;
    border-radius: 5px;
  }

  .painel .cabecalho {
    width: 100%;
    background-color: #ddd;
    padding: 10px 0px;
    border-radius: 5px;
    font-size: 1.4rem;
  }

  #app form button {
    float: right;
    margin: 10px 0px;
    padding: 10px 20px;
    font-size: 1.4rem;
    border-radius: 5px;
    color: #fff;
    background-color: #2196f3;
  }

  #app h1 {
    font-weight: 200;
    margin: 20px;
    padding: 0;
  }

  .mr-4 {
    margin-right: 40px;
  }
</style>
