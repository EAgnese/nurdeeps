app.component('games-display',{
  
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
          return this.game.libelle.toLowerCase().includes(this.input.toLowerCase()) 
        }
    },

    template:
    /*html*/
    `
        <div class="game-container" v-show="isShowed">
            <div class="game-name"> {{this.game.libelle}}</div>
            <div class="game-types"> {{this.game.type_code}} </div>
        </div>
    `,
})