<template>
    <div class="info-row">
        <div class="info-item">
            <fa-icon icon="truck" class="icon"></fa-icon>
            <div class="d-flex flex-column ml-2">
                <span> <b>ENVIO GRATIS</b> </span>
                <span>En CABA y Zona Oesta de GBA</span>
            </div>
        </div>
        <div class="info-item">
            <fa-icon icon="dollar-sign" class="icon"></fa-icon>
            <div class="d-flex flex-column ml-2">
                <span> <b>PAGO CONTRAREEMBOLSO</b> </span>
                <span>Paga al recibir tus productos</span>
            </div>
        </div>
        <div class="info-item">
            <fa-icon icon="user-check" class="icon"></fa-icon>
            <div class="d-flex flex-column ml-2">
                <span> <b>ATENCION PERSONALIZADA</b> </span>
                <span>Por whatsapp, lunes a sabados de 9hs a 18hs </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .info-row{
        background-color: #09879f;
        margin:auto;
        padding: 20px 6%;
        display: flex;
        justify-content: space-around;
    }
    .icon{
        font-size: 2rem;
    }
    .info-item{
        max-width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .9rem;
        color:#fff;
    }

    @media(max-width:660px)
    {

        .info-item{
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
    }


</style>

