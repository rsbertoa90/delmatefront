<template>
    <div class="row p-4" v-if="npcategories">
        <div class="col-12">
            <div class="image-container fcc" v-if="config && config.homeimg">
                <h1>
                    <v-lazy-image :src="imagePath(config.homeimg)" alt="Mayorista del date"></v-lazy-image>
                </h1>
             
            </div>
        </div>
        <div class="col-12 d-flex flex-wrapper">
            <div v-for="category in npcategories" :key="category.name" class="mb-1 category-banner mt-4  ">
                
                <router-link :to="category.slug" v-if="category.slug">
                    <div class="category-image-container">
                        <v-lazy-image v-if="category.image" :src="imagePath(category.image)" :alt="category.name"></v-lazy-image>
                       <div class="name-container">
                            <h2> {{category.name | ucFirst}} </h2>
                        </div>
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
    .flex-wrapper{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .category-banner{
         width:330px;
        margin:20px;
       // width:330px;
        //height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
       
        position:relative;

        .category-image-container{
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;
            width:330px;
            overflow: hidden;
            height: 140px;
            border:1px solid #868686;
       
            img{
                width:100%;
                
            }
         .name-container{
            position:absolute;
            top:30%;
            left:20%;
            width:60%;
          
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

        
    
    }

   

    .image-container{
        position:relative;
      //  max-height: 500px;
        //overflow: hidden;
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
                    width: 99vw;
           //         margin-left: -6%;
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

