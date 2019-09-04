<template>
    <div>
        <div class="row mb-3">
            <div class="col-12 d-flex justify-content-center text-center">
                <h1>Mayorista Del Mate</h1>
            </div>
        </div>
        <home-banners></home-banners>
        <homeInfo class="mt-lg-4"></homeInfo>
        <homeOffers></homeOffers>
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
