let visible = false;

$(".toggle").click(function(){

    switch (visible){
        case false: {
            $('.search-bar').slideDown();
            $('.nav-menu').slideDown();
            $('.social-media').slideDown();
            visible = true;
            break;
        }
        case true: {
            $('.search-bar').slideUp();
            $('.nav-menu').slideUp();
            $('.social-media').slideUp();
            visible = false;
        }
    }
});

function takeAwayStyles() {
    //if the viewport is greater than the break point for tablet-small (this is like min-width: 500px)
    //if I made it equal to 500px then it sometimes wont work if the user resizes the view port really fast
    if (window.innerWidth >= 500){
        // check if inline style rules exist, (Jquery will add display: block or display:none as inline styles when the is button pressed )
        if ($(".search-bar").attr("style") != undefined){
            $(".search-bar").removeAttr('style'); // remove inline style rules
        }

        if ($(".nav-menu").attr("style") != undefined){
            $(".nav-menu").removeAttr('style'); // remove inline style rules
        }

        if ($(".social-media").attr("style") != undefined){
            console.log("Run dis code");
            $(".social-media").removeAttr('style'); // remove inline style rules
        }
    }
}

window.onresize = takeAwayStyles;

