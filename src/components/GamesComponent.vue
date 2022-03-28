<template>
    <div id="games">
        Games <br>
        <input id="search" v-model="input">
        <div id="games-display">
            <GameDisplay v-for="game in getList" :key="game" :game="game" :input="input"></GameDisplay>
        </div>
    </div>
</template>

<script>

import GameDisplay from "./GameDisplay.vue"

export default ({
    components:{
        GameDisplay
    },
    data(){
        return {
            list : [],
            input : "",
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
    },
    computed:{
        getList(){
            return this.list
        },
        getInput(){
            return this.input
        },
    }
})

</script>
<style>
    #games-display {
        margin: 25px 15%;   
    }
    @media (max-width: 600px) {
        #games-display {
            margin: 25px 1px;    
        }
    }
</style>
