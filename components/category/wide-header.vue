<template>
    <div class="ribbon">
        <div class="image-container">
            <v-lazy-image :src="imagePath(category.image)" :alt="category.name"></v-lazy-image>
        </div>
        <h1 class="name">{{category.name | ucFirst}}</h1>
        <div class="col-2"></div>
    </div>    
</template>

<script>
export default {
    props:['category']
}
</script>


<style lang="scss" scoped>
    .ribbon{
        .name{
            color:#fff;
            align-self:center;
        }
        height:60px;
        width:100%;
        background-color: #09879f;
        display:flex;
        justify-content: space-around;
        .image-container{
            width: 250px;
            align-self: center;
            img{
                width:100%
            }
        }
    }
</style>
