$('a').click(function (desaparecer){
    desaparecer.preventDefault(); //evisa que se redireccione al link
    $(this).hide();
});