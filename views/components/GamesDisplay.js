app.component('games-display',{
  
    props:{
      games:{
        type: Object,
        required: true
      }
    },

    template:
    /*html*/
    `
    <table>
        <thead>
            <tr>
                <td> hello </td>
                <td> guys </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="game in games">
                <td> {{game.libelle }}</td>
                <td> {{game.type_code}} </td>
            </tr>
        </tbody>
    </table>
    `,
})