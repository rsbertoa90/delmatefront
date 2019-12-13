<template>
<div class="row">
    <div class="fcc">
        <h2>Cambiar Logo</h2>
        <div class="img-container col-6 ">
            <img v-if="config && config.logo && !newimg" :src="imagePath(config.logo)" alt="">
            <img v-if="newimg" :src="newimg" >
        </div>
        <div>
            <label class="button btn-lg btn-info mt-4">
                <input class="display-none" type="file" ref="image" @change="setprevimg">
                Cambiar imagen
            </label>
        </div>
        <div v-if="newimg">
            <button class="btn btn-success btn-lg" @click="save">Guardar</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            newimg:null
        }
    },
    methods:{
        setprevimg(){
            let file  = this.$refs.image.files[0];
            if(file)
            {
                this.newimg = URL.createObjectURL(file);
            }
        },
        save()
        {
                var vm =this;
                var file = this.$refs.image.files[0];
                if (file == null){
                    swal('No se ha seleccionado una imagen','','error');
                } else {
 
                    var fdata =  new FormData();
                    fdata.append('image',file);
                    
                    // console.log(fdata);
                    this.$axios.post('/logo',fdata)
                    .then(()=>{
                        this.$store.dispatch('fetchConfig')
                            .then(()=>{
                                this.$router.push('/home');
                            })
                    })
    
                   
                }
        }
    }

}
</script>

<style lang="scss" scoped>
.display-none{
    display: none;
}
</style>
