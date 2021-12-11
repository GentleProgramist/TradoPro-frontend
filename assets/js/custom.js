$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('header.navbar').addClass('fixed-header');
    }
    else {
        $('header.navbar').removeClass('fixed-header');
    }

    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);  
    } else {
        $('#return-to-top').fadeOut(200);  
    }
});


$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0  
    }, 500);
});


$('.close-icon').click(function() {
    $('#filterbox').removeClass('show');
});


$('.banner-bg .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:18000,
    items:1
});


$('.ourtraders-bg .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    items:3,
    responsive : {
        0 : {
            items: 1
        },
        568 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1024 : {
            items: 3
        }
    }
});


$('.newmarketing-bg .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    items:3,
    responsive : {
        0 : {
            items: 1
        },
        568 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1024 : {
            items: 3
        }
    }
});


$('.latestnews-bg .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    items:3,
    responsive : {
        0 : {
            items: 1
        },
        568 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1024 : {
            items: 3
        }
    }
});

$('.exchnages-boxs .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:5,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive : {
        0 : {
            items: 1
        },
        568 : {
            items: 2
        },
        768 : {
            items: 3
        },
        1024 : {
            items: 4
        },
        1199 : {
            items: 5
        }
    }
});


$('.onetrading .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    items:1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
});


$("header.navbar .navbar-toggler").click(function(){
    $("header.navbar").toggleClass("open");
});


$(".exchange-bg .custom-switch input").click( function(){
    if( $(this).is(':checked') ) {
        $('.exchange-bg .indexc-boxs').removeClass('active');
        $('.exchange-bg .intexc-boxs').addClass('active');
    } else {
        $('.exchange-bg .indexc-boxs').addClass('active');
        $('.exchange-bg .intexc-boxs').removeClass('active');
    }
});