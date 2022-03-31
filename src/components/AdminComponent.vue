<template>
    <div>
        <h1>Admin</h1> 
        <p>games</p>

        <form>
            <label> Name:</label>
            <input v-model="name" required>
            <label> Image:</label>
            <input v-model="image" required>
            <label> Game type:</label>
            <input v-model="type" required> <br>
            <button :class="{'button--disabled' : !validateFieldsG}" @click="postGame">Envoyer</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Game type</th>
                    <th>Del</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in getGamesList" :key="game">
                    <td>{{game.game_code}}</td>
                    <td>{{game.game_libelle}}</td>
                    <td>{{game.game_image}}</td>
                    <td>{{game.game_type_code}}</td>
                    <td class="del " @click="supprG">X</td>
                </tr>
            </tbody>
        </table>

        <p>game types</p>

        <form>
            <label> Game type:</label>
            <input v-model="game_type" required> <br>
            <button :class="{'button--disabled' : !validateFieldsGT}" @click="postGameType">Envoyer</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Del</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game_type in getGameTypesList" :key="game_type">
                    <td>{{game_type.game_type_code}}</td>
                    <td>{{game_type.game_type_libelle}}</td>
                    <td class="del " @click="supprGT">X</td>
                </tr>
            </tbody>
        </table>

        <p>platforms</p>

        <form>
            <label> Platform:</label>
            <input v-model="platform" required> <br>
            <button :class="{'button--disabled' : !validateFieldsP}" @click="postPlat">Envoyer</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Del</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="platform in getPlatformsList" :key="platform">
                    <td>{{platform.platform_code}}</td>
                    <td>{{platform.platform_libelle}}</td>
                    <td class="del " @click="supprP">X</td>
                </tr>
            </tbody>
        </table>
        
        <p>runs</p>
        
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Time</th>
                    <th>Run category</th>
                    <th>Game</th>
                    <th>Platform</th>
                    <th>User</th>
                    <th>Del</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="run in getRunsList" :key="run">
                    <td>{{run.run_code}}</td>
                    <td>{{run.run_time}}</td>
                    <td>{{run.run_category_code}}</td>
                    <td>{{run.game_code}}</td>
                    <td>{{run.platform_code}}</td>
                    <td>{{run.user_id}}</td>
                    <td class="del " @click="supprR">X</td>
                </tr>
            </tbody>
        </table>
        
        <p>run categories</p>

        <form>
            <label> Run categories:</label>
            <input v-model="run_cat" required> <br>
            <button :class="{'button--disabled' : !validateFieldsRC}" @click="postRunCat">Envoyer</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Del</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="run_cat in getRunCatsList" :key="run_cat">
                    <td>{{run_cat.run_category_code}}</td>
                    <td>{{run_cat.run_category_libelle}}</td>
                    <td class="del " @click="supprRC">X</td>
                </tr>
            </tbody>
        </table>
        
        <p>users</p>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Points</th>
                    <th>Del</th>
                    <td class="del " @click="supprU">X</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in getUsersList" :key="user">
                    <td>{{user.user_id}}</td>
                    <td>{{user.user_name}}</td>
                    <td>{{user.user_mail}}</td>
                    <td>{{user.user_points}}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            gamesList : [],
            gameTypesList : [],
            platformsList : [],
            runsList : [],
            runCatsList : [],
            usersList : [],
            name : "",
            type : "",
            image : "",
            game_type : "",
            platform : "",
            run_cat : "",
        }
    },
    created(){
        const url = "https://api-nurspeed.herokuapp.com/"
        fetch("https://api-nurspeed.herokuapp.com/games/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.gamesList = data;
            })
        })

        fetch(url+"game_types/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.gameTypesList = data;
            })
        })

        fetch(url+"platforms/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.platformsList = data;
            })
        })

        fetch(url+"runs/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.runsList = data;
            })
        })

        fetch(url+"run_categories/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.runCatsList = data;
            })
        })

        fetch(url+"users/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.usersList = data;
            })
        })
    },
    computed:{
        getGamesList(){
            return this.gamesList
        },
        getGameTypesList(){
            return this.gameTypesList
        },
        getPlatformsList(){
            return this.platformsList
        },
        getRunsList(){
            return this.runsList
        },
        getRunCatsList(){
            return this.runCatsList
        },
        getUsersList(){
            return this.usersList
        },
        getInput(){
            return this.input
        },
        validateFieldsG(){
            return (this.name != "" && this.type != "" && this.image != "")
        },
        validateFieldsGT(){
            return (this.game_type != "")
        },
        validateFieldsP(){
            return (this.platform != "")
        },
        validateFieldsRC(){
            return (this.run_cat != "")
        },
    },
    methods: {
        postGame(){
            if (!this.validateFieldsG){
                return
            }
            fetch("https://api-nurspeed.herokuapp.com/games/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    libelle : this.name,
                    image: this.imag,
                    type_code: this.type,
                })
            }).then( () =>{})
        },
        postGameType(){
            if (!this.validateFieldsG){
                return
            }
            fetch("https://api-nurspeed.herokuapp.com/game_types/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    libelle : this.game_type,
                })
            }).then( () =>{})
        },
        postPlat(){
            if (!this.validateFieldsG){
                return
            }
            fetch("https://api-nurspeed.herokuapp.com/platforms/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    libelle : this.run_cat,
                })
            }).then( () =>{})
        },
        postRunCat(){
            if (!this.validateFieldsG){
                return
            }
            fetch("https://api-nurspeed.herokuapp.com/run_categories/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    libelle : this.name,
                })
            }).then( () =>{})
        },


        supprG(){
            fetch("https://api-nurspeed.herokuapp.com/games/", {
                method: "DELETE",
            }).then( () =>{
                fetch("https://api-nurspeed.herokuapp.com/games/", {
                    method: "GET",
                    }).then( (rep) =>{
                        rep.json().then((data)=>{
                            this.gamesList = data;
                    })
                })
            })
        },
        supprGT(){
            fetch("https://api-nurspeed.herokuapp.com/game_types/", {
                method: "DELETE",
            }).then( () =>{
                fetch("https://api-nurspeed.herokuapp.com/"+"game_types/", {
                    method: "GET",
                }).then( (rep) =>{
                    rep.json().then((data)=>{
                        this.gameTypesList = data;
                    })
                })
            })
        },
        supprP(){
            fetch("https://api-nurspeed.herokuapp.com/platforms/", {
                method: "DELETE",
            }).then( () =>{
                fetch("https://api-nurspeed.herokuapp.com/"+"platforms/", {
                    method: "GET",
                }).then( (rep) =>{
                    rep.json().then((data)=>{
                        this.platformsList = data;
                    })
                })
            })
        },
        supprR(){
            fetch("https://api-nurspeed.herokuapp.com/runs/", {
                method: "DELETE",
            }).then( () =>{
                fetch("https://api-nurspeed.herokuapp.com/"+"runs/", {
                    method: "GET",
                }).then( (rep) =>{
                    rep.json().then((data)=>{
                        this.runsList = data;
                    })
                })
            })
        },
        supprRC(){
            fetch("https://api-nurspeed.herokuapp.com/run_categories/", {
                method: "DELETE",
            }).then( () =>{
                fetch("https://api-nurspeed.herokuapp.com/"+"run_categories/", {
                    method: "GET",
                }).then( (rep) =>{
                    rep.json().then((data)=>{
                        this.runCatsList = data;
                    })
                })
            })
        },
        supprU(){
            fetch("https://api-nurspeed.herokuapp.com/users/", {
                method: "DELETE",
            }).then( () =>{
                fetch("https://api-nurspeed.herokuapp.com/"+"users/", {
                    method: "GET",
                }).then( (rep) =>{
                    rep.json().then((data)=>{
                        this.usersList = data;
                    })
                })
            })
        }, 
    }
}
</script>

<style>
h1{
    text-align: center;
}
table, th, td{
    margin:auto;
    border: solid;
    border-collapse: collapse;
    padding: 2px;
    background-color: #301B59;
    text-align: center;
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

.del{
    cursor: pointer;
    user-select: none;
}

@media (max-width: 600px) {
    h1{
    text-align: center;
}

    table {
        margin:auto;
        border: solid;
        border-collapse: collapse;
        padding: 2px;
        background-color: #301B59;
        text-align: center;
        font-size: 15px
    }

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