<template>
    <div class="d-flex justify-content-center">
        <input @keyup.enter="search" v-model.lazy="searchTerm" ref="field" type="text" class="form-control border-fucsia" placeholder="BUSCAR" >
        <router-link class="btn bg-white fucsia border-fucsia" to="/busqueda">
            <fa-icon icon="search" class="mb-1"></fa-icon>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchTerm:'',
        }
    },
    computed:{
        storeSearchTerm(){
                return this.$store.getters.getSearchTerm;
        }
    },
    watch:{
        searchTerm(){
          this.$store.commit('setSearchTerm',this.searchTerm);
        }
    },
    methods:{
        search(){
          this.$router.push('/busqueda');
        },

    },
    mounted(){
        this.$refs.field.focus();

    },
    
}
</script>


<style>
    .form-control{
        width:200px;
    }
</style>