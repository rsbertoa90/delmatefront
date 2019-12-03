<template>
    <div v-if="product" class="d-flex flex-column justify-content-center text-center w-100">
        <h1 class="mb-4">{{product.name | ucFirst}}</h1>
        <div class="row">
            <div class="col-12 offset-lg-2 col-lg-4">
                <div class="img-container" @click="show">
                    <v-lazy-image v-if="product.images[0]" :src="imagePath(product.images[0])" :alt="product.name">
                    </v-lazy-image>
                    
                    <v-lazy-image v-else :src="noImage" :alt="product.name">
                    </v-lazy-image>
                    
                    <div class="price-badge" v-if="config && !config.hide_prices">
                        <v-lazy-image :src="imagePath('/storage/images/app/price-badge.png')"></v-lazy-image>
                        <span class="price">${{product.price|price}}</span>
                    </div>
                </div>
            
            </div>
            <div class="col-12  col-lg-4 mt-4 mt-lg-0">
                <info></info>
                <shopButton  class="mt-4" :product="product"></shopButton>
            </div>
        </div>
        <imgmodal :product="product" ref="modal"></imgmodal>
    </div>
</template>

<script>
import info from './info.vue';
import imgmodal from './Img-modal.vue';
import shopButton from './shop-button.vue';
export default {
    components:{info,shopButton,imgmodal},
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
    methods:{
         show(){
              let product=this.product;
                if (product.images[0]){
                   
                    let element = this.$refs.modal.$el;
                  
                    $(element).modal('show');
                }
                else
                {
                    var content = document.createElement("img");
                    $(content).attr('src',this.noImage);
                    content.style.width = '100%';
                    swal({content : content});
                }
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

<style scoped lang="scss">
    img{
        width:100%;
       
    }

     .price-badge{
            position:absolute;
            top:0;
            right:10px;
            width:110px;
            height: 110px;
            display: flex;
            justify-content: center;
            align-items:center;
            .price{
                position: absolute;
                color:#fff;
                font-size: 1.85rem;
            }
        }

        .img-container{
            position:relative;
            box-shadow: 0px 5px 10px #0006;
        }
</style>