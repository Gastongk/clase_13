$('a').click(function (desaparecer){
    desaparecer.preventDefault(); //evita que se redireccione al link
    $(this).hide();
});

$('#cambiar').click(function () {
    $('#contenido').html('<img src="src/esports.webp" alt="">'); // Nuevo contenido

     // agregar css
     $('#contenido img').css({
       margin:'20px',
        'max-width': '100%', 
        height: 'auto', 
    });
});

$('#addClase').on('click',function(){
    $('ul li').addClass('claseNueva');
});

$('#btnToggle').on('click',function(){
    $('#mostrar').toggle();
    var buttonText = $(this).text();
        
        if (buttonText === "Mostrar") {
            $(this).text("Ocultar");
        } else {
            $(this).text("Mostrar");
        }
});