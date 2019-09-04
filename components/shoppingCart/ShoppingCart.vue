<template>
    <div class="d-flex flex-column">
        <cotizer-form></cotizer-form>
        <list></list>
    </div> 
</template>

<script>
import cotizerForm from './form.vue';
import list from './list.vue';
import metaMixin from '../mixins/metadataMixin';
export default {
    mixins:[metaMixin],
    components:{
        cotizerForm,list
    },
    data(){
        return{
            page:'carrito'
        }
    }
}
</script>
