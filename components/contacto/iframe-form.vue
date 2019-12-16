<template>
    <div id="formContacto" class="mt-4 d-flex flex-column align-items-center justify-content-center">
       
        <div class="iframe-container d-flex justify-content-center">
               <iframe title="Contactate con Mayorista del Mate" src="https://docs.google.com/forms/d/e/1FAIpQLScYpZBKntEketQSNGNKNssEN7gJvIM2nNMXy5xi-sLlixA19A/viewform?embedded=true" :width="iframewidth" :height="iframeheight" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>                
               
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        iframewidth(){
            return this.$mq == 'lg' ? 640 : 340;
        },
        iframeheight(){
            return this.$mq == 'lg' ? 1023 : 1123;
        }
    }
}
</script>

<style lang="scss" scoped>
h3{
    color:#3A2BB3;
    font-size: 30px;
    font-weight: bold;
    margin-top:50px;
}
.phone{
    color:#3A2BB3;
    font-size: 20px;
}
.iframe-container{
  //  border:1px solid #000;
 //   box-shadow: 3px 3px 3px #6663;
   // width:100%;
   
}
</style>

