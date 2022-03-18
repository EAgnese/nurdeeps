const app = Vue.createApp({
    data(){
        return {
            list : [
                {
                    code : 0,
                    libelle : "Elden Ring",
                    image : "",
                    type_code :5,
                },
                {
                    code : 1,
                    libelle : "Dark Souls",
                    image : "",
                    type_code :5,
                },
                {
                    code : 2,
                    libelle : "Mario",
                    image : "",
                    type_code :5,
                },
            ],
            input : "",
        }
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