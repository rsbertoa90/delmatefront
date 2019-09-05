<template>
    <div>
        <appcotizer></appcotizer>
    </div>
</template>

<script>
import appcotizer from '@/components/cotizer/Cotizer.vue';
import metaMixin from '@/plugins/metadataMixin.js';
export default {
      mixins:[metaMixin],
      name:'cotizador',
    components:{appcotizer}
}
</script>


<style lang="scss" scoped>

</style>
