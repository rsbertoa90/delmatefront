<template>
    <div class="row" v-if="filteredProducts">
        <div v-for="product in filteredProducts" 
                  :key="product.name" 
                  class=" flex-wrap col-12 col-lg-3 p-lg-4" >
               <product-card :product="product"></product-card>
        </div>
    </div>
</template>


<script>
import productCard from '../category/product/card.vue';
import metaMixin from '../mixins/metadataMixin';
export default {
    mixins:[metaMixin],
    components:{productCard},
    data(){
        return{
            page:'busqueda'
        }
    },
    computed:{
       
        searchTerm(){
            return this.$store.getters.getSearchTerm;
        },
       
        categories(){
            return this.$store.getters.getNotPaused;
        },
        products(){
            let res = [];
            if(this.categories){
                this.categories.forEach(c => {
                    res = res.concat(c.products);
                });
            }
            return res;
        },
         filteredProducts(){
             if(this.searchTerm && this.searchTerm.length > 1){
                 let terms = this.searchTerm.split(' ');
                 let res = [];
                 
                 this.products.forEach(prod => {
                     let include = true;
                     terms.forEach(term => {
                         if (include && !this.searchComparision(term,prod))
                         {
                           
                             include = false;
                         }
                     });
                     if (include){
                         res.push(prod);
                     }
                 });
                 
                 return res;      
             }
        },
    },
    methods: {
        searchComparision(term,prod){
                  let prodName = prod.name.toLowerCase().trim();
                  term = term.toLowerCase().trim();

                  let cate = this.categories.find(c => {
                      
                      return c.id === prod.category_id;
                  });
                
                 
                    
                    let categoryName = cate.name.toLowerCase().trim();
                    
                    let code = prod.code.toLowerCase().trim();

                    if (
                        prodName.indexOf(term) > -1
                        || categoryName.indexOf(term) > -1
                        || code.indexOf(term) > -1
                    ){return true;}
                    else{return false;}
                  }
            
            
    },
}
</script>
