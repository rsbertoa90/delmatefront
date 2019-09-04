<template>
    <div class="row" style="border-top:2px solid #ccc;">
         <div class="col-5 p-4">
            <router-link to="/" class="left-logo " >
                <img :src="imagePath('/storage/images/app/logo.png')" alt="Mayorista Del Mate">            
            </router-link>
        </div>

        <div class="col-7 d-flex justify-content-end align-items-center p-4">
            <div class="p-2">
                <fa-icon icon="search" @click="showSearch = !showSearch"></fa-icon>
            </div>
            <div class="p-2">
                <fa-icon icon="bars" @click="showMenu = true"></fa-icon>
            </div>
            <div class="p-2 pos-relative mr-1">
                <router-link v-if="config && ! config.hide_prices" to="/carrito" class="text-black" style="color:#000">
                    <fa-icon icon="shopping-cart"></fa-icon>
                    <span class="n-items" v-if="list && list.length"> {{list.length}} </span>
                </router-link>
            </div>
        </div>
         <div class="header-line"></div>
        <transition enter-active-class="animated slideInLeft fast faster">
            <div class="col-12" v-if="showSearch">
                <search-bar></search-bar>
            </div>
        </transition>
        <transition enter-active-class="animated slideInLeft fast faster">
            <div class="col-7 fix-menu" v-if="showMenu">
                <userMenu  @close="showMenu= !showMenu" ></userMenu>
                
            </div>
        </transition>
       
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
    computed:{
        user(){
            return this.$store.getters.getUser;
        },
        list(){
            return this.$store.getters.getList;
        },
        config(){
            return this.$store.getters.getConfig;
        }
    }
}
</script>

<style lang="scss" scoped>
.header-line{
    width:100vw;
    height: 2px;
    background-color:#868686;
}
img{
    width: 100%;
}
    .n-items{
        position:absolute;
        top:0;
        right:-5px;
        display: flex;
        width:15px;
        height: 15px;
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
        padding:0;
    }
</style>
