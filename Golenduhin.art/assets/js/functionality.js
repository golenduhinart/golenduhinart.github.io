//Предотвратить эффект прокрутки 'резинкой' на iOS, которая позволяет страницу (тело) будет прокручиваться, даже если div является фиксированный/абсолютная позиция
var fixed = document.body;

//Кнопка меню гамбургер переключения
$(document).ready(function(){
		$(".menu-hamburger").click(function() {

			//Показать и скрыть разноцветные блоки навигации с эффект плавного перехода
				$("nav").fadeToggle();
				//Изменить значок меню гамбургер из бургер снова закрыть и обратно
				$(this).toggleClass("is-active");
				//Измените текст сообщения меню гамбургер из меню, чтобы закрыть и обратно
				($(".header-menu-instructions").text() === "Меню") ? $(".header-menu-instructions").text("Закрыть") : $(".header-menu-instructions").text("Меню");
				// В то время как наши разноцветные навигация работает у нас временно отключить прокрутку на наш организм (но только на рабочем столе)
				if ($(window).width() > 414) {
						$('body').toggleClass('nav-overflow');
						//Предотвратить эффект прокрутки 'резинкой' на iOS (для iPad), которая позволяет страницу (тело) будет прокручиваться, даже если див (многоцветный меню) задано фиксированное/абсолютная позиция
						if ($(".header-menu-instructions").text() == 'Закрыть') {
								document.addEventListener('touchmove', handleTouchMove, false);
						}
						else {
								document.removeEventListener('touchmove', handleTouchMove);
						}
				}
		});
});

//E-mail Ajax Send
$(function() {
		$("form.callback").submit(function() { //Change
				var th = $(this);
				$.ajax({
						type: "POST",
						url: "mail.php", //Change
						data: th.serialize()
				}).done(function() {
						$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
						setTimeout(function() {
								$(th).find('.success').removeClass('active').fadeOut();
								th.trigger("reset");
						}, 5000);
				});
				return false;
		});
});

//Оперативный цветовой эффект перехода страницы (с логотипом)
window.addEventListener("beforeunload", function () {
	document.body.classList.add("animate-out");
});

//Вернуться к началу эффекта прокрутки (для мобильных устройств) после нажатия на стрелку.
function goTop() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
}

//Отключить определенные классы ховер (который существенно изменит прозрачность, Размер внешний вид и т. д.) на устройствах с сенсорным экраном для устранения проблем 'двойной тап' в старых версиях Safari и Chrome на iOS. Присвоить класс " А " нет касания на рабочем столе (мышь ориентирована) браузерах.
$(document).ready(function(){
		if (!("ontouchstart" in document.documentElement)) {
				document.body.className += " no-touch";
		}
})

//Предотвратить эффект прокрутки 'резинкой' на iOS, которая позволяет странице (тело) будет прокручиваться, даже если div является фиксированный/абсолютная позиция
function handleTouchMove(e) {
	e.preventDefault();
}

	/* Every time the window is scrolled ... */
	$(window).scroll( function(){
	
			/* Check the location of each desired element */
			$('.hideme').each( function(i){
					
					var bottom_of_object = $(this).offset().top + $(this).outerHeight();
					var bottom_of_window = $(window).scrollTop() + $(window).height();
					
					/* If the object is completely visible in the window, fade it in */
					if( bottom_of_window > bottom_of_object ){
							
							$(this).animate({'opacity':'1'},800);
				 
					}
			}); 
	});

//Предотвратить эффект прокрутки 'резинкой' на iOS, которая позволяет странице прокручивается даже при фиксированном диве
		//var fixed = document.body;

		//fixed.addEventListener('touchmove', function(e) {

				//e.preventDefault();

	 // }, false);