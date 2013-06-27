$(document).ready(function(){
    $('.headnav a').eq(0).bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', 'Index', 'en']);
    });

    $('.headnav a').eq(1).bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', 'Winners', 'en']);
    });

    $('.headnav a').eq(2).bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', '25Weeks', 'en']);
    });

    $('.headnav a').eq(3).bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', '25Years', 'en']);
    });

    $('.langnav a').eq(0).bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', 'Lang', 'cn']);
    });

    $('.langnav a').eq(1).bind('click',function(){
        _gaq.push(['_trackEvent', 'Follow', 'Weibo', 'en']);
    });

    $('.share a.share_mail').bind('click',function(){
        _gaq.push(['_trackEvent', 'Share', 'Email', 'en']);
    });

    $('.share a.share_weibo').bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', 'Weibo', 'en']);
    });

    $('.share a.button3').bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', 'LearnMore', 'en']);
    });

    $('.join a.button1').bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', 'Join', 'en']);
    });

    $('.join a.button2').bind('click',function(){
        _gaq.push(['_trackEvent', 'Follow', 'Weibo', 'en']);
    });

    $('.grouplink div').eq(0).find('a').bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', '25years', 'en']);
    });

    $('.grouplink div').eq(1).find('a').bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', 'Winners', 'en']);
    });

    $('.grouplink div').eq(2).find('a').bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', '25weeks', 'en']);
    });

    $('.term-condition-title a').bind('click',function(){
        _gaq.push(['_trackEvent', 'Link', 'Terms', 'en']);
    });
});