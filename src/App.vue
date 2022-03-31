<template>
    <header>
      Nurspeed<hr>
      <div class="flex-boi">
        <router-link to="/admin" id="admin" v-if="this.isAdmin">Admin</router-link>
        <router-link to="/games">Games</router-link>
        <router-link to="/suggestions">Suggestions</router-link>
        <router-link to="/login" class="login" v-if="this.isShowed">Login</router-link>
        <div class="login" v-if="!this.isShowed" @click="disconnect">Disconnect</div>
      </div>
    </header>
    <router-view></router-view>
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
    connection(data){
      this.isShowed = false
      this.isAdmin = data[1]
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
  background-color: #1a1a1a;
  text-align: center;
  width: 100%;
  padding: 10px 0 10px 0;   
}

.flex-boi > a, .login{
  background-color: #1a1a1a;
  border: solid 3px;
  border-radius: 2px;
  padding: 0 2px 0 2px;
  border-collapse: collapse;
  text-align: center;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  margin: 0 2px;
}

.flex-boi {
  background-color: #1a1a1a;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
}

#admin{
  margin-left: 15px;
  position: absolute;
  left: 10px;
}

.login{
  margin-right: 15px;
  position: absolute;
  right: 10px;
}

p {
  text-align: center;
}

@media (max-width: 800px) {
  #admin{
    margin-left: 0px;
    position: static;
  }

  .login{
    margin-right: 0px;
    position: static;
  }

  .flex-boi > a{
    text-align: center;
    font-size: 20px;
    display:grid;
    margin: 2px 0;
  }
  .flex-boi {
    flex-direction: column;
    padding: 0 100px;
  }
  footer{
    font-size: 20px;
  }

  hr{
    display: none;
  }

}

@media (min-width: 800px) {
  hr{
    display:inherit;
  } 
}


</style>
