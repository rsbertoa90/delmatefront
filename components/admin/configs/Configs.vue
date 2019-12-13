<template>

    <div class="row mt-4">
        <div class="col-3 side-pannel fcc justify-content-start">
            <button class="btn btn-block mt-2" 
                    :class="{'btn-info':selected=='admlogo','btn-secondary':selected!='admlogo'}" 
                    @click="setSelected('admlogo')"> 
                    Logo
            </button>
            <button class="btn btn-block mt-2" 
                    :class="{'btn-info':selected=='homeimg','btn-secondary':selected!='homeimg'}" 
                    @click="setSelected('homeimg')"> 
                    imagen de home 
            </button>
            <button class="btn btn-block mt-2" 
                    :class="{'btn-info':selected=='pdfs','btn-secondary':selected!='pdfs'}" 
                    @click="setSelected('pdfs')"> 
                    Refrescar PDF's 
            </button>
            <button class="btn btn-block mt-2" 
                    :class="{'btn-info':selected=='minbuys','btn-secondary':selected!='minbuys'}" 
                    @click="setSelected('minbuys')"> 
                    minimos de compra 
            </button>
            <button class="btn btn-block mt-2" 
                    :class="{'btn-info':selected=='info','btn-secondary':selected!='info'}" 
                    @click="setSelected('info')"> 
                    Informacion general 
            </button>
        </div>
        <div class="col-8 p-4 ">
            <component :is="selected"></component>
        </div>
    </div>
    
</template>

<script>
import admlogo from './admlogo.vue'
import homeimg from './homeimg.vue';
import minbuys from './minbuys.vue';
import info from './info.vue'
import pdfs from './refreshpdfs.vue';
import adminSlider from './admin-slider.vue';
export default {
     metaInfo(){return{
        title: 'ADMIN'   }},
    components:{adminSlider,admlogo,info,homeimg,minbuys,pdfs},
    data(){
        return {
            selected:'homeimg'
            
        }
    },
    computed:{
        configs(){
            return this.$store.getters.getConfig;
        }
    },
    methods:{
        setSelected(s){
            this.selected=s;
        },
       
    }

}
</script>
