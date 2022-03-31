<template>
    <div class="run-container">
          <div class="run-time"> {{this.run.run_time}}</div>
          <div class="run-cat"> {{this.run_category}} </div>
          <div class="run-platform"> {{this.platform_libelle}} </div>
          <div class="run-user"> {{this.user}} </div>
    </div>
</template>

<script>


export default {
    data(){
        return {
            run_category:"",
            platform_libelle:"",
            user:"",
            game:""
        }
    },
    
    props:{
        run:{
            type: Object,
            required: true
        },
    },


    created(){
        const url = "https://api-nurspeed.herokuapp.com/"
        const urlPlat = url+"platforms/"+this.run.platform_code
        fetch(urlPlat, {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                
                this.platform_libelle = data[0].platform_libelle;
          })
        })

        const urlUser = url+"users/"+this.run.user_id
        fetch(urlUser, {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.user = data[0].user_name;
          })
        })

        const urlCat = url+"run_categories/"+this.run.run_category_code
        fetch(urlCat, {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.run_category = data[0].run_category_libelle;
          })
        })
    },
}
</script>

<style>


.run-container{
    border: solid 3px;
    border-radius: 20px;
    border-collapse: collapse;
    text-align: center;
    padding: 5px;
    font-size: 20px;
}


.run-container, .run-time, .run-cat , .run-platform,.run-user {    
    background-color: #301B59;
}

</style>