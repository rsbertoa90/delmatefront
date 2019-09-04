<template>
    <div class="w-100">
        <button v-if="!product.units" class="btn btn-info btn-block"  @click="addToCart">
            <fa-icon icon="shopping-cart"></fa-icon>
            <span> Agregar al carrito </span>
        </button>

        <div v-if="product.units" class="d-flex mt-2 justify-content-center">
            <fa-icon icon="shopping-cart" class="cart-icon"></fa-icon>
            <div class="d-flex justify-content-center">
                <span class="btn btn-outline-info" @click="product.units--"> <fa-icon icon="minus"></fa-icon> </span>
                <input type="number" min="1" class="form-control text-center w-50" v-model.lazy="product.units">
                <span class="btn btn-outline-info" @click="product.units++"> <fa-icon icon="plus"></fa-icon> </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['product'],
    methods:{
        addToCart()
        {
            this.$set(this.product,'units',1)
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-icon {
    font-size: 2rem;
    margin-right:30px;

}
</style>
