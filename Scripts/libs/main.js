$(document).ready(function(){

    $('.year-video a').bind('click',function(){
        var tpl = $('#video-tpl').html();
        $('.year-video').html(tpl);
        _gaq.push(['_trackEvcnt', 'Video', 'Play', 'cn']);
    });

    if($('.touch').length > 0)
    {
        var tpl = $('#video-touch-tpl').html();
        $('.year-video').html(tpl);
    }

    $('.headnav a').eq(0).bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', 'Index', 'cn']);
    });

    $('.headnav a').eq(1).bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', 'Winners', 'cn']);
    });

    $('.headnav a').eq(2).bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', '25Weeks', 'cn']);
    });

    $('.headnav a').eq(3).bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', '25Years', 'cn']);
    });

    $('.langnav a').eq(0).bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', 'Lang', 'en']);
    });

    $('.langnav a').eq(1).bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Follow', 'Weibo', 'cn']);
    });

    $('.share a.share_mail').bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Share', 'Email', 'cn']);
    });

    $('.share a.share_weibo').bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', 'Weibo', 'cn']);
    });

    $('.share a.button3').bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', 'LearnMore', 'cn']);
    });

    $('.join a.button1').bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', 'Join', 'cn']);
    });

    $('.join a.button2').bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Follow', 'Weibo', 'cn']);
    });

    $('.grouplink div').eq(0).find('a').bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', '25years', 'cn']);
    });

    $('.grouplink div').eq(1).find('a').bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', 'Winners', 'cn']);
    });

    $('.grouplink div').eq(2).find('a').bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', '25weeks', 'cn']);
    });

    $('.term-condition-title a').bind('click',function(){
        _gaq.push(['_trackEvcnt', 'Link', 'Terms', 'cn']);
    });
});