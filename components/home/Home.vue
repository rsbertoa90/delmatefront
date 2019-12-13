<template>
    <div>
        <home-banners></home-banners>
        <homeInfo class="mt-lg-4"></homeInfo>
        <no-ssr>
            <homeOffers></homeOffers> 
        </no-ssr>
    </div>
</template>

<script>
import homeBanners from './banners.vue';
import homeInfo from './info.vue';
import  homeOffers from './offers.vue';
import metaMixin from '../mixins/metadataMixin';
export default {
    mixins:[metaMixin],
    data(){return{
        page:'home'
    }},
    components:{homeOffers,homeBanners,homeInfo},
   
    computed:{

        categories(){
            return this.$store.getters.getNotPaused;
        }
}
    }
</script>
