<template>
    <div class="d-flex flex-column align-items-center product-card  justify-content-between h-100" v-if="product">
        <router-link :to="productUrl">
            <h2 class="text-center title justify-content-center">{{product.name | uc}}</h2>
            <div class="image-container">
                <v-lazy-image :src="imagePath(image.url)"></v-lazy-image>
                <div class="price-badge" v-if="config && !config.hide_prices">
                    <v-lazy-image :src="imagePath('/storage/images/app/price-badge.png')"></v-lazy-image>
                    <span class="price">${{product.price|price}}</span>
                </div>
            </div>
        </router-link>
         <shop-button class="mt-4" v-if="config && !config.hide_prices" :product="product"></shop-button>
    </div>    
</template>


<script>
import shopButton from './shop-button.vue';
export default {
    props:['product'],
    components:{
        shopButton
    },
    data(){
        return{
            index:0
        }
    },
    computed:{
        productUrl(){
            let cats = this.$store.getters.getCategories;
            let category = cats.find(c => {
                return c.id == this.product.category_id;
            });
           
            let url = category.slug + '/' + this.product.slug;
            url = url.replace('//','/');
            return url;
        },
        
        config(){
            return this.$store.getters.getConfig;
        },
        image(){
        
            if (this.product.images && this.product.images[this.index])
            {
                return this.product.images[this.index];
            } else{
                return {url:'/storage/images/app/no-image.png'}
            }
        }
    }
}
</script>


<style lang="scss" scoped>
h2{
    font-size: 28px;
    
}
img{
    width:100%;
}

    .title{
        display: flex;
        align-items:center;
        min-height: 90px;
    }

    .product-card{
        height: 100%;
       
    }

    .image-container{
        width:280px;
        height: 280px;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow: hidden;
        position: relative;
        img{
            width: 100%;
        }
        .price-badge{
            position:absolute;
            top:0;
            right:10px;
            width:95px;
            display: flex;
            justify-content: center;
            align-items:center;
            height: 80px;
            .price{
                position: absolute;
                color:#fff;
                font-size: 1.85rem;
            }
        }
    }

</style>
