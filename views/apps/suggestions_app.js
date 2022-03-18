const app = Vue.createApp({
    data(){
        return {
            list : [
                {
                    code : 0,
                    contents : "Il faudrait peut-être rajouter le jeu The Legend of Zelda: Breath of the wild",
                    points :50,
                    user:"Ganondorf",
                },
                {
                    code : 1,
                    contents : "il é ou Naruto ???????",
                    points :1,
                    user:"xXxDarkSasukedu91xXx",
                },
                {
                    code : 2,
                    contents : "Il est très fort",
                    points :35,
                    user:"Bigflo",
                },
            ],
        }
    },
    computed:{
        getList(){
            return this.list
        },
    }
})