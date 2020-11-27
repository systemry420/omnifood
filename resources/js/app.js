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
})