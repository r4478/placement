$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
    },
    itemsDesktop: [1000, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 3],
    itemsMobile: [650, 2],
    pagination: true,
    autoPlay: true,
  });
});
