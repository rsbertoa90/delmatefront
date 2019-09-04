<template>
    <div class="row" v-if="categories">
        <div class="col-12 col-lg-8">
            <div class="image-container">
                <v-lazy-image :src="imagePath('/storage/images/app/mensajeria.jpg')" alt="envio gratis"></v-lazy-image>
                <div class="overlayed-text">
                    <h2>Envio Gratis!</h2>
                    <h4 class="mt-0">Paga tus productos cuando los recibis!</h4>
                    <h4 class="mt-4">Capital Federal y Gran Buenos Aires</h4>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 d-flex flex-column">
            <div v-for="category in categories" :key="category.name" class="mb-1 category-banner mt-2 mt-lg-0">
                <router-link :to="category.slug" v-if="category.slug">
                    <div class="category-image-container">
                        <v-lazy-image v-if="category.image" :src="imagePath(category.image)" :alt="category.name"></v-lazy-image>
                        <div class="name-container">
                            <h2> {{category.name | ucFirst}} </h2>
                        </div>
                    </div>
                    <div v-if="!category.image" style="border:1px solid #000 ; display:flex;justify-content:center;align-items:center ;width:100%; height:143px">
                        <h2>{{category.name}}</h2>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        categories(){
            return this.$store.getters.getCategories;
        }
    }
}
</script>

<style lang="scss" scoped>

    .category-image-container{
        border:1px solid #868686;
        margin-bottom:22px;
        position:relative;
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


    .image-container{
        position:relative;
        .overlayed-text{
            h2{font-size:3rem;}
            color:#fff;
            position:absolute;
            top:30px;
            left:25px;
            padding:10px;
            background-color: #86868677;
        }
        img{
            width:100%;
        }
    }
       .overlayed-text{
             max-width:65%;
        }

    @media(max-width:600px)
    {
        .category-banner{

        }

        .image-container{
            img{
                    width: 100vw;
                    margin-left: -6%;
            }
         .overlayed-text{
             max-width:65%;
            h2{font-size:2rem;}
            h4{font-size:1.2rem;}
            top:15px;
            left:10px;
            padding:5px;
            background-color: #86868677;
        }
        }
    }
</style>

