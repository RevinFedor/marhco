$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
  $(".stars").rateYo({
      starWidth: "18px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true,
  });

})