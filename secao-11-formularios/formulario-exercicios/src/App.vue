<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form class="painel" v-if="!sent">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="E-mail">
          <input type="text" v-model.lazy.trim="user.email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="user.password" />
        </Rotulo>
        <Rotulo nome="Idade">
          <input type="number" v-model.number="user.age" />
        </Rotulo>
        <Rotulo nome="Mensagem">
          <textarea name cols="30" rows="5" v-model="message"></textarea>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span class="mr-4">
            <input type="checkbox" value="reproduzivel" v-model="features" />
            Reproduzível
          </span>
          <span>
            <input type="checkbox" value="intermitente" v-model="features" />
            Intermitente
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span class="mr-4">
            <input type="radio" value="web" v-model="product" /> Web
          </span>
          <span class="mr-4">
            <input type="radio" value="mobile" v-model="product" /> Mobile
          </span>
          <span>
            <input type="radio" value="outro" v-model="product" /> Outro
          </span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <select v-model="priority">
            <option v-for="p in priorities" :key="p.id" :value="p.id">{{
              p.name
            }}</option>
          </select>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <Escolha v-model="choice" />
        </Rotulo>
        <hr />
        <button @click.prevent="sendForm">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="E-mail">
          <span>{{ user.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ user.password }}</span>
        </Rotulo>
        <Rotulo nome="Idade">
          <span>{{ user.age }}</span>
        </Rotulo>
        <Rotulo nome="Mensagem">
          <span style="white-space: pre;">{{ message }}</span>
        </Rotulo>
        <Rotulo nome="Marque as Opções">
          <span>
            <ul>
              <li v-for="f in features" :key="f">{{ f }}</li>
            </ul>
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span>{{ product }}</span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <span>{{ priority }}</span>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <span>{{ choice }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
  import Rotulo from './components/Rotulo.vue'
  import Escolha from './components/Escolha.vue'

  export default {
    name: 'app',
    components: { Rotulo, Escolha },
    data() {
      return {
        user: { email: '', password: '', age: 18 },
        message: '',
        features: [],
        product: 'web',
        priorities: [
          { id: 1, name: 'baixa' },
          { id: 2, name: 'moderada' },
          { id: 3, name: 'alta' }
        ],
        priority: 1,
        choice: false,
        sent: false
      }
    },
    methods: {
      sendForm() {
        this.sent = true
      }
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
