$(document).ready(function () {
    // mega menu js 
    $("#megamenuBtn").click(function () {
        $("#megaMenu").toggle()
        $(".iconrotaion").toggleClass("iconrotate");
    });

    // currency option js 
    $("#currencyOpt").click(function () {
        $(".currency-list").toggle()
    });


    // swiper js 
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    //   product btn js 

    $(".productBtn").click(function (e) {
        e.preventDefault();
        $(".productBtn").removeClass("productBtnActive");
        $(this).addClass("productBtnActive");
    });

    $(".product-optional-link").click(function () {
        $(this).addClass("product-optional-link-two");
    });



    // product quantity js 
    $(document).ready(function () {
        $(".plus-btn").click(function () {
            let input = $(this).siblings(".quantity");
            let currentValue = parseInt(input.val());
            input.val(currentValue + 1);
        });

        $(".minus-btn").click(function () {
            let input = $(this).siblings(".quantity");
            let currentValue = parseInt(input.val());
            if (currentValue > 1) {
                input.val(currentValue - 1);
            }
        });
    });


});

// testimonial slider 

const swiper = new Swiper('.test-slider', {
    loop: true,
    slidesPerView: 9,
    spaceBetween: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 4,
        },
        350: {
            slidesPerView: 3,
            spaceBetween: 4,
        },
        490: {
            slidesPerView: 4,
            spaceBetween: 4,
        },

        576: {
            slidesPerView: 5,
            spaceBetween: 4,
        },

        780: {
            slidesPerView: 6,
            spaceBetween: 16,
        },

        990: {
            slidesPerView: 8,
            spaceBetween: 20,
        },
        1120: {
            slidesPerView: 9,
            spaceBetween: 20,
        },
    },
});

// mobile menu 

// mobile menu 
$(document).ready(function () {
    $('.mobile-menu-bar').click(function () {
        $(".biomax-mobile-menu").addClass("biomax-mobile-menu-open");
        $(".menu-overlay").addClass("menu-overlay-open");
    });
    $('.mobile-menu-close-icon').click(function () {
        $(".biomax-mobile-menu").removeClass("biomax-mobile-menu-open");
        $(".menu-overlay").removeClass("menu-overlay-open");
    });
});

