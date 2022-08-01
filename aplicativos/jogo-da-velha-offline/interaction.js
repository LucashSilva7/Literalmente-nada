
//Linha um com declaração das variaveis
var block1 = document.querySelector(".grid-1");
var internalGrid1Block1 = document.querySelector(".grid-1 > .internal-grid-1");
var internalGrid2Block1 = document.querySelector(".grid-1 > .internal-grid-2");

var block2 = document.querySelector(".grid-2");
var internalGrid1Block2 = document.querySelector(".grid-2 > .internal-grid-1");
var internalGrid2Block2 = document.querySelector(".grid-2 > .internal-grid-2");

var block3 = document.querySelector(".grid-3");
var internalGrid1Block3 = document.querySelector(".grid-3 > .internal-grid-1");
var internalGrid2Block3 = document.querySelector(".grid-3 > .internal-grid-2");

//Linha dois

var block4 = document.querySelector(".grid-4");
var internalGrid1Block4 = document.querySelector(".grid-4 > .internal-grid-1");
var internalGrid2Block4 = document.querySelector(".grid-4 > .internal-grid-2");

var block5 = document.querySelector(".grid-5");
var internalGrid1Block5 = document.querySelector(".grid-5 > .internal-grid-1");
var internalGrid2Block5 = document.querySelector(".grid-5 > .internal-grid-2");

var block6 = document.querySelector(".grid-6");
var internalGrid1Block6 = document.querySelector(".grid-6 > .internal-grid-1");
var internalGrid2Block6 = document.querySelector(".grid-6 > .internal-grid-2");

//Linha três

var block7 = document.querySelector(".grid-7");
var internalGrid1Block7 = document.querySelector(".grid-7 > .internal-grid-1");
var internalGrid2Block7 = document.querySelector(".grid-7 > .internal-grid-2");

var block8 = document.querySelector(".grid-8");
var internalGrid1Block8 = document.querySelector(".grid-8 > .internal-grid-1");
var internalGrid2Block8 = document.querySelector(".grid-8 > .internal-grid-2");

var block9 = document.querySelector(".grid-9");
var internalGrid1Block9 = document.querySelector(".grid-9 > .internal-grid-1");
var internalGrid2Block9 = document.querySelector(".grid-9 > .internal-grid-2");




//LINHA UM--------------------------------------------------------------------

//quadrado um
internalGrid1Block1.addEventListener('click', function(){
    block1.style.background = 'red';
    internalGrid1Block1.style.background ='transparent';
    internalGrid2Block1.style.background ='transparent';
});
internalGrid2Block1.addEventListener('click', function(){
    block1.style.background = 'green';
    internalGrid1Block1.style.background ='transparent';
    internalGrid2Block1.style.background ='transparent';
});

//quadrado dois
internalGrid1Block2.addEventListener('click', function(){
    block2.style.background = 'red';
    internalGrid1Block2.style.background ='transparent';
    internalGrid2Block2.style.background ='transparent';
});
internalGrid2Block2.addEventListener('click', function(){
    block2.style.background = 'green';
    internalGrid1Block2.style.background ='transparent';
    internalGrid2Block2.style.background ='transparent';
});

//quadrado três
internalGrid1Block3.addEventListener('click', function(){
    block3.style.background = 'red';
    internalGrid1Block3.style.background ='transparent';
    internalGrid2Block3.style.background ='transparent';
});
internalGrid2Block3.addEventListener('click', function(){
    block3.style.background = 'green';
    internalGrid1Block3.style.background ='transparent';
    internalGrid2Block3.style.background ='transparent';
});




//LINHA DOIS---------------------------------------------------------------------

//quadrado quatro
internalGrid1Block4.addEventListener('click', function(){
    block4.style.background = 'red';
    internalGrid1Block4.style.background ='transparent';
    internalGrid2Block4.style.background ='transparent';
});
internalGrid2Block4.addEventListener('click', function(){
    block4.style.background = 'green';
    internalGrid1Block4.style.background ='transparent';
    internalGrid2Block4.style.background ='transparent';
});

//quadrado cinco
internalGrid1Block5.addEventListener('click', function(){
    block5.style.background = 'red';
    internalGrid1Block5.style.background ='transparent';
    internalGrid2Block5.style.background ='transparent';
});
internalGrid2Block5.addEventListener('click', function(){
    block5.style.background = 'green';
    internalGrid1Block5.style.background ='transparent';
    internalGrid2Block5.style.background ='transparent';
});

//quadrado seis
internalGrid1Block6.addEventListener('click', function(){
    block6.style.background = 'red';
    internalGrid1Block6.style.background ='transparent';
    internalGrid2Block6.style.background ='transparent';
});
internalGrid2Block6.addEventListener('click', function(){
    block6.style.background = 'green';
    internalGrid1Block6.style.background ='transparent';
    internalGrid2Block6.style.background ='transparent';
});




//LINHA TRÊS---------------------------------------------------------------------

//quadrado quatro
internalGrid1Block7.addEventListener('click', function(){
    block7.style.background = 'red';
    internalGrid1Block7.style.background ='transparent';
    internalGrid2Block7.style.background ='transparent';
});
internalGrid2Block7.addEventListener('click', function(){
    block7.style.background = 'green';
    internalGrid1Block7.style.background ='transparent';
    internalGrid2Block7.style.background ='transparent';
});

//quadrado cinco
internalGrid1Block8.addEventListener('click', function(){
    block8.style.background = 'red';
    internalGrid1Block8.style.background ='transparent';
    internalGrid2Block8.style.background ='transparent';
});
internalGrid2Block8.addEventListener('click', function(){
    block8.style.background = 'green';
    internalGrid1Block8.style.background ='transparent';
    internalGrid2Block8.style.background ='transparent';
});

//quadrado seis
internalGrid1Block9.addEventListener('click', function(){
    block9.style.background = 'red';
    internalGrid1Block9.style.background ='transparent';
    internalGrid2Block9.style.background ='transparent';
});
internalGrid2Block9.addEventListener('click', function(){
    block9.style.background = 'green';
    internalGrid1Block9.style.background ='transparent';
    internalGrid2Block9.style.background ='transparent';
});