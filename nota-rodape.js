$(function(){
    $(document).ready(function(){
        $( "<div class='blackboard'></div><aside class='footer-note'><div class='container'><div class='row'><div id='target-legend' class='col-md-12'><p>Teste</p></div></div></div></aside>" ).appendTo('body');
        
        $('.blackboard').click(function(){
            $(this).fadeOut(200);
            $('.footer-note').slideToggle(200);
        });
    });
    
    $('.legend').click(function(e){
        e.preventDefault();
        
        /* Recuperando a legenda */
        var legenda = $(this).data('legend');
        /* Recuperando a palavra destacada */
        var palavra = $(this).text();
        
        $('#target-legend > p').html("<strong>" + palavra + "</strong> — " + legenda + "</p>");
        $('.blackboard').fadeIn(200);
        $('.footer-note').slideDown(200);
    });
    
    
});


