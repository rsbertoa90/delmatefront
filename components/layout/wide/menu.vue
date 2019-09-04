<template>
<div>

    <ul class="row p-0 m-0">
        <li class="nav-item" :class="{'focus':path=='/'}">
            <router-link class="nav-link " to="/">
                <fa-icon icon="home"></fa-icon> Home 
            </router-link>
        </li>
        <li v-if="!hidePrices"  class="nav-item text-white" :class="{'focus':path=='/cotizador'}">
            <router-link class="nav-link " to="/cotizador">
                <fa-icon icon="shopping-cart"></fa-icon> Cotizador 
            </router-link>
        </li>

        <li class="nav-item text-white"  v-if="!hidePrices">
            <a class="nav-link " target="_blank" href="/descargar-lista-de-precios" >
                <fa-icon icon="download"></fa-icon> Lista de precios
            </a> 
        </li>
        <li class="nav-item text-white" v-if="!hidePrices">
            <a class="nav-link " target="_blank" rel="noreferrer"
                href="/descargar-catalogo-digital">
                    <fa-icon icon="download"></fa-icon> Catalogo digital
            </a> 
        </li>
        
        <!-- Categorias si no se muestran precios --ergo,no cotizador ni lista de precios -->
        
            <li v-if="hidePrices" class="nav-item text-white" :class="{'focus':path=='/cotizador'}"
                v-for="category in categories" :key=category.name>
                <router-link class="nav-link " :to="category.slug">
                    <fa-icon icon="shopping-cart"></fa-icon> {{category.name |ucFirst}} 
                </router-link>
            </li>
       
    </ul>
    <ul class="row p-0 m-0" v-if="user && user.role_id<3">
        <!-- Admin -->
        <li class="nav-item text-white" v-if="admin">
            <router-link class="nav-link " to="/admin/productos" :class="{'focus':path=='/admin/productos'}">
                <fa-icon icon="user-cog"></fa-icon> Administrar productos 
            </router-link>
        </li>

        <li class="nav-item text-white" v-if="admin">
            <router-link class="nav-link " to="/admin" :class="{'focus':path=='/admin'}">
                <fa-icon icon="user-cog"></fa-icon> Pedidos
            </router-link>
        </li>

        <li class="nav-item text-white" v-if="admin">
            <router-link class="nav-link " to="/admin/metadata" :class="{'focus':path=='/admin/metadata'}">
                <fa-icon icon="user-cog"></fa-icon> Metadata 
            </router-link>
        </li>
        <li class="nav-item text-white" v-if="admin">
            <router-link class="nav-link " to="/admin/config" :class="{'focus':path=='/admin/config'}">
                <fa-icon icon="user-cog"></fa-icon> Config 
            </router-link>
        </li>
        <li class="nav-item text-white" v-if="admin">
            <router-link class="nav-link " to="/admin/busquedas" :class="{'focus':path=='/admin/busquedas'}">
                <fa-icon icon="user-cog"></fa-icon> Busquedas 
            </router-link>
        </li>
        <li class="nav-item text-white" v-if="isSuper">
            <router-link class="nav-link " to="/admin/stats" :class="{'focus':path=='/admin/stats'}">
                <fa-icon icon="user-cog"></fa-icon> Stats
            </router-link>
        </li>

        <li class="nav-item text-white" v-if="user && user.role_id < 3">
            <a class="nav-link" href="/logout">
                <fa-icon icon="sign-out-alt"></fa-icon> Salir
            </a>
        </li>

       

    </ul>
               
</div>
</template>

<script>
export default {
    computed:{
        user(){
            return this.$store.getters.getUser;
        },
        path(){
            return this.$route.path;
        },
        config(){
            return this.$store.getters.getConfig;
        },
        categories(){
            return this.$store.getters.getNotPaused;
        }
    },
   
}
</script>


<style scoped lang="scss">

ul{
    display: flex;
    list-style: none;
    justify-content: space-between;
    li{
        color:#fff;
        height: 60px;
        display:inline-flex;
        align-items:center;
        justify-content: center;
        a{
            color:#fff;
        }
        &:hover{
             background-color: #fff;
            color:#ff2080;
            a{
                color:#ff2080;
            }
        }
    }
    .focus{
            background-color: #fff;
            color:#ff2080;
        
            a{
                color:#ff2080;
            }
        }
}
.text-white{
    color:#fff;
    
}


</style>