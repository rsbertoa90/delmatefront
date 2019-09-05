<template>
    <div>
        <searchResults></searchResults>
    </div>
</template>

<script>
import metaMixin from '@/plugins/metadataMixin.js';
import searchResults from '@/components/search-results/SearchResults.vue';
export default {
      mixins:[metaMixin],
      name:'busquedas',
    components:{searchResults}
}
</script>
