
var today = new Date();
  
  //dias
  let diaSelecionado = 0 ;   
  var diaAtual =today.getDate();
  let hoje = diaAtual ;
  //meses
  let mesDestacado = today.getMonth();
  var esseMes = today.getMonth();
  var currentMonth = mesDestacado;
  //ano
  var currentYear = today.getFullYear();
 
  let mesAdd;

  var days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex','Sab'];
  var meses =['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

// CPFL ----------------------------------------------------

  var faturas =[
    /*  - 2024 -  */
    /*Jul*/'130,26',
    /*Ago*/'129,94',
    /*Set*/'71,90',
    /*Out*/'1347,30',
    /*Nov*/'1136,68',
    /*Dez*/'1198,06',
    /*  - 2025 -  */
    /*Jan*/'663,80',
    /*Fev*/'0',
    /*Mar*/'0',
    /*Abr*/'0',
    /*Mai*/'0',
    /*Jun*/'9',
];
  let kw=[
    /*  - 2024 -  */
    /*Jul*/'141',
    /*Ago*/'138',
    /*Set*/'75 ',
    /*Out*/'1425',
    /*Nov*/'1159',
    /*Dez*/'1280',
    /*  - 2025 -  */
    /*Jan*/'',
    /*Fev*/'',
    /*Mar*/'',
    /*Abr*/'',
    /*Mai*/'',
    /*Jun*/'',
    ];


    let mePercent = 55;


let CPFL=document.querySelector('#CPFL');
let CPFLMes = document.querySelector("#CPFL-mes");
let faturaCPFL = document.querySelector("#CPFL-valor");



    
    for (let index = 0; index < faturas.length; index++) {
        
        let number = parseFloat(faturas[index]);
        let percent = (number*mePercent) / 100;
        let curMes = esseMes+index;

    if(curMes== 12){
        curMes=0;
    }
    if(curMes<12){
        curMes= index+6;
        console.log('sssssss');
    }
    if(curMes<12 && curMes==0){
        curMes= index-6;
        console.log('sssssss');
    }
    console.log(percent+" -< "+mePercent+" "+meses[curMes]);
    console.log(index+" "+curMes)
    console.log("casa1 => "+percent);

   
    
    if(curMes>1 && faturas[index]==""){
        break;
    }
    console.log("==== "+index);
    if(faturas[index]==" "){
        
    //     $("#slider").append(` <div id="fatura`+index+`" class="faturas">
    //         <h2 id="CPFL-mes">`+meses[curMes]+`rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr |</h2>
    // </div>`);
    }else{
    var div = document.getElementById("");
    
    $("#slider").append(` <div id="fatura `+meses[index]+`" class="faturas">
    <h2 id="CPFL-mes">`+meses[curMes]+` |</h2>
    <div id="div01">
    <h2 id="CPFL-kw">`+kw[index]+` KW/h</h2>
    <div>
    <div  class="box">
        <div class="container">
        <img class="icon-pago" src="./fatura.png" alt="status">
        <p> Total da Fatura :</p>
            <span id="CPFL-valor" class="valor">`+faturas[index]+`</span>
        </div><!--container-->
    </div><!--box-->
</div>`);
 console.log(percent[curMes])
    $("#fatura"+index+"")

    if($(window).width()<500){
        $(".faturas").css('width','100vw')
        let telaWidth = (430*index)+400;
        $(".fornecedora").css('width',telaWidth);
        // $(".faturas").css('background-color','red')
    }else{
        let telaWidth = (300*index)+300;
        $(".fornecedora").css('width',telaWidth);
    }
}

//  Pic Pay ----------------------------------------------------

// var faturasBank2 =[
//     /*Jan*/':)',
//     /*Fev*/':)',
//     /*Mar*/':)',
//     /*Abr*/':)',
//     /*Mai*/':)',
//     /*Jun*/'700,52',
//     /*Jul*/':)',
//     /*Ago*/':)',
//     /*Set*/':)',
//     /*Out*/':)',
//     /*Nov*/':)',
//     /*Dez*/':)'];

    
// let picpay=document.querySelector('#bank2');
// let picpayMes = document.querySelector("#picpay-mes");
// let faturaPicpay = document.querySelector("#picpay-valor");

// for (let index = 1; index < faturasBank2.length; index++) {
    
//     let curMes = esseMes+(index);
//      console.log(curMes)
//     if(curMes == 12 || index > 1 && faturas[curMes] == ':)' || faturas[curMes] == ':)'){
//        break;
//     }

    
//     var div = document.getElementById("");
    
//     $("#bank2").append(` <div id="fatura0,
//     `+index+`" class="faturas
//     ">
//     <div class="box"></div>
//     <h2 id="picpay-mes">`+meses[curMes]+` |</h2>
//     <div class="container">
//         <p>Valor da Fatura</p>
//         <p id="picpay-valor" class="valor">`+faturasBank2[curMes]+`</p>
//     </div>
// </div>`);

// console.log(index);

// $("#faturaBank2"+index+"").css('margin-rigth','-300px');

//     if($(window).width()<500){
//         $(".faturas").css('width','400px').css('margin-rigth','30px')
//         let telaWidth = (430*index)+430;
//         $(".fornecedora").css('width',telaWidth);
//         // $(".faturas").css('background-color','red')
//     }else{
//         let telaWidth = (300*index)+300;
//         $(".fornecedora").css('width',telaWidth);
//     }    
    }
