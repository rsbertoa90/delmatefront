<template>
    <div class="container">   
        <div class="row d-flex justify-content-center text-center">
          <h1>MAYORISTA DEL MATE</h1>
        </div>
        
             
         
             <hr>
             
        <div class="row mt-4" v-for="category in filteredCats" :key="category.name">
            <div class="d-flex justify-content-center text-center col-12 ">
                <div class="relative">
                    <v-lazy-image class="category-image" v-if="category.image" :src="imagePath(category.image)"></v-lazy-image>
                    <h2  class="text-center name">{{category.name|uc}}</h2>
                </div>
            </div>
            <div v-for="(product,i) in notPaused(category.products)" 
                  :key="'product-'+product.id" 
                  class=" flex-wrap col-12 col-lg-3 p-lg-4" >
               <cotizer-productcard :product="product" :first="i == 0"></cotizer-productcard>
            </div>
        </div>
        
      
        <hr>
      
      <!--   <tutorial></tutorial> -->
    </div>
</template>

<script>
 import { mapActions } from 'vuex';
 import { mapGetters } from 'vuex';
    import cotizerProductcard from '../category/product/card.vue';
    import codeSelector from './code-selector.vue';
   import metaMixin from '../mixins/metadataMixin';
  
    import tutorial from './tutorial.vue'
    export default {
        mixins:[metaMixin],
        components : {tutorial,cotizerProductcard,codeSelector},
       
        data(){
            return {
                page:'cotizador',
                selector:{
                    code:'',
                    name:'',
                    variant:null,
                    units:0
                },

                dlist : [],
                
            }
        },

        watch : {
            'selector.code'(){
                var  vm = this;
                var res =false;
                this.categories.forEach(cat => {
                    cat.products.forEach(product => {
                        if (vm.selector.code == product.code){
                            vm.selector.product = product;
                            vm.selector.name = product.name;
                            res = true;
                        }
                    });
                });
                if (!res){
                    vm.selector.product = null;
                    vm.selector.name='';
                }
            },
           
            
        },
        computed: {

            filteredCats()
            {
                let vm=this;
                if(this.categories)
                {
                    return this.categories.filter(c => {
                        let np = vm.notPaused(c.products);
                        if(np && np.length > 1)
                        {
                            return true;
                        }else{return false;}
                       
                    })
                }
            }
       
        },

        methods:
        {
            
             dlistChange(event){
                 
                let variant = this.dlist.find(vari => {
                    return vari.id == event.id;
                });
                if(variant){
                    variant.units = event.units;
                }

            },
             addSelectorvariant(){
                var vm = this;
                if (vm.selector.units > 0 && vm.selector.variant != null ){
                    let prod = this.selector.variant;
                    if (prod.units == undefined)
                    {
                        Vue.set(prod,'units',0);
                    }
                   prod.units = this.selector.units;
                   vm.selector.variant = null;
                   vm.selector.code = '';
                   vm.selector.units = 0;
                   vm.selector.name ='';
                   
                }
            },
        
        },     
    }
</script>

<style scoped lang="scss">
.relative{
    width:310px;
    position: relative;
}
.name{
    position:absolute;
    top:30%;
    left:30%;
    color:#fff;
    background-color: #09879f99;
     padding:5px;
}
.category-image{
    width:310px;

}


 .table,.accordion,.tr,.td,.kalam,.card{
    font-family:  'Kalam', cursive;
}


.white-space-normal{
    white-space: normal;
}
.text-big{
    font-size: 1.5rem;
}
.product-miniature{
    min-width: 200px;
    width: 200px;
    margin-right: 15px;
}
.container{
    
    margin-bottom: 100px;
  
    }

    td{
        white-space:normal;
    }
    input[type="number"]{
        width: 70px;
    }

    


   .btn-link {color : black;}
  
    img{width:100%}

   


    @media(max-width: 600px){

    
        .product-miniature{
    min-width: 100px;
}
        .card-header{
            padding:0;
        }
        .container{
    
            margin-left: -7%;
            width: 100vw;
            padding: 15px;
            }
        .sampleImage{width: 80px;}
        td { white-space :normal;}
        table {
            font-size: 0.66rem;
            font-weight: bold;
        }
       
        .card-body,table th, table td{padding:5px;}
    }
    
    @media(min-width: 600px){
        .sampleImage{width: 150px;}
        table{ font-size: 1rem; font-weight: normal}
        td {white-space: normal;}
        .card-body,.container{padding:1.25rem}
       
    }
   
</style>
