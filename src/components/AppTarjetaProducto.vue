<template>


  <div class="container">
    <div class="row">
      <h4>Productos relacionados</h4>
    </div>
    
    <div class="row">
      <div class="col" v-for="productoRelacionado of productosRelacionados">
        <div class="card" style="width: 18rem">
          <div class="card-body" @click="mostrarProducto(productoRelacionado)">
            <h5 class="card-title">{{ productoRelacionado.nombre }}</h5>
            <img class="img" :src="enlace(productoRelacionado)" alt="">
            <p class="card-text">{{ productoRelacionado.descripcion }}</p>
            <div class="producto-relacionado-precio">
              Precio:{{ productoRelacionado.precio }} BOB
            </div>
            <div>
              <div>
                <div
                  v-for="color of productoRelacionado.colores"
                  class="color-box"
                  :style="`background: ${color}`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../node_modules/axios";
export default {
  name: "appTarjetaProducto",
  data() {
    return {
      productosRelacionados: [],
    };
  },
  components: {},
  mounted() {
    this.getProductos();
  },
  methods: {
    getProductos() {
      axios({
        method: "get",
        url: process.env.VUE_APP_RUTA_API + "Productos",
      })
        .then((response) => {
          this.productosRelacionados = response.data;
          console.log(this.productosRelacionados);
        })
        .catch((e) => console.log(e));
    },
    enlace(img) {
      return img.imagen;
    },
    mostrarProducto(producto){
        this.$store.commit('setProducto', producto);
        //console.log(this.$store.state);
    }
  },
};
</script>

<style>
.img{
    width: 50%;
}
</style>
