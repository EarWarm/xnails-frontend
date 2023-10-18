const mastersSwiper = new Swiper('.masters__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        nextEl: '.masters__swiper .swiper-button-next',
        prevEl: '.masters__swiper .swiper-button-prev',
    },
    pagination: {
        type: 'bullets',
        el: '.masters__swiper .swiper-pagination',
    },
    breakpoints: {
        1199.98: {
            slidesPerView: 4
        },
        991.98: {
            slidesPerView: 3
        },
        575.98: {
            slidesPerView: 2
        }
    }
});