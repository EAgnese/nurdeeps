<template>
   <div>
        Runs of {{this.game}} <br>
        <div id="runs-display">
            <RunDisplay v-for="run in getList" :key="run" :run="run"></RunDisplay>
        </div>
    </div>
</template>

<script>

import RunDisplay from "./RunDisplay.vue"

export default {
    components:{
        RunDisplay
    },
    data(){
        return {
            list : [],
            game: "",
        }
    },
    created(){
        const url = "https://api-nurspeed.herokuapp.com/"
        const urlGame = url + "games/" +this.$route.params.id
        fetch(urlGame, {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.game = data[0].game_libelle;
            })
        })
        const urlRuns = url + "runs/game/" +this.$route.params.id
        fetch(urlRuns, {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.list = data;
            })
        })
    },
    computed:{
        getList(){
            return this.list
        },
    }
}
</script>

<style>
#runs-display {
    margin: 25px 15% 25px 15%;   
}
@media (max-width: 600px) {
  #runs-display {
    margin: 25px 1px 25px 1px;    
  }
}
</style>