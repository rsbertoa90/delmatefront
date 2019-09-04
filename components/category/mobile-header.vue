<template>
    <div v-if="category">
        <div class="category-image-container">
                <v-lazy-image v-if="category.image" :src="category.image" :alt="category.name"></v-lazy-image>
                <div class="name-container">
                    <h2> {{category.name | ucFirst}} </h2>
                </div>
        </div>
        <div v-if="!category.image" style="border:1px solid #000 ; display:flex;justify-content:center;align-items:center ;width:100%; height:143px">
            <h2>{{category.name}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props:['category']
}
</script>


<style lang="scss" scoped>

    .category-image-container{
        border:1px solid #868686;
        margin-bottom:22px;
        position:relative;
        width:100%;
        img{
            width:100%;
        }
        .name-container{
            position:absolute;
            top:30%;
            left:25%;
            width:50%;
          
            justify-content: center;
           
            h2{
                display: flex;
                justify-content: center;
                text-align:center;
                padding:5px;
                background-color: #09879f99;
                color:#fff;
                border-radius:3%;
            }
        }

    }


   
    
</style>

