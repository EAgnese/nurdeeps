<template>
    <header>
      Nurspeed<hr>
      <router-link to="/games">Games</router-link>
      <router-link to="/suggestions">Suggestions</router-link>
    </header>
  <router-view></router-view>
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
    background-color: black;
    margin: 0 0 20px 0px;
    text-align: center;
    width: 100%;
    top : 0;
    font-size: 30px;
    padding: 10px 0 10px 0;
}

header > router-link{
  background-color: black;
}
</style>
