$(document).ready(function(){
    $('.term-condition-title').click(function(){
        var term_content = $(this).next();
        console.log(term_content);
        if(term_content.css('display') == 'none')
        {
            term_content.css({height:0,display:'block'}).animate({height:term_content.attr('data-height')});
        }
        else
        {
            term_content.animate({height:0},function(){
                $(this).css('display','none');
            });
        }
    });
});