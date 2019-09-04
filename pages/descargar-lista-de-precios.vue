<template>
    <div>
        Redirecting...
    </div>
</template>

<script>
export default {
   fetch({redirect}){
        //let url = 'http://localhost:8000/descargar-lista-de-precios';
        let url = 'https://back.mayoristadelmate.com/descargar-lista-de-precios';
        redirect(301,url);
    },
}
</script>
