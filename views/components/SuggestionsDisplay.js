app.component('suggestions-display',{
  
    props:{
      suggestion:{
        type: Object,
        required: true
      },
      input:{
        type: String,
        required: false
      }
    },


    template:
    /*html*/
    `
        <div class="suggestion-container">
            <div class="suggestion-contents"> {{this.suggestion.contents}}</div>
            <div class="suggestion-points"> {{this.suggestion.points}} </div>
            <div class="suggestion-user"> {{this.suggestion.user}} </div>
        </div>
    `,
})