window.addEventListener('load', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observerParents: true,
        loop: true,
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            disableOnInteraction: false,
            delay: 10000,
        }
    });
})