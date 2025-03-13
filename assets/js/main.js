var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    on: {
        slideChange: function () {
            let videos = document.querySelectorAll('.swiper-slide video');
            videos.forEach(video => video.pause());
            let activeSlides = document.querySelectorAll('.swiper-slide-active video');
            activeSlides.forEach(video => video.play());
        }
    }
});
