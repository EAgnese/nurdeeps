<template>
    <header>
      Nurspeed<hr>
      <router-link to="/admin" id="admin">Admin</router-link>
      <router-link to="/games">Games</router-link>
      <router-link to="/suggestions">Suggestions</router-link>
      <router-link to="/login" id="login">Login</router-link>
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

header > a{
  background-color: black;
  border: solid 3px;
  border-radius: 2px;
  padding: 0 2px 0 2px;
  border-collapse: collapse;
  text-align: center;
  user-select: none;
  text-decoration: none;
}

#admin{
  margin-left: 15px;
  float: left;
}

#login{
  margin-right: 15px;
  float: right;
}

p {
  text-align: center;
}

</style>
