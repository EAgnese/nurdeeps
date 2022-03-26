<template>
  <form>
      <legend>Sign in</legend>
      <label> Username:</label>
      <input required>
      <label> Password:</label>
      <input type="password" required><br>
      <input type="submit">
  </form>
      
  <form>
      <legend>Sign up</legend>
      <label> Mail:</label>
      <input >
      <label> Username:</label>
      <input required>
      <label> Password:</label>
      <input type="password" required>
      <label> Confirm Password:</label>
      <input type="password" required> <br>
      <input type="submit"> 

  </form>
</template>

<script>
export default {

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
input[type=submit]{
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