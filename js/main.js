$(function() {
    $('[data-fancybox="gallery"]').fancybox({
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
                NEXT: "Следующий",
                PREV: "Предыдущий",
                ERROR: "Содержимое не может быть загружено. <br/> Попробуйте повторить позже.",
                PLAY_START: "Начать слайдшоу",
                PLAY_STOP: "Приостановить слайдшоу",
                FULL_SCREEN: "Полный экран",
                THUMBS: "Миниатюры",
                DOWNLOAD: "Загрузить",
                SHARE: "Поделиться",
                ZOOM: "Масштаб"
            }
        },
        caption: function(instance, item) {
            var id = item.src.substr(18, (item.src.indexOf('.j') - 18));
            var it = captionArr[id];
            var caption = $(this).data('caption') || (it ? ('№' + id + ' ' + it.title + (it.info ? '<br />' + it.info : '')) : '');
            return caption;
        }
    });

    if (location.hash) {
        $(location.hash).click();
    }


    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: false,
        autoWidth: true,
        dots: false,
        nav: true,
        navText: [
            '<img class="fa-angle" src="./img/angle-left-solid.svg">',
            '<img class="fa-angle" src="./img/angle-right-solid.svg">'
        ],
        navContainer: '.car .custom-nav',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});