<template>
    <div class="row">
        <div class="col-12">
            <h2>Descripciones y metadata de Categorias</h2>
            <hr>
        </div>
        
        <div class="col-12 col-lg-4 d-flex flex-column scroll-y">
            <button v-for="category in categories" 
                    :key="category.id"
                    @click="selected=category"
                    class="btn btn-block bg-first white-bold"
                    :class="{'bg-focus' : selected == category}">
                    {{category.name}}
            </button>
            <button class="btn btn-block btn-info mt-4" @click="create">
                Crear Nueva Categoria
            </button>
        </div>


        <div class="col-12 col-lg-8">
            <div v-if="selected">
                <div class="category-banner">
                    <div class="category-image-container">
                        <v-lazy-image v-if="selected.image" :src="imagePath(selected.image)" :alt="selected.name"></v-lazy-image>
                        <div class="name-container">
                            <h2> {{selected.name | ucFirst}} </h2>
                        </div>
                    </div>
                </div>
                <div class="p-2 row mt-4">
                    <div>
                        <span class="text-info bigtext" v-if="selected.paused">PAUSADA</span>
                        <br>
                        <button class="btn btn-info"  @click="togglePause(selected)" v-if="!selected.paused">Pausar</button>
                        <button class="btn btn-success" @click="togglePause(selected)" v-if="selected.paused">Activar</button>
                    </div>
                </div>
                <div class="p-2 row mt-4" v-if="!selected.products || !selected.products.length">
                    <div>
                        <button class="btn btn-danger" @click="showmodal=true" >Eliminar categoria</button>
                    </div>
                </div>
                <div class="p2 row mt-4">
                    <label class="col-12 col-lg-4">
                        URL
                    </label>
                    <textarea rows="2" v-model.lazy.trim="selected.slug" @change="saveSlug(selected)" 
                        type="text" class="col-12 col-lg-8 form-control"></textarea>
                </div>
                <div class="p2 row">
                    <label class="col-12 col-lg-4">
                        Prioridad
                    </label>
                    <input type="number" v-model.lazy.trim="selected.prio" @change="save(selected,'prio')" 
                         class="col-12 col-lg-8 form-control" />
                </div>
                <div class="p2 row">
                    <label class="col-12 col-lg-4">
                        Nombre
                    </label>
                    <textarea rows="1" v-model.lazy.trim="selected.name" @change="save(selected,'name')" 
                        type="text" class="col-12 col-lg-8 form-control"></textarea>
                </div>
                <div class="p2 row">
                    <label class="col-12 col-lg-4">
                        Texto de encabezamiento
                    </label>
                    <textarea rows="2" v-model.lazy.trim="selected.description" @change="save(selected,'description')" 
                        type="text" class="col-12 col-lg-8 form-control"></textarea>
                </div>
               
                <div class="p2 row">
                    <label class="col-12 col-lg-4">
                        Meta Titutlo
                    </label>
                    <textarea rows="2" v-model.lazy.trim="selected.metatitle" @change="save(selected,'metatitle')" 
                        type="text" class="col-12 col-lg-8 form-control"></textarea>
                </div>
                <div class="p2 row">
                    <label class="col-12 col-lg-4">
                        Meta Descripcion
                    </label>
                    <textarea rows="2" v-model.lazy.trim="selected.metadescription" @change="save(selected,'metadescription')" 
                        type="text" class="col-12 col-lg-8 form-control"></textarea>
                </div>
                <div class="p2 row">
                    <label class="col-12 col-lg-4">
                        Palabras clave para busqueda
                    </label>
                    <textarea rows="2" v-model.lazy.trim="selected.keywords" @change="save(selected,'keywords')" 
                        type="text" class="col-12 col-lg-8 form-control"></textarea>
                </div>

                <div class="row mt-4">
                    <div class="col-6 overflow-hidden">
                        <div class="category-banner">
                            <div class="category-image-container">
                                <img :src="imagePath(selected.image)" :alt="selected.name" >
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex align-items-end">
                        <label class="btn btn-block btn-outline-info btn-file">
                            Cargar imagen (330x120)<input @change="bindFile" type="file" style="display: none;" accept="image/*">
                        </label>
                    </div>
                </div>
            </div>
          
        </div>
        <div v-if="showmodal">
            <modal @close="showmodal=false">
                <div class="fcc ">
                    <h2>Estas seguro de borrar la categoría?</h2>
                  
                    <div class="mt-4 d-flex justify-content-around">
                        <button class="btn btn-danger" @click="del(selected)">Si, Borrar</button>
                        <button class="btn btn-secondary" @click="showmodal=false">No, cancelar</button>
                    </div>
                </div>
            </modal>
        </div>
    </div>
</template>

<script>
import modal from '@/components/Modal.vue';
export default {
    components:{modal},
    computed : {
        categories(){
            return this.$store.getters.getCategories;
        }
    },
    data(){
        return{
            showmodal : false,
            selected : null,
           
        }
    },
    methods :{
        bindFile(e){
            var vm=this;
            var fileUploadFormData=new FormData();
            var file = e.target.files[0];
            var ext = file.name.split('.').pop();
            if (ext == 'png' || ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == webp){
                fileUploadFormData.append('image', e.target.files[0]);
                fileUploadFormData.append('id', this.selected.id);
                this.$axios.post('/category/image', fileUploadFormData)
                    .then(res => {
                        vm.$store.dispatch('fetchCategories');
                        setTimeout(() => {
                            vm.selected = vm.categories.find(c=>{
                                return vm.selected.id == c.id;
                            });
                        }, 200);
                    });
                       
            }
        },
        del(category)
        {
            /* delete category modal warning */
            this.$axios.delete('/category/'+this.selected.id)
                .then(()=>{
                    this.$store.dispatch('fetchCategories')
                        .then(()=>{
                            this.showmodal=false;
                            this.selected = this.categories[0];
                        });
                    
                })
        },
        save(category,field){
            var data = {
                id : category.id,
                field : field,
                value : category[field]
            }
            this.$axios.put('/category',data);
        },
        create(){
            this.$axios.post('/category',{name:'Nueva Categoria'})
                .then(()=>{
                    this.$store.dispatch('fetchCategories');
                })
        },
        togglePause(category)
        {   
            category.paused = category.paused ? 0 : 1 ; 
            this.save(category,'paused');
        },
        saveSlug(category){
            if(this.selected.slug){

                this.selected.slug  = this.selected.slug.replace(/\s+/g, '-').toLowerCase().trim();
                
                let dups = this.categories.find(c => {
                    return c.slug === this.selected.slug && c.id != this.selected.id;
                });

                if (dups){
                    swal('Cuidado!','Ya existe una categoria con esa URL','warning');
                }else{
                    this.save(category,'slug');
                }
            }
        }
    },
    watch:{
        'selected.slug'(){
            if(this.selected.slug){

                this.selected.slug  = this.selected.slug.replace(/\s+/g, '-').toLowerCase().trim();
            }
        }
    },

    destroyed(){
        this.$store.dispatch('fetchCategories');
    }
    

}
</script>

<style scoped lang="scss">

    .bigtext{
        font-size: 40px;
    }
    .category-banner{
        width:330px;
        height: 140px;
        border:1px solid #868686;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
        position:relative;

        .category-image-container{
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;
            width:330px;
            height: 140px;
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

img{
    width: 100%;
}
    .overflow-hidden{
        overflow: hidden;
    }

.scroll-y{
    height:500px;
    overflow-y:scroll;

}
</style>