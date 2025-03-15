window.onload = function () {
    setTimeout(function () {
        document.getElementById('serviceImage').style.display = 'none';
        document.getElementById('backgroundVideo').style.display = 'block';
    }, 1000);
};


//video slide
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
    breakpoints: {
        1200: { slidesPerView: 3 },
        992: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 }
    },
    on: {
        slideChange: function () {
            let videos = document.querySelectorAll('.swiper-slide video');
            videos.forEach(video => video.pause());
            let activeSlides = document.querySelectorAll('.swiper-slide-active video');
            activeSlides.forEach(video => video.play());
        }
    }
});


//mobile menu
document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".mobile_menu ul li > a");

    menuItems.forEach((menuItem) => {
        let submenu = menuItem.nextElementSibling;

        if (submenu && submenu.tagName === "UL") {
            menuItem.parentElement.classList.add("has-submenu");

            menuItem.addEventListener("click", function (e) {
                e.preventDefault();

                let parentUl = menuItem.closest("ul");
                parentUl.querySelectorAll(":scope > li > a.open").forEach((openLink) => {
                    if (openLink !== menuItem) {
                        openLink.classList.remove("open");
                        openLink.nextElementSibling.classList.remove("open");
                    }
                });

                submenu.classList.toggle("open");
                menuItem.classList.toggle("open");
            });
        }
    });
});
