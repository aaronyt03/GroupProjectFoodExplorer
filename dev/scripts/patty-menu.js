$("#slide-menu").hide();
let visible = false;

$(".toggle").click(function(){
    switch (visible){
        case false: {
            $('#slide-menu').slideDown();
            visible = true;
            break;
        }
        case true: {
            $('#slide-menu').slideUp();
            visible = false;
        }
    }
});