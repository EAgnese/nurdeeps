app.component('games-display',{
  
    props:{
      games:{
        type: Object,
        required: true
      }
    },

    template:
    /*html*/
    `
        <div id="games-display">
            <div class="game-container" v-for="game in games">
                <div class="game-name"> {{game.libelle }}</div>
                <div class="game-types"> {{game.type_code}} </div>
            </div>
        <div>
    `,
})