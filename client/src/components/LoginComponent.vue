<template>
  <form>
      <legend>Sign in</legend>
      <label> Username:</label>
      <input id="name" required>
      <label> Password:</label>
      <input type="password" id="password" required><br>
      <input type="button" @click="signIn" value="Envoyer" to="/index">
  </form>
      
  <form>
      <legend>Sign up</legend>
      <label> Mail:</label>
      <input id="new_mail">
      <label> Username:</label>
      <input id="new_name" required>
      <label> Password:</label>
      <input type="password" id="new_password" required>
      <label> Confirm Password:</label>
      <input type="password" id="confirm_password" required> <br>
      <input type="button" @click="signUp" value="Envoyer" to="/index">

  </form>
</template>

<script>
export default {

    methods: {
        signUp(){
            if (!(document.getElementById('confirm_password').value == document.getElementById('new_password').value)){
                window.alert("must be same password")
                return
            }
            if ((document.getElementById('confirm_password').value == "")  || (document.getElementById('new_password').value == "") || (document.getElementById('new_name').value == "")) {
                window.alert("must fill all input")
            }
            fetch("http://localhost:8000/api/users/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name :document.getElementById('new_name').value,
                    mail: document.getElementById('new_mail').value,
                    password: document.getElementById('new_password').value,
                })
            }).then( (res) =>{
                this.$emit('connect',res.cookie["user"])
                this.$router.push({path:'/games'})
            })
        },
        signIn(){
            fetch("http://localhost:8000/api/users/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name :document.getElementById('name').value,
                    password: document.getElementById('password').value,
                })
            }).then( (res) =>{
                this.$emit('connect', res)
                this.$router.push({path:'/games'})
            })

        }
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

label{
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
input[type=button]{
    color : #F2E83A;
    background-color:#231442;
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