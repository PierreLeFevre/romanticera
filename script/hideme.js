$(document).ready(function() {
    
    //Körs varje gång användaren skrollar
    $(window).scroll( function(){
    
        //Kollar var varje element med klassen .hideme ligger
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + ( ( $(this).outerHeight() ) / 2 );
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //Om hela objektet är i användarens viewport, lägg till klass viewed för senare hantering av css
            if( bottom_of_window > bottom_of_object ){
               $(this).addClass('viewed')
            }
            
        }); 
    
    });
});

//Väntar tills sidan laddats innan innehållet visas
$(window).on('load', function() {
	$('.wrapper').addClass('pageLoaded');
});
