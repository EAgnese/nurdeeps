<template>
    <div class="suggestion-container">
        <div class="suggestion-contents"> {{this.suggestion.suggestion_contents}}</div>
        <div class="suggestion-user"> {{this.user_name}} </div>
        <div class="suggestion-points">
            <div class="suggestion-down" @click="downPoints">↑</div>
            <div class="suggestion-num"> {{this.points}} </div>
            <div class="suggestion-up" @click="upPoints">↓</div>
        </div>
    </div>
</template>

<script>

export default ({
    data(){
      return {
        user_name:"",
        points: this.suggestion.suggestion_points
      }
    },
    props:{
      suggestion:{
        type: Object,
        required: true
      },
    },
    created(){
        const urlUserId="http://localhost:8000/api/users/"+this.suggestion.user_id
        fetch(urlUserId, {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.user_name = data[0].user_name;
            })
      })
    },
    method:{
        upPoints(){
            console.log("+1")
            const urlEdit = "http://localhost:8000/api/suggestions/"+this.suggestion.suggestion_code+"/edit"
            fetch(urlEdit, {
                method: "PUT",
                body:{
                    suggestion_contents :this.suggestion.suggestion_contents,
                    suggestion_points: this.suggestion.suggestion_points + 1,
                    user_id: this.suggestion.user_id,
                }
            }).then( () =>{
                this.points += 1 
            })
        },
        downPoints(){
            console.log("-1")
            const urlEdit = "http://localhost:8000/api/suggestions/"+this.suggestion.suggestion_code+"/edit"
            fetch(urlEdit, {
                method: "PUT",
                body:{
                    suggestion_contents :this.suggestion.suggestion_contents,
                    suggestion_points: this.suggestion.suggestion_points -1,
                    user_id: this.suggestion.user_id,
                }
            }).then( () =>{
                this.points -= 1 
            })
        },
    },
})
</script>

<style>
.suggestion-container  {
    border: solid 3px;
    border-radius: 20px;
    border-collapse: collapse;
    padding: 5px;
    font-size: 20px;
}

#suggestions-display{
    margin: 25px 15% 25px 15%;
}

.suggestion-user{
    margin-top: 3px;
    margin-left: 15px;
}


.suggestion-user,.suggestion-points{
    margin-top: 3px;
    margin-left: 15px;
    display: inline;
}

.suggestion-down, .suggestion-up, .suggestion-num{
    display: inline;
    border: solid 2px;
    border-collapse: collapse;
    padding: 1px 5px 2px 5px;
}
.suggestion-down, .suggestion-up{
    user-select: none;
    cursor: pointer;
}
    
.suggestion-container, .suggestion-user, .suggestion-down, .suggestion-up, .suggestion-num, .suggestion-contents{
    
    background-color: #301B59;
}

@media (max-width: 600px) {
  #suggestions-display {
    margin: 25px 1px 25px 1px;    
  }
}
</style>
