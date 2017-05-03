$(function(){
    $(document).ready(function(){
        $( "<div class='blackboard'><aside><div class='container'><div class='row'><div id='target-legend' class='col-md-12'><p></p></div></div></div></aside></div>" ).appendTo('body');
        
        $('.blackboard').click(function(){
            $(this).fadeOut(200);
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
    });
    
    
});


