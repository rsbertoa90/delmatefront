<template>
    <div>
        <mobileHeader v-if="$mq != 'lg'"></mobileHeader>
        <wideHeader v-else></wideHeader> 
    </div>
</template>


<script>
import mobileHeader from './mobile/header.vue';
import wideHeader from './wide/header.vue';
export default {
    components:{
        mobileHeader,wideHeader
    }
}
</script>
