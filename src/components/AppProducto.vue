<template>
  <div v-if="Object.keys(producto).length > 0" class="container">
    <div class="row">
      <h3>{{ producto.nombre }}</h3>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4">
        <img style="width: 100%" :src="producto.imagen" alt="" />
      </div>
      <div class="col-12 col-sm-6 col-md-8">
        <h6> {{producto.descripcion}} </h6>
        <div class="p-3 mb-2 text-white" style="background-color: gray">
          Precio: {{ producto.precio }} BOB
        </div>
        <h5>Color</h5>

        <div v-for="color of producto.colores" @click="seleccionarColor(color)" class="color-box clic" :style="`background: ${color}`"></div>

        <h5>Cantidad</h5>

        <div class="quantity">
          <button @click="reducirCantidad">-</button>
          <div>{{ pedido.cantidad }}</div>
          <button @click="incrementarCantidad">+</button>
        </div>
        <div class="buy-box">
          <button
            type="button"
            class="btn btn-primary"
            @click="comprar(producto)"
            :disabled="pedido.cantidad < 1 || !pedido.colorSeleccionado"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "appProducto",
  data() {
    return {
      pedido: {
        id: null,
        colorSeleccionado: null,
        cantidad: 1,
      },
    };
  },
  computed: {
    ...mapGetters({
      producto: "getProducto",
    }),
  },
  mounted() {
    console.log(this.productoSeleccionado);
  },
  methods: {
    incrementarCantidad() {
      this.pedido.cantidad++;
    },
    reducirCantidad() {
      if (this.pedido.cantidad > 1) {
        this.pedido.cantidad--;
      }
    },
    seleccionarColor(color) {
      this.pedido.colorSeleccionado = color;
    },
    comprar(producto) {
  
      this.pedido.id = producto.id;
      alert(`Pedido: ID: ${this.pedido.id}, Color: ${this.pedido.colorSeleccionado}, Cantidad: ${this.pedido.cantidad}`);
      
      
    },
  },
  components: {},
};
</script>

<style></style>
