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

$(function(){
    $('.toggle-menu').on('click',function(){
        $('.main-nav').toggleClass('open');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

$(document).ready(function(){
    $('.linens').slick({
        dots: true,
        prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
        nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',

    });
});

$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
        nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',

    });
});

$('.carpets-slider').slick({
    dots: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
});

// $('.gallery__slider').slick({
//     variableHeight: true,
//     autoplay: false,
//     autoplaySpeed: 4000,
//     speed: 1000,
//     centerPadding: '0',
//     infinite: true,
//     centerMode: true,
//     slidesToShow: 3,
//     sliderToScroll: 1,
//     arrows: true,
//     dots: false,
//     prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
//     nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
//     focusOnSelect: true,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 centerMode: false,
//                 centerPadding: '0',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });

///center mode

$('.gallery__slider').slick({
    variableHeight: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    centerPadding: '0',
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    sliderToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                centerMode: false,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});

//first mode

$('.gallery__slider-first').slick({
    variableHeight: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    centerPadding: '0',
    infinite: true,
    centerMode: false,
    slidesToShow: 3,
    sliderToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                centerMode: false,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});

$('.gallery__partners').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// $('.gallery__slider').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });

// $('.single-item').slick();

//reviews-slider

$('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    dots: true,
});


$(window).scroll(function() {
    let height = $(window).scrollTop();
    if(height > 1){
        $('.contact').addClass('header-fixed');
    } else{
        $('.contact').removeClass('header-fixed');
    }
});