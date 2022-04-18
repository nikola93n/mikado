var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        mousewheel: {
            releaseOnEdges: true,
        },        
        speed: 1000,
        autoplay: {
        delay: 2000,
        },
         breakpoints: {
        320: {
            slidesPerView: 1,
            //spaceBetween: 30,
            slidesPerGroup: 1,
        },        
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 1,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 1,
        },    
        
    },   
});

        