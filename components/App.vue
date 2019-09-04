<template>
    <div class="app-container">
       
        <header>
    
            <app-top-header></app-top-header>
           
        </header>    
       
        <div class="py-4">
            <transition enter-active-class="animated fadeIn fast faster ">
                <keep-alive include="carrito">
                    <router-view></router-view>
                </keep-alive>
            </transition>
            <div style="width:100vw; height: 100px"></div>
            <app-footer></app-footer>
        </div>
         <whatsappBtn v-if="!user || user.role_id > 2 "></whatsappBtn>
         <total-bouncer :total="total" v-if="total"></total-bouncer>
    </div>
</template>

<script>
import appTopHeader from './layout/header.vue'
import totalBouncer from './app/total-bouncer.vue'
import whatsappBtn from './layout/whatsapp.vue';
import AppFooter from './layout/footer.vue';
export default {
    components:{AppFooter,whatsappBtn,totalBouncer,'app-top-header':appTopHeader},
    computed:{
        user(){
            return this.$store.getters.getUser;
        },
        total(){
            return this.$store.getters.getTotal;
        }
    }
}
</script>}

<style lang="scss" scoped>
    .app-container{
       width:98.5vw;
       padding:5%;
       padding-bottom: 0;
       margin-bottom: 0;
       border:1px solid  #ff2080;
       overflow: hidden;

    }
    .back-arrow{
        color:blue;
        margin-left:10%;
        cursor: pointer;
        font-size: 2rem;

    }
</style>
