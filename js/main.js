$(function(){
    $('.header__slider-img').slick({
        infinite: false,
        appendArrows: $('.slick__arrow-pos'),
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        asNavFor: '.header__slider-txt',
        responsive: [
            {
              breakpoint: 670,
              settings: {
                arrows: false,
              }
            }
          ]
    });
    $('.header__slider-txt').slick({
        infinite: false,
        arrows: false,
        asNavFor: '.header__slider-img'
    });

    $('.news__slider').slick({
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        infinite: false,
    });

    $('select').styler();
    
    $(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
    });
    
    $('.header__btn-menu').on('click', function(){
        $('.menu__list').slideToggle();
    });
  });