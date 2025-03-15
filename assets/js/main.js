var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Default for larger screens
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
        1200: { slidesPerView: 3 }, // Large screens (desktops)
        992: { slidesPerView: 2 },  // Medium screens (tablets)
        768: { slidesPerView: 2 },  // Small tablets
        576: { slidesPerView: 1 },  // Mobile landscape
        0: { slidesPerView: 1 }     // Small mobile screens
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
                e.preventDefault(); // লিংকের ডিফল্ট অ্যাকশন বন্ধ

                // একই লেভেলের অন্য সাবমেনু বন্ধ করা
                let parentUl = menuItem.closest("ul");
                parentUl.querySelectorAll(":scope > li > a.open").forEach((openLink) => {
                    if (openLink !== menuItem) {
                        openLink.classList.remove("open");
                        openLink.nextElementSibling.classList.remove("open");
                    }
                });

                // ক্লিক করা সাবমেনু টগল করা
                submenu.classList.toggle("open");
                menuItem.classList.toggle("open"); // ব্যাকগ্রাউন্ড লাল করার জন্য `open` ক্লাস টগল
            });
        }
    });
});
