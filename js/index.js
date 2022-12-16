$(document).ready(function(){
    $(".wrap1 .icon-but").click(function(){
        $(".wrap2 .o").toggle(500)
    })
})

$(document).ready(()=>{
    $(window).scroll(function(){
        if($(this).scrollTop()>=10){
            $(".top").fadeIn()
        }
        else{
            $(".top").fadeOut()
        }
    })
    $(".top").click(function(){
        $("body,html").animate({
            "scrollTop":"0px"
        })
    })
})


$(document).ready(function(){
    $(".wrap2 .service").click(function(e){
        e.preventDefault();
        if($(this).next(".wrap2 .inner").is(":hidden")){
            $(".wrap2 .inner").slideUp();
            $(this).next(".wrap2 .inner").slideDown();
        }
        else{
            $(this).next(".wrap2 .inner").slideUp();
        }
    });
    $(".wrap2 .service").focusout(function(e){
        $(".wrap2 .inner").slideUp();
    })
})
