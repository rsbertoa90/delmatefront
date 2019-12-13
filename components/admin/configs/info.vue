<template>
    <div class="display-flex flex-column">
        <div class="row mt-4">
            <div class="col-6">
                Nro de Whatsapp: <input type="text" class="form-control" v-model="config.wha" @change="update('wha')">
            
            </div >
            <div class="col-6">
                URL Whatsapp: <textarea type="text" rows="4" class="form-control w-100 m-0" v-model="config.whaurl" @change="update('whaurl')" />
                <a :href="config.whaurl" target="_blank" class="btn btn-sm btn-info">Probar url</a>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-4">
                <div>
                <span class="fa fa-truck icon"></span>
                    <textarea rows="2"  type="text" class="form-control bold" v-model="config.ship1" @change="update('ship1')"/>
                    <textarea rows="2"  type="text" class="form-control" v-model="config.ship2" @change="update('ship2')"/>
                </div>

            </div>
            <div class="col-4">
            <span class="fa fa-dollar-sign icon"></span>
                <textarea rows="2"  type="text" class="form-control bold" v-model="config.pay1" @change="update('pay1')"/>
                <textarea rows="2"  type="text" class="form-control" v-model="config.pay2" @change="update('pay2')"/>
            </div>
            <div class="col-4">
            <span class="fa fa-user-check icon"></span>
                <textarea  rows="2" type="text" class="form-control bold" v-model="config.at1" @change="update('at1')"/>
                <textarea  rows="2" type="text" class="form-control" v-model="config.at2" @change="update('at2')"/>
            </div>
        </div>
    </div>
</template>


<script>
export default {
        methods:{
            update(field)
            {
                let d = {
                    field:field,
                    value:this.config[field],
                }
                this.$axios.put('/config',d);
            }
        }
}
</script>

<style lang="scss" scoped>
.bold{
    font-weight: bold;
}
.lta{
    width:300px;
}
</style>
