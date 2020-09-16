
/*$(document).ready(function() {
    let t = 200;
    $("#test1").hide();
    $('.card').each( function(i){
        let $this = $(this);

        setTimeout(function() {
            $this.show().animate({
                opacity: '0.5',
                height: '50%',
                width: '50%'},1000);

        }, t);

        t +=650;

    });
});*/

$("#test1").hide();
$("#test2").hide();
$("#test3").hide();
$("#test4").hide();
$(document).ready(function(){

    $("#test1").fadeIn(4000);
    $("#test2").fadeIn(6000);
    $("#test3").fadeIn(7000);
    $("#test4").fadeIn(8000);
        });

