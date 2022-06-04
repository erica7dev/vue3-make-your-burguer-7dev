<template>
  <body>
    <div>
      <NavbarVue :alt="app_name" :logo="logo_src" />
    <div>
      <router-view></router-view>
    </div>
    <FooterVue />
    </div>
  </body>
</template>

<script>
import NavbarVue from './components/NavbarVue.vue'
import FooterVue from './components/FooterVue.vue'

export default {
  name: 'App',
  data: function () {
    return {
      logo_src: "/img/logo.png",
      app_name: "logo"
    }
  },
  components: {
    NavbarVue,
    FooterVue
  }
}
</script>

<style>
 * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main-container {
    margin: 50px;
    min-height: 250px;
  }
  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
