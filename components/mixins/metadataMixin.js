export default {
    computed:{
       metadata(){
           if(this.page){

               let allMeta = this.$store.getters.getMeta;
               return allMeta.find(m => {
                   return m.page == this.page;
               });
           }
       },
       metatitle(){
           if (this.metadata)
           {
               return this.metadata.metatitle ? this.metadata.metatitle : 'Mayorista del Mate';
           }
       },
       metadescription(){
           if(this.metadata)
           {
               return this.metadata.metadescription ? this.metadata.metadescription : "Mayorista del Mate";
           }
       } 
    },
    metaInfo() {
        return {
            title: this.metatitle,
            meta: [
                { name: 'description', content: this.metadescription }
            ]
        }
    },
}