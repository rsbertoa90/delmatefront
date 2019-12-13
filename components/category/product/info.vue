<template>
    <div class="info-row" v-if="config">
        <div class="info-item"  v-if="config && (config.ship1 || config.ship2) ">
            <fa-icon icon="truck" class="icon"></fa-icon>
            <div class="d-flex flex-column ml-2">
                 <span v-if="config.ship1"> <b>{{config.ship1}}</b> </span>
                <span v-if="config.ship2">{{config.ship2}}</span>
            </div>
        </div>
        <div class="info-item" v-if="config && (config.pay1 || config.pay2) ">
            <fa-icon icon="dollar-sign" class="icon"></fa-icon>
            <div class="d-flex flex-column ml-2">
                <span v-if="config.pay1"> <b>{{config.pay1}}</b> </span>
                <span v-if="config.pay2">{{config.pay2}}</span>
            </div>
        </div>
        <div class="info-item" v-if="config && (config.at1 || config.at2) ">
            <fa-icon icon="user-check" class="icon"></fa-icon>
            <div class="d-flex flex-column ml-2">
               <span v-if="config.at1"> <b>{{config.at1}}</b> </span>
                <span v-if="config.at2"> {{config.at2}} </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
   

  
    

        .info-item{
            color:#fff;
            background-color: #09879f;
            margin-top:15px;
            width: 100%;
            max-width: 100%;
             justify-content: start; 
            /*  margin-top:15px; */
             margin-left:15px;
             padding:10px;
             border:1px solid #868686;
             box-shadow: #868686 1px 2px;
        }
        .info-row{
            margin:-15px 0 0 0 ;
            margin-left:-5%;
            align-items:flex-start;
            flex-direction: column;
            justify-content: start; 
           background-color:#00000000;
        }
    


</style>

