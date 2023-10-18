const discountSwiper = new Swiper('.discount__swiper', {
    slidesPerView: 1,
    pagination: {
        type: 'bullets',
        el: '.discount__pagination',
    }
});

const selectServices = document.querySelectorAll('[data-select-service]')
const services = document.querySelectorAll('[data-service]')

let lastSelector = document.querySelector('.services__category-active')
selectServices.forEach((selector, selectorIndex) => {
    selector.addEventListener('click', () => {
        lastSelector.classList.remove('services__category-active')
        lastSelector = selector;
        selector.classList.add('services__category-active')
        services.forEach((service, serviceIndex) => {
            if (selectorIndex === serviceIndex) {
                services[serviceIndex].classList.remove('service-hidden')
                services[serviceIndex].classList.add('service')
            } else {
                if (services[serviceIndex].classList.contains('service')) {
                    services[serviceIndex].classList.remove('service')
                    services[serviceIndex].classList.add('service-hidden')
                }
            }
        })
    });
});

const dropdowns = document.querySelectorAll('[data-dropdown]')

dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('click', () => {
        let dropdownMark = dropdown.querySelector('[data-dropdown-mark]');
        if (dropdown.classList.contains('service__item-dropdown-active')) {
            dropdown.classList.remove('service__item-dropdown-active')
            dropdownMark.classList.add('dropdown-hidden')
        } else {
            dropdown.classList.add('service__item-dropdown-active')
            dropdownMark.classList.remove('dropdown-hidden')
        }
    })
})

const portfolioSwiper = new Swiper('.portfolio__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        nextEl: '.portfolio__swiper .swiper-button-next',
        prevEl: '.portfolio__swiper .swiper-button-prev',
    },
    pagination: {
        type: 'bullets',
        el: '.portfolio__swiper .swiper-pagination',
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

const reviewsSwiper = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: ".reviews__swiper .swiper-button-next",
        prevEl: ".reviews__swiper .swiper-button-prev",
    }
});