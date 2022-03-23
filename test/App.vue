<template>
    <html>
        <head>
            <title>Nurdeeps</title>
            <link rel="stylesheet" href="../assets/style.css">
            <link rel="icon" href="../assets/icon.png">


            <!-- Import Vue -->
            <script src="https://unpkg.com/vue@3.0.11/dist/vue.global.js"></script>
            <!-- Import API -->
            <script src="https://unpkg.com/vue-router@4"></script>

        </head>

        <body>
            <div id="app">
                <header>
                    Il est tres fort<br>
                    <a href="./suggestions.html">SUGGESTIONS</a>
                    <a href="./games.html">JEUX</a>
                </header>
                    <p>
                        <!-- use the router-link component for navigation. -->
                        <!-- specify the link by passing the `to` prop. -->
                        <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
                        <router-link to="/games">Games</router-link>
                        <router-link to="/suggestions">Suggestions</router-link>
                    </p>
                    <!-- route outlet -->
                    <!-- component matched by the route will render here -->
                    <router-view></router-view>
            </div>
        </body>
        <script src="../router.js"></script>
    </html>
</template>

<script src="../router.js"></script>