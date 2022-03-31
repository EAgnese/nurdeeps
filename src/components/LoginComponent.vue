<template>
  <form >
      <legend v-if="mode=='in'">Sign in</legend>
      <legend v-else>Sign up</legend>

      <label> Username:</label>
      <input v-model="name" required>

      <label v-if="mode=='up'"> Mail:</label>
      <input v-if="mode=='up'" v-model="email">

      <label> Password:</label>
      <input type="password" required v-model="password"><br>

      <label v-if="mode=='up'"> Confirm Password:</label>
      <input type="password" required v-if="mode=='up'" v-model="confirm_password"> <br>

      <button :class="{'button--disabled' : !validateFields}" @click="sign">Envoyer</button>

      <p v-if="mode=='in'">No account?</p><span v-if="mode=='in'" @click="switchtoSignIn"> Create Account</span>
      <p v-else>Already have an account?</p><span v-if="mode=='up'" @click="switchtoSignUp">Connect</span>
      

  </form>
</template>

<script>
export default {
    data(){
        return{
            mode :"in",
            email : '',
            name : '',
            password : '',
            confirm_password : '',
        }
    },

    computed:{
        validateFields(){
            if (this.mode == "up") {
                return (this.name != "" && this.password != "" && this.confirm_password != "") 
            }
            return (this.name != "" && this.password != "")
        }
    },

    methods: {
        switchtoSignIn(){
            this.mode = "up"
        },
        switchtoSignUp(){
            this.mode = "in"
        },
        sign(){
            const url = "https://api-nurspeed.herokuapp.com/"
            if (this.mode == "up") {
                fetch(url+"users/", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name : this.name,
                        mail: this.email,
                        password:  this.password,
                    })
                }).then( (res) =>{
                    res.json().then((data)=>{     
                        console.log(data)
                        this.$router.push({path:'/'})
                    })
                
                })
            }else {
                console.log(this.password)
                fetch(url+"users/login", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name : this.name,
                        password:  this.password,
                    })
                }).then( (res) =>{
                    if(res.status===200){
                        res.json().then((data)=>{
                            console.log(data)
                            this.$router.push({path:'/'})
                        })
                    }else{
                        if(res.status===401){
                            console.log(res)
                        }
                    }
                   
                })
            }
        },
    }

}
</script>

<style>
legend {
    font-size: 30px;
    background-color: #301B59;
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

span{
    background-color: #402275;
    border: solid 3px;
    border-radius: 10px;
    border-collapse: collapse;
    padding: 2px 3px;
    user-select: none;
    cursor: pointer;
}

label, p{
    background-color: #301B59;
    display:grid;
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

@media (max-width: 800px) {
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
}

</style>