<template>
   <div>
        Runs of {{this.$route.params.id}} <br>
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
        }
    },
    created(){
        const url = "http://localhost:8000/api/runs/"+this.$route.params.id
        fetch(url, {
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

</style>