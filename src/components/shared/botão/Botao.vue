<template>
  <button
    @click="disparaAcao()"
    class="botao"
    :class="estiloDoBotao"
    :type="tipo"
  >
    {{ rotulo }}
  </button>
</template>
<script >
import { computed } from "vue";

export default {
  props: ["tipo", "rotulo", "confirmacao", "estilo"],

  methods: {
    disparaAcao() {
      console.log("xixi", this);

      if (this.confirmacao) {
        console.log("1 if");
        if (confirm("Confirma operação?")) {
            console.log("2 if");
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
  },
  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao botao-padrao";
      if (this.estilo == "perigo") return "botao botao-perigo";
    },
  },
};
</script>
<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
