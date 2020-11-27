$(document).ready(function(){

    // sticky navigation

    $('.features').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky')
        }
        else {
            $('nav').removeClass('sticky')
        }
    })

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            window.location.hash = hash;
        });
        } 
    });

    $('.js-nav-icon').click(function(){
        var nav = $('.js-main-nav');
        nav.toggle(200);
    })
})