<script setup>
import { RouterLink , RouterView } from "vue-router";

const menus = [
    {
        name : 'Accueil',
        URL : '/'
    },
       {
        name : 'Services',
        URL : '/services'
    },
       {
        name : 'Blog',
        URL : '/blog'
    },
       {
        name : 'A propos',
        URL : '/propos'
    },
       {
        name : 'Contact',
        URL : '/contact'
    }
]

</script>


<template>

 <div id="parents">
  
    <div id="aise-bar">
      <nav class="menu">
        <RouterLink v-for="menu in menus" :to= "menu.URL"  class="li">{{menu.name}}</RouterLink>
        <!-- <RouterLink to= "/"  class="li">hfff</RouterLink> -->
    
      </nav>
    </div>
    <div id="view">
<RouterView/>
     
    </div>
  </div>

</template>


<style scoped>


#parents {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Barre de navigation */
#aise-bar {
  background-color: rgb(2, 25, 63);
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
}

/* Liens */
.li {
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s;
}

.li:hover {
  background-color: rgb(68, 121, 122);
}

/* Vue */
#view {
  padding: 20px;
  text-align: center;
}

</style>