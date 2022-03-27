<template>
    <header>
      Nurspeed<hr>
      <router-link to="/admin" id="admin" v-if="this.isAdmin">Admin</router-link>
      <router-link to="/games">Games</router-link>
      <router-link to="/suggestions">Suggestions</router-link>
      <router-link to="/login" class="login" v-if="this.isShowed">Login</router-link>
      <div class="login" v-if="!this.isShowed" @click="disconnect">Disconnect</div>
    </header>
  <router-view @connect="connection(cookie)"></router-view>
    <footer>
      dévelopé par Eri AGNESE
    </footer>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data(){
    return{
      isShowed : true,
      isAdmin : false
    }
  },
  methods: {
    connection(cookie){
      this.isShowed = false
      this.isAdmin = cookie.isAdmin
    },
    disconnect(){
      this.isShowed = true
      this.isAdmin = false
    }
  }
}
</script>

<style>

@font-face{
    font-family : "conthrax";
    src: url(assets/conthrax.ttf) ;
}   
* {
    font-family: "conthrax", sans-serif;
    box-sizing: border-box;
    color : #F2E83A;
    background-color:#231442;
}

body{
  margin: 0;
}

hr{
  height: 3px;
  border: none;
  background-color : #F2E83A;
}

header{
  top : 0;
  font-size: 30px;
  margin: 0 0 20px 0px;
}

footer {
  bottom : 0;
  margin: 20px 0 0px 0px;
}

header, footer{
  background-color: black;
  text-align: center;
  width: 100%;
  padding: 10px 0 10px 0;   
}

header > a, .login{
  background-color: black;
  border: solid 3px;
  border-radius: 2px;
  padding: 0 2px 0 2px;
  border-collapse: collapse;
  text-align: center;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
}

#admin{
  margin-left: 15px;
  float: left;
}

.login{
  margin-right: 15px;
  float: right;
}

p {
  text-align: center;
}

@media (max-width: 600px) {
  #admin{
    margin-left: 0px;
    float: none;
  }

  #login{
    margin-right: 0px;
    float: none;
  }

  header > a{
    background-color: black;
    border: solid 3px;
    border-radius: 2px;
    padding: 0 2px 0 2px;
    border-collapse: collapse;
    text-align: center;
    font-size: 20px;
    user-select: none;
    text-decoration: none;
    display:grid;
  }
}
  footer{
    font-size: 20px;
  }

  hr{
    display: none;
  }

@media (min-width: 600px) {
  hr{
    display:inherit;
  } 
}


</style>
