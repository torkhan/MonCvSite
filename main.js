/*
$(document).ready(function(){
    $("#test").hide();
    $("#test1").hide();
    $("#test2").hide();
    $("#test3").hide();

    $("button").click(function(){
        $("#test").show();
        $("#test1").show();
        $("#test2").show();
        $("#test3").show();

   /!* $(window).scroll(function() {*!/
/!*
        if ($(this).scrollTop() > 140) {
*!/
            $("#test").animate({

                left: '150px',
                opacity: '0.5',
                height: '50%',
                width: '50%'
            });
        $("#test1").animate({

            right: '150px',
            opacity: '0.5',
            height: '50%',
            width: '50%'
        });
        $("#test2").animate({

            left: '150px',
            opacity: '0.5',
            height: '50%',
            width: '50%'
        });
        $("#test3").animate({

            right: '150px',
            opacity: '0.5',
            height: '50%',
            width: '50%'
        });
/!*
        }
*!/
    });
});*/
$(document).ready(function() {
    let t = 200;
    $(".card").hide();
    $('.card').each( function(i){
        let $this = $(this);

        setTimeout(function() {
            $this.show().animate({ right: '150px',
                opacity: '0.5',
                height: '50%',
                width: '50%'},800);
        }, t);

        t += 450;
    });
});