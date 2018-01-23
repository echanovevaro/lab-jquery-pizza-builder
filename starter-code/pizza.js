// Write your Pizza Builder JavaScript in this file.
// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {
    $( ".crust" ).removeClass( "crust-gluten-free" );
    $( ".sauce" ).removeClass( "sauce-white" );
    $( ".btn-crust, .btn-sauce" ).removeClass( "active" );
    $( "li:contains('white sauce'), li:contains('gluten-free crust')" ).hide();
    $(".panel.price strong").text("$13");

    $(".btn-pepperonni").on("click", function(e){
        $(".pep").fadeToggle();
        $( "li:contains('pepperonni')").fadeToggle();
        actualizePrice(parseInt($( "li:contains('pepperonni')").text().replace(/[^\d]/,"")), e);
    });

    $(".btn-mushrooms").on("click", function(e){
        $(".mushroom").fadeToggle();
        $( "li:contains('mushrooms')").fadeToggle();    
        actualizePrice(parseInt($( "li:contains('mushrooms')").text().replace(/[^\d]/,"")), e);    
    });

    $(".btn-green-peppers").on("click", function(e){
        $(".green-pepper").fadeToggle();
        $( "li:contains('green peppers')").fadeToggle();
        actualizePrice(parseInt($( "li:contains('green peppers')").text().replace(/[^\d]/,"")), e);    
    });

    $(".btn-crust").on("click", function(e){
        $( ".crust" ).toggleClass( "crust-gluten-free" );
        $( "li:contains('gluten-free crust')").fadeToggle();
        actualizePrice(parseInt($( "li:contains('gluten-free crust')").text().replace(/[^\d]/,"")), e);    
    });

    $(".btn-sauce").on("click", function(e){
        $( ".sauce" ).toggleClass( "sauce-white" );
        $( "li:contains('white sauce')").fadeToggle();
        actualizePrice(parseInt($( "li:contains('white sauce')").text().replace(/[^\d]/,"")), e);    
    });

    $(".btn").on("click", function(e){
        $( this ).toggleClass( "active" );
    });
     
});

function actualizePrice(gap, event){
    var totalPrice = parseInt($(".panel.price strong").text().replace(/[^\d]/,""));
    if($(event.currentTarget).hasClass("active")){
        $(".panel.price strong").text("$" + parseInt(totalPrice - gap ));
    } else {
        $(".panel.price strong").text("$" + parseInt(totalPrice + gap ));
    }
}

