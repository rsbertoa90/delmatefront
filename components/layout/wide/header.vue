<template>
<div class="header-container">

    <div class="row" syle="border-top 2px solid #ccc;">
         
         <div class="col-2 flex" >
            <router-link to="/" class="left-logo "  v-if="config && config.logo">
                <img :src="imagePath(config.logo)" alt="Mayorista Del Mate">            
            </router-link>
        </div>
        <div class="col-5 flex">
            <search-bar></search-bar>
        </div>
        <div v-if="config && config.wha" class="col-3 phone flex justify-content-end">
            <fa-icon icon="phone" class="icon fucsia"></fa-icon>
            <span>{{config.wha}}</span>
        </div>
        
        <div class="col-1 flex pos-relative mr-1 cart" v-if="config && !config.hide_prices">
            <router-link to="/carrito">
                <fa-icon icon="shopping-cart"></fa-icon>
                <span class="n-items" v-if="list && list.length" > {{list.length}}  </span>
            </router-link>
        </div>

       
       
        
    </div>
    <div class="row  user-menu">
        <user-menu class="col-12  m-0"></user-menu>
    </div>
    
</div>
</template>

<script>

import searchBar from '../search-bar.vue';
import userMenu  from './menu.vue';
export default {
    components:{searchBar,userMenu},
    data(){
        return{
            showSearch:false,
            showMenu:false
        }
    },
  
}
</script>

<style lang="scss" scoped>
.header-container{
    width:99.7vw;
    margin:auto;
    margin-top:30px;
}

img{
    width: 100%;
}
    .n-items{
        position:absolute;
        top:20px;
        right:13px;
        display: flex;
        justify-content: center;
        align-items: center;
        width:30px;
        height: 30px;
        font-size: 1rem;
        z-index:10;
        background-color: #ff0aaf;
        border-radius: 50%;
        color:#fff;

    }

    .pos-relative{
        position:relative;
    }

    .fix-menu{
        position:fixed;
        top:0;
        left:0;
        z-index:300;
    }

    .phone{
        font-size: 2rem;
        .icon{
            margin-top: 10px;
            margin-right:10px;
        }
    }

    .flex{
        display: flex;
        align-items:center;
        justify-content: center;
    }
    .cart{
        border-left:1px solid #ccc;
        font-size:2rem;
        cursor:pointer;
    }

    .user-menu{
    background-color: #b2054f;
    width: 100vw;
    margin-left: -3%;
    padding: 0 5% 0 5%;
    display: flex;
    list-style: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 15px;
    
    overflow:hidden;
}
</style>
