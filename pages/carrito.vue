<template>
    <shoppingCart></shoppingCart>
</template>


<script>
import shoppingCart from '@/components/shoppingCart/ShoppingCart.vue'
import metaMixin from '@/plugins/metadataMixin.js';
export default {
      mixins:[metaMixin],
      name:'carrito',
    components:{shoppingCart}
}
</script>
