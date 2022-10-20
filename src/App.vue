<template>
    <app-menu></app-menu>
    <app-producto></app-producto>
    <app-tarjeta-producto></app-tarjeta-producto>
    <app-pie-pag></app-pie-pag>

</template>

<script>
import AppMenu from '@/components/AppMenu.vue';
import AppPiePag from '@/components/AppPiePag.vue';
import AppProducto from '@/components/AppProducto.vue';
import AppTarjetaProducto from '@/components/AppTarjetaProducto.vue';
export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  },
  components: {
    AppMenu,
    AppPiePag,
    AppProducto,
    AppTarjetaProducto
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
