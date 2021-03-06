// Add it after jquery.magnific-popup.js and before first initialization code
$.extend(true, $.magnificPopup.defaults, {
  tClose: 'Закрыть (Esc)', // Alt text on close button
  tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
  gallery: {
    tPrev: 'Назад (Left arrow key)', // Alt text on left arrow
    tNext: 'Вперед (Right arrow key)', // Alt text on right arrow
    tCounter: '%curr% из %total%' // Markup for "1 of 7" counter
  },
  image: {
    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
  },
  ajax: {
    tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
  }
});

/*=====  End of Translating magnificPopup  ======*/

// Загрузка карты
function loadMapScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyC9a_UDjprd--E33HE4d9_S6I0yjvViR8o&callback=initializeMap";
  document.head.appendChild(script);
}

// Инициализация карты
function initializeMap() {
  var locationOffice = { lat: 53.239355, lng: 34.370966 };

  function createProp(defaultLocation) {
    return {
      center: defaultLocation,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
    };
  }

  var mapProp = createProp({ lat: 53.239355, lng: 34.375 });
  var map = new google.maps.Map(document.getElementById("contacts-map"), mapProp);
  var markerPriem = new google.maps.Marker({
    position: locationOffice,
    map: map,
    title: '«Агентство хороших квартир»'
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var $contactsMap = $('#contacts-map');

  if ($contactsMap.length) {
    loadMapScript();
  }


  /*=======================================
  =            How work slider            =
  =======================================*/

  var $howWorkSlider = $('.how-work-slider');
  if ($howWorkSlider.length) {
    $howWorkSlider.slick({
      accessibility: false,
      draggable: false,
      appendDots: '.how-work-pager',
      dots: true,
      dotsClass: 'how-work-pager__dots',
      arrows: false,
      fade: true
    });
  }

  $('.js-trigger-inline-popup').magnificPopup({
    mainClass: 'popup-fade',
    removalDelay: 300
  });

  $('.js-trigger-image-popup').magnificPopup({
    type: 'image',
    image: {
      verticalFit: false
    },
    mainClass: 'popup-fade',
    removalDelay: 300
  });

  /*=====  End of How work slider  ======*/




  /*============================================
  =            Testimonials skiders            =
  ============================================*/

  // Testimonials slider photos

  $('.testimonials-slider-photos').slick({
    accessibility: false,
    arrows: false,
    draggable: false,
    fade: true
  });


  // Testimonials slider infos

  $('.testimonials-slider-info').slick({
    accessibility: false,
    asNavFor: '.testimonials-slider-photos, .testimonials-slider-messages'
  });


  // Testimonials slider messages

  $('.testimonials-slider-messages').slick({
    accessibility: false,
    arrows: false,
    draggable: false
  });

  /*=====  End of Testimonials skiders  ======*/



  /*==================================
  =            Input mask            =
  ==================================*/

  // Phone
  $('input[type="tel"]').inputmask("+7 (999) 999 99 99", {});

  /*=====  End of Input mask  ======*/



  /*=====================================
  =            Yandex direct            =
  =====================================*/

  $('form').on('submit', function(event) {
    yaCounter39340865.reachGoal('SEND_ORDER');
  });

  /*=====  End of Yandex direct  ======*/

});
