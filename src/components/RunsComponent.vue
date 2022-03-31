<template>
   <div>
        Runs of {{this.game}} <br>
        <div id="runs-display">
            <RunDisplay v-for="run in getList" :key="run" :run="run"></RunDisplay>
        </div>
        <form>
            <label> Time:</label><br>
            <input v-model="time" required><br>

            <label> Run Category:</label><br>
            <div class="runcat" v-for="run_cat in getListRC" :key="run_cat">
                <input type="radio" v-model="runcat" name="runcat"  :value="run_cat.run_category_libelle"> {{run_cat.run_category_libelle}} 
            </div>
            <label> Platform:</label><br>
            <div class="plat" v-for="plateform in getListP" :key="plateform" >
                <input type="radio" v-model="plat" name="plat" :value="plateform.platform_libelle"> {{plateform.platform_libelle}} 
            </div>
                
            <br>
            <button :class="{'button--disabled' : !validateFields}" @click="postRun">Envoyer</button>
        </form>
    </div>
</template>

<script>

import RunDisplay from "./RunDisplay.vue"

export default {
    components:{
        RunDisplay
    },
    methods:{
        postRun() {
            fetch("https://api-nurspeed.herokuapp.com/runs/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    time : this.time,
                    game : this.$route.params.id,
                    category : this.runcat,
                    platform : this.plat,
                    //user_id : recup info dans cookie,
                })
            }).then( () =>{})
        }
    },
    data(){
        return {
            list : [],
            listP: [],
            listRC: [],
            game: "",
            time: "",
            plat: "",
            runcat: "",
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

        fetch(url + "platforms/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.listP = data;
            })
        })

        fetch(url + "run_categories/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.listRC = data;
                console.log(this.listRC)
            })
        })
    },
    computed:{
        getList(){
            return this.list
        },
        getListP(){
            return this.listP
        },
        getListRC(){
            return this.listRC
        },
        validateFields(){
            return (this.time != "" && this.runcat != "" && this.plat != "")
        }
    }
}
</script>

<style scoped>
#runs-display {
    margin: 25px 15% 25px 15%;   
}

form {
    font-size: 20px;
    border: solid 3px;
    border-radius: 20px;
    border-collapse: collapse;
    text-align: center;
    background-color: #301B59;
    margin: 25px 25% 25px 25%;
    padding: 10px;
}

label, p, .plat, .runcat{
    background-color: #301B59;
}

input{
    margin-bottom: 20px;
    background-color: rgb(228, 228, 228);
    color: #797106;
    font-size: 15px;
    margin: 2px;
}
.button--disabled{
    color : #797106;
    background-color:#130422;

}
button{
    color : #F2E83A;
    background-color:#231442;
    cursor: pointer;
    font-size: 15px;
}

@media (max-width: 600px) {
    form {
        font-size: 18px;
        border: solid 3px;
        border-radius: 20px;
        border-collapse: collapse;
        text-align: center;
        background-color: #301B59;
        margin: 25px 1px 25px 1px;
        padding: 10px;
    }

    legend {
        font-size: 25px;
        background-color: #301B59;
    }
    #runs-display {
        margin: 25px 1px 25px 1px;    
    }
}
</style>