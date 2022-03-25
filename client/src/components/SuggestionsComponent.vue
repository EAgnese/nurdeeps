<template>
   <div >
        Suggestions <br>
        <div id="suggestions-display">
            <SuggestionDisplay v-for="suggestion in getList" :key="suggestion" :suggestion="suggestion"></SuggestionDisplay>
        </div>
    </div> 
</template>
<script>

import SuggestionDisplay from "./SuggestionDisplay.vue"

export default ({
    components:{
        SuggestionDisplay
    },
    data(){
        return {
            list : [            ],
        }
    },

    created(){
        fetch("http://localhost:8000/api/suggestions", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.list = data;
            })
        })
    },
    computed:{
        getList(){
            return this.list
        },
    }
})
</script>