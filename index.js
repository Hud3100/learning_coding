let swiper = new Swiper('.swiper-container', {
    slidesPerView: 5.3,
    spaceBetween: 30,
    slidesOffsetBefore: 20,
    slidesPerGroup: 5,
    slidesPerGroupSkip: 6,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });