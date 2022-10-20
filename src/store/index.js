import { createStore } from 'vuex'

export default createStore({
  state: {
    producto: {},
  },
  getters: {
    getProducto(state){
      return state.producto;
    }
  },
  mutations: {
    setProducto(state, item){
      state.producto = {...item};
    }
    
  },
  actions: {
    addMensajeAction(context){
      context.commit('addMensaje');
    },
    delMensajeAction(context){
      context.commit('delMensaje');
    }
  },
  modules: {
  }
})
