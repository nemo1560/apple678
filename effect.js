$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 200) {
        $(".menu_hide").css({ "display": "none" });
    }
    else {
        $(".menu_hide").css({ "position": "fixed", "display": "block", "z-index": "2" });
    }
})

$('.menu .navbar-right > li').click(function () {
    //$(this).find('a').attr('href') = get href value.
    // offset().top = get current pos of element.
    //animate({param., param},time);
    $('html,body').animate({
        scrollTop: $($(this).find('a').attr('href')).offset().top
    }, 500);
})

$('.menu_hide .navbar-right > li').click(function () {
    $('html,body').animate({
        scrollTop: $($(this).find('a').attr('href')).offset().top
    }, 500);    
})  

$('.menu_hide .brand').click(function () {
    $('html,body').animate(
        { scrollTop: 0 }, 500);
    
})

$('.menu_hide .mobile-mneu a').click(function(){
    if($('.menu_hide .mobile-mneu').find('menu_child')){
        $('.menu_child').show();
        $('.menu_child').delay(4000).fadeOut(500);
    } 
})

$('.menu_hide .mobile-mneu .menu_child > li').click(function () {
    $('html,body').animate({
        scrollTop: $($(this).find('a').attr('href')).offset().top
    }, 500);    
})  
AOS.init({
    duration: 2000,
});
