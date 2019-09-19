export default {
    head() {
      let canonical = 'https://mayoristadelmate.com' + this.$route.path;
      // console.log(canonical);
      return {
        link: [{
          rel: 'canonical',
          href: canonical
        }],
        titleTemplate: this.metatitle,
        meta: [{
            name: 'description',
            content: this.metadescription,
            hid: 'description'
          }

        ],
      }
    },
  
    computed: {
        metadata() {
            let page = this.$route.name;
            
            return this.$store.getters.getMeta(page);
                    
            
        },
        metatitle() {
            if (this.metadata) {
                
             
                return this.metadata.metatitle ? this.metadata.metatitle : 'Mates Fabi';
            }
        },
        metadescription() {
            if (this.metadata) {
                return this.metadata.metadescription ? this.metadata.metadescription : 'Mates Fabi';
            }

        },
        description() {
            if (this.metadata) {
                return this.metadata.description;
            }
        },
    }
}