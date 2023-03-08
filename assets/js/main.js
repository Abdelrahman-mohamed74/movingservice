$(function () {
  $("#menu-btn").click(function () {
    $("#menu-btn").toggleClass("change"), $(".menu-mobile").slideToggle(900);
  });
  new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 700,
    loop: !0,
    autoplay: { delay: 4e3, disableOnInteraction: !1 },
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { 575: { slidesPerView: 1, slidesPerGroup: 1 } },
  });
  [...document.querySelectorAll(".num")].forEach((e) => {
    ((e) => {
      const t = parseInt(e.dataset.value),
        n = Math.ceil(t / 1e3);
      let l = 0;
      const o = setInterval(() => {
        if ((l += n) > t)
          return (e.textContent = `${t}+`), void clearInterval(o);
        e.textContent = `${l} +`;
      }, 1);
    })(e);
  }),
    $(window).scroll(function () {
      $(this).scrollTop() > 300
        ? $(".to-top").addClass("active")
        : $(".to-top").removeClass("active");
    });
});
