const app = Vue.createApp({
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