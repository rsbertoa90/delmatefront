<template >
<transition enter-active-class="animate animated bounceIn">

    <div v-if="scrolled && !vwd" class="overlay " >
        <div class="image-container ">
            <v-lazy-image :src="imagesrc" ></v-lazy-image>
            <transition enter-active-class="animate animated slideInUp">
                <div  v-if="enterhand" class="animation "
                        :class="{redcircle:clicknow}">
                    
                    <i class="fa fa-mouse-pointer"></i>
                
                </div>
               
            </transition>        

        
        </div>
         <transition enter-active-class="animate animated bounceIn">
                    <div class="speech-bubble" v-if="clicknow">
                        <span>Click en una categoria para ver detalles de productos</span>
                    </div>
        </transition>
        <button class="btn btn-block btn-danger" style="max-width:400px"  @click="vwd=true"> Cerrar </button>
    </div>
</transition>
</template>

<script>
export default {
    data(){
        return{
            vwd:false,
            scrolled:false,
            enterhand:false,
            clicknow:false,
            imagesrc:"/storage/images/app/tuto.png",
            
        }
    },
    watch:{
        scrolled(){
           
        }
    },
    methods: {
    handleScroll () {
        if (!this.scrolled){
            this.scrolled = window.scrollY > 150;

            setTimeout(() => {
                this.enterhand=true;
            }, 1000);

            setTimeout(() => {
                this.clicknow=true;
                this.imagesrc = "/storage/images/app/tuto2.png"
            }, 2100);
        }
    }
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    }

}
</script>

<style lang="scss" scoped>

    .redcircle{
        display:flex;
        flex-direction: column;
        width:100px;
        height: 100px;
        justify-content: center;
        align-items:center;
        border-radius: 50%;
        overflow: hidden;
        background-color: rgba(170, 16, 16, 0.479)
    }

    .animation{
        position: absolute;
        top:40px;
        left:20px;
        color:rgb(19, 18, 18);
        font-size: 3rem;
       
    }
    .image-container{
        width: 90%;
        position: relative;
    }
    .overlay{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        position:fixed;
        top:0;
        left:0;
        width: 100vw;
        height: 100vh;
        background-color: #cccc;
    }

    .speech-bubble{
       position: fixed;
       top:50px;
       right: 50px;
        background: #EB1889;
        border-radius: .4em;
        width: 50%;
        padding: 20px;
        text-align: center;
        color:#fff;
       
    }

    .speech-bubble:after {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 37px solid transparent;
	border-right-color: #EB1889;
	border-left: 0;
	border-bottom: 0;
	margin-top: -18.5px;
	margin-left: -37px;
}
  @media(min-width:900px){

       .image-container{
           width: 20%;
           margin-left: 0;
       }

      .overlay{
          align-items:center;
          justify-content: center;
      }

     

      .speech-bubble{
           top:150px;
      }
  }
</style>
