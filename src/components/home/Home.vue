
<template>
    <div>
      <h1 class="centralizado">{{ titulo }}</h1>
  <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre por parte do titulo" >
     
  <ul class="lista-fotos">       
        <li class="lista-fotos-item" v-for="foto in fotosComFiltro" :key="foto.titulo">
          <meu-painel :titulo="foto.titulo">
       
            <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
         
            <meu-botao 
           tipo="button" 
           rotulo="REMOVER" 
           @botaoAtivado="remove(foto)"
           :confirmacao="true"
           estilo="perigo"
           ></meu-botao>

          </meu-painel>
          
        </li>
      </ul>
  
    </div>
  </template>
  
  <script>
  import Painel from '../shared/painel/Painel.vue';
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
  import Botao from '../shared/botão/Botao.vue'
  
  export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },
  
    data() {
  
      return {
  
        titulo: 'Alurapic', 
        fotos: [],
        filtro: '',
        mensagem: '',
      }
    },
  computed: {
  fotosComFiltro() {
  
  if(this.filtro){
  let exp = new RegExp(this.filtro.trim(), 'i');
  return this.fotos.filter(foto => exp.test(foto.titulo));
  } else {
    return this.fotos;
    }  
   }  
  },
  // alurapic/src/components/home/Home.vue 
//  código anterior omitido 
  methods: {

    remove(foto) {
      this.$http
        .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
        .then(
          () => {
            let indice = this.fotos.indexOf(foto); // acha a posição da foto na lista
            this.fotos.splice(indice, 1); // a instrução altera o array
            this.mensagem = 'Foto removida com sucesso'
          }, 
          err => {
            this.mensagem = 'Não foi possível remover a foto';
            console.log(err);
          }
        )
    }
  },
// código posterior omitido
    created(){
     let promisse = this.$http.get('http://localhost:3000/v1/fotos');
     promisse.then(res => {res.json().then(fotos=> this.fotos = fotos);
       });
      }
    }
  
  </script>

  
  <style>
  
  .centralizado{
    text-align: center;
  }
  
  .lista-fotos {
    list-style: none;
  }
  
  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }
  
  
  .filtro{
    display: block;
    width: 100%;
  }
  </style>
