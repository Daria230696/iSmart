
$(document).ready(function(){
    $('.burger').on('click', function(evt){
    $('.mob_menu, .burger').toggleClass('active')
});

    let scroll_factor = 100;

    function scroll_to(elem, target) {
    $(elem).on('click', function(evt){
        evt.preventDefault()
        $('.mob_menu, .burger').removeClass('active')
        $('html,body').stop().animate({ scrollTop: $(target).offset().top - scroll_factor }, 1000)
    });
}
    scroll_to('.to_service', '.service')
    scroll_to('.to_advantages', '.advantages')
    scroll_to('.to_use', '.use')
    scroll_to('.to_pro', '.pro')
    scroll_to('.to_another', '.another')
});
