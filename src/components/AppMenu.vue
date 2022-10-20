<template>
    <div id="pagina">
            <nav class="navbar navbar-expand-lg " v-bind:style="{ backgroundColor: configuracionPagina.menuColor}">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{{configuracionPagina.marca}}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-for="menu of configuracionPagina.menus">{{menu.etiqueta}}</li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
  

<script>
export default {
    name: 'appMenu',
    data(){
        return{
            configuracionPagina: {
                marca: "MegaDron",
                menuColor: "lightblue",
                // precioEstilos: "background: orangered; color: white; font-weight: bold",
                menus: [
                    {
                        etiqueta: "Inicio ",
                        url: "?"
                    },
                    {
                        etiqueta: " Tienda",
                        url: "?"
                    }
                ]
            }

        }
    },
    
    components: {

    }
}
</script>
  

<style>
</style>