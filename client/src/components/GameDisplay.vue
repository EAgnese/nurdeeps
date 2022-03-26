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
    },

    created(){
      const url = "http://localhost:8000/api/game_types/"+this.game.game_type_code
      fetch(url, {
          method: "GET",
      }).then( (rep) =>{
          rep.json().then((data)=>{
            this.game_type_libelle = data[0].game_type_libelle;
          })
      })
    },
})
</script>

<style>
#search{
    margin-bottom: 20px;
    background-color: rgb(228, 228, 228);
    color: #797106;
    font-size: 15px;
}

#app{
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
}

.game-container{
    border: solid 3px;
    border-radius: 20px;
    border-collapse: collapse;
    text-align: center;
    cursor:pointer;
    padding: 5px;
    font-size: 20px;
}

#games-display {
    margin: 25px 15% 25px 15%;
    
}

.game-container, .game-name, .game-image , .game-types {
    
    background-color: #301B59;
}
</style>
