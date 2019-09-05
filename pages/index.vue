<template>
<div>
        <apphome></apphome>
</div>    
</template>

<script>
import metaMixin from '@/plugins/metadataMixin.js';
import apphome from '@/components/home/Home.vue'
export default {
      mixins:[metaMixin],
      name:'home',
    components:{apphome}
}
</script>


<style lang="scss" scoped>

</style>
