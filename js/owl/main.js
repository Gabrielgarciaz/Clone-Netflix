$('.owl-carousel').owlCarousel({
    loop:true, // deixa em modo infinito
    margin:10, // espaço entre as imagens (no meio)
    nav:true, // tira os botões de navegação
    responsive:{
        0:{
            items:3 // Quando a tela tiver 0px vai mostrar 1 elementos 
        },
        600:{
            items:4 // Quando a tela tiver 600px vai mostrar 3 elementos 
        },
        1000:{
            items:6 // Quando a tela tiver 1000px vai mostrar 5 elementos 
        }
    }
})
