//Чтобы сделать так,чтобы шапка прокручивалась вместе со скролом,
//нужно создать обработчик события,кот. будет отслеживать скролл
//при помощи JavaScript код будет выглядеть примерно так:
//window.onscroll =

//Но мы хотим это сделать при помощи jQuery
//обращаемся к document к методу scroll и прописываем ф-ию
$(document).scroll(function(){
    //если ширина документа меньше 1024px,то фиксировать шапку не будем
    if($(document).width() < 1024)
        return false;
    //узнаем сколько мы уже проскролили scrollTop - в пикселях
    //$('.ful-page' - обращаемся к нашему обьекту с главной картинкой
    if($(document).scrollTop() > $('.full-page').height()/2) 
        $("header").addClass("fixed");
        //беру header и добавляю к нему класс fixed
    else
        //удаляем класс
        $("header").removeClass("fixed");    
});

//вывод прокрутки в консоль(не онлайн)
// var scrol = $(document).scrollTop();
// console.log(scrol);

//повтор кода без коментов

// $(document).scroll(function(){
//     if($(document).width() < 1024)
//         return false;
//     if($(document).scrollTop() > $('.full-page').height() / 2)
//         $("header").addClass("fixed");
//     else
//         $("header").removeClass("fixed");
// });


//добавляем обработчик для кнопки <div class="up-btn"> чтобы она
// перкидвывала нас на верх
//вибараем кнопку ".up-btn" вешаем обработчик события on,
//пишем команду,кот. он будет обрабатывать и дальше пишем ф-ию
//в ней выбираем теги html,body и пишем ф-ию .animate(позво-
//ляет анимировать каккой-либо тег по св-ам)
//исп-ем св-во scrollTop:0(jQuery св-во)-как бы говорим,что скролл равно 0
//и поэтому перекидывает вверх.Вторым пар-ом указываем скорость перехода
//'2000' - 2c,или 'slow'

$(".up-btn").on("click",function(){
    $("html,body").animate({
        scrollTop:0
    },'slow');
});

//теперь делаем обработчик на кнопку show-menu,чтобы при нажатии менялось
//в кнопке  hidden-menu right: -300px; на right: 0;
//выбираем hidden-menu и применяем ф-ию animate(св-во "right":0 через 500мс )
$("#show-menu").on("click",function(){
    $("#hidden-menu").animate({
        "right":0
    },500);
});

//теперь тоже самое для кнопки close
$("#hidden-menu .close").on("click",function(){
    $("#hidden-menu").animate({
        //когда пишем в пикселях,надо указывать кавычки
        "right":"-300px"
    },200);
});


//прописываем,что ф-ии для плагина должны применятся,когда страница загружена
//.ready - ф-ия,чтобы грузить slick в конце
//в док-ции по slick написано: $('.single-item').slick(); чтобы подключить его
//в нашем случае вместо .single-item' пишем #slider
//НЕПОНЯТНО ПОЧЕМУ ВМЕСТО . пишем #
//внутри ф-ии .slick можем прописывать разные пар-ры из док-ии
$(document).ready(function(){
    $('#slider').slick({
        dots:false,//точки под слайдами
//теперь чтобы поработать с кнопками вперед назад,надо зайти в setting 
//и найти prevArrow и nextArrow и поменять им св-ва
        //prevArrow:'<button type="button" class="slick-next">Next</button>'//значение по умолчанию
        //теперь переписываем его
        prevArrow: '<div class="arrow-prev"><i class="fa-solid fa-arrow-left"></i></div>',
        //тоже самое для стрелки вправо
        nextArrow: '<div class="arrow-next"><i class="fa-solid fa-arrow-right"></i></div>',
        //указывает будет ли слайды бесконечны(по умолч-true)
        infinite:true,
        //сколько слайдов в одном ряду(по умолчанию 1,перетягивается по 1)
        slidesToShow:1,
        slidesToScroll:1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });
});