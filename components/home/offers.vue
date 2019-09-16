<template>
    <div class="row mt-4 d-flex align-items-stretch">
        <div v-for="product in offers" :key="product.id" class="col-12 col-lg-3 p-2 mt-2">
            <div class="shadow">
                <productCard :product="product"></productCard>
            </div>
        </div>
    </div>
</template>

<script>
import productCard from '../category/product/card.vue';
export default{
    components:{productCard},
    computed:{
        offers(){
            return this.$store.getters.getOffers;
        },
        categories(){
            return this.$store.getters.getCategories;
        }
    },
    methods:{
        getUrl(product){
            let category = this.categories.find(c => {
                return c.id === product.category_id;
            });

            let res = category.slug + '/' + product.slug;
            res = res.replace('//','/');

            return res;
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .shadow{
        box-shadow: 0px 5px 10px #0006;
    }
</style>

