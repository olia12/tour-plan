$(document).ready(function(){
  var hotelSwiper = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
    }
  });

  var reviewsSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    }
  });

  var menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener('click', function(){
    console.log('Клик по кнопке меню')
    document.querySelector(".navbar-bottom")
    .classList.toggle('navbar-bottom--visible')
  });

  var modalButton = $("[data-togle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on('click', closeModal)

  function openModal(){
    var madalOverlay = $(".modal__overlay");
    var madalDialog = $(".modal__dialog");
    madalOverlay.addClass('modal__overlay--visible');
    madalDialog.addClass('modal__dialog--visible');
  }

    function closeModal(event){
    event.preventDefault()
    var madalOverlay = $(".modal__overlay");
    var madalDialog = $(".modal__dialog");
    madalOverlay.removeClass('modal__overlay--visible');
    madalDialog.removeClass('modal__dialog--visible');
  }

  $(document).keyup(function(e) {
	if (e.key === "Escape" || e.keyCode === 27) {
		closeModal(e);
	}

  // Обработка форм
  $('.form').each(function(){
      $(this).validate({
        errorClass: "invalid",
        messages: {
          name: {
            required: "Please specify your name",
            minlength: "Name must be at least 2 letters"
          },
          email: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
          },
          phone: {
            required: "Please specify your phone",
            minlength: "Phone must be at least 11 digits"
          },
        },
      });
    });

  $(document).ready(function(){
    $('.phone').mask('+7 (000) 000-00-00');
  });

  });



});
