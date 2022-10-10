<template>
    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>
<script >
import { computed } from 'vue';

export default {
    props:['tipo', 'rotulo', 'confirmacao'],
    methods: { disparaAcao(){
        if(this.confirmacao)
        this.$emit('ativado');
    }
 }  
}
computed:{
    estiloDoBotao() {
        if(this.estilo == 'padrao' || !this.estilo) return 'botao botao-padrao'
        if(this.estilo == 'perigo') return 'botao botao-perigo'

    }
}
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
