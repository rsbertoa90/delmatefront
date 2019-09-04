<template>
    <div v-if="product" class="d-flex flex-column justify-content-center text-center w-100">
        <h1 class="mb-4">{{product.name | ucFirst}}</h1>
        <div class="row">
            <div class="col-12 offset-lg-2 col-lg-4">

                <v-lazy-image v-if="product.images[0]" :src="imagePath(product.images[0])" :alt="product.name">
                </v-lazy-image>
                
                <v-lazy-image v-else :src="noImage" :alt="product.name">
                </v-lazy-image>
            
            </div>
            <div class="col-12  col-lg-4 mt-4 mt-lg-0">
                <info></info>
                <shopButton  class="mt-4" :product="product"></shopButton>
            </div>
        </div>
    </div>
</template>

<script>
import info from './info.vue';
import shopButton from './shop-button.vue';
export default {
    components:{info,shopButton},
    props:['product'],
    metaInfo(){
        return{
            title:this.metatitle,
            meta: [
                { charset: 'utf-8' },
                { vmid: 'description', name: 'description', content: this.metadescription }
            ]
        }
    },
    computed:{

        metatitle(){
            if (this.product )
            {
                return this.product.metatitle ? this.product.metatitle : this.product.name+' por mayor'
            }
            
        },
        metadescription(){
            if (this.product){
                if (this.product.metadescription)
                {
                    return this.product.metadescription;
                }
                else if (this.product.description)
                {
                    return this.product.description;
                }
                else return this.product.name+" "+'por mayor';
                    
            }  
            
        },
        categories(){
            return this.$store.getters.getNotPaused;
        },
      
        

    }

}
</script>

<style scoped>
    img{
        width:100%;
        border:1px solid #868686;
    }
</style>