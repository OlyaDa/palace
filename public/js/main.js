// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 0,
//     nav: true,
//     doots: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });

$(document).ready(function(){
    $('.linens').slick({
        dots: true,
        prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
        nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',

    });
});

// $('.single-item').slick();