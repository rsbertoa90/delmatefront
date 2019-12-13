<template>
<div v-if="config && config.whaurl">
    <div class="whatsapp" v-if="$mq=='lg'">
        <a rel="noreferrer" class="d-flex" target="_blank" :href="config.whaurl" > 
             <fa-icon :icon="['fab','whatsapp']" class="icon mt-2"></fa-icon>  
             <span class="text"> ¿Te podemos ayudar? </span> 
       </a>
    </div>
    <div class="mobile-whatsapp" v-else>
        <a rel="noreferrer" class="d-flex" target="_blank" :href="config.whaurl" > 
             <fa-icon :icon="['fab','whatsapp']" class="icon"></fa-icon>  
       </a>
    </div>

</div>
</template>

<style scoped lang="scss">
.mobile-whatsapp
{
    position:fixed;
    width:60px;
    bottom:5px;
    right:5px;
    z-index:110;
    text-align: center;
    border:1px solid #65BC54;
    border-radius: 5% 5%;
    padding:5px;
    box-shadow: 2px 2px 2px #6666;
            background-color: #fff;
     .fa-whatsapp{

      font-size: 3.2rem;
      color:#65BC54;
    }
}
     .whatsapp{
        position:fixed;
         width:250px;
        bottom:5px;
        display:flex;
        justify-content: center;
        align-items:center;
        right:15px;
        z-index:110;
        background-color: #fff;
        border: 1px solid #ff0aaf;
        padding: 4px;
        a{color:#ff0aaf};
         .fa-whatsapp{
      font-size: 1.3rem;
      color:#65BC54;
    }
        
    }
   

    @media(min-width: 600px){
        .whatsapp{
            width:250px;
            font-size:1.3rem;
          

        }
        .fa-whatsapp{
            font-size: 1.5rem;
        }
    }

    @media(max-width:600px){
        .whatsapp{
            bottom:10px;
            left:0;
            width:100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size:1.6rem;
            height: 55px;
            .icon{
                font-size:2rem;
                height: 100%;
                background-color: #fff;
                width:10%;
                height: 60px;
                padding:0 5px;
            }
            .text{
                margin-left:5%;
                width:80%;
                margin-top:5px;
            }
        }
    }
</style>