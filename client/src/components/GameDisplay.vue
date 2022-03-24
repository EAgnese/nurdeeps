<template>
    <div class="game-container" v-show="isShowed">
          <div class="game-name"> {{this.game.game_libelle}}</div>
          <div class="game-image"> {{this.game.game_image}} </div>
          <div class="game-types"> {{this.game_type_libelle}} </div>
    </div>
</template>

<script>
export default ({
    name: "games-display",
    
    data(){
      return {
        game_type_libelle:"",
      }
    },
  
    props:{
      game:{
        type: Object,
        required: true
      },
      input:{
        type: String,
        required: false
      }
    },

    computed:{
        isShowed(){
          return this.game.game_libelle.toLowerCase().includes(this.input.toLowerCase()) 
        },
        url(){
          return "http://localhost:8000/api/game_types/"+this.game.game_type_code
        }
    },

    created(){
      fetch("http://localhost:8000/api/games", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.list = data;
            })
        })

      fetch(this.url(), {
          method: "GET",
      }).then( (rep) =>{
          rep.json().then((data)=>{
            this.game_type_libelle = data[0].game_type_libelle;
          })
      })
    },
})
</script>
