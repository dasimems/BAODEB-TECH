//open url code starts here

function openUrl(url) {
    window.open(url);
}

//open url code stops here

$(document).ready(function() {



    $(".feedback-form").fadeOut(1500);
    // opens the feedback content


    $("#feedback-btn").click(function() {
        $(".feedback-form").css({
            "position": "fixed",
            "display": "flex",
        });
        $(".feedback-form").fadeIn(1500);
    });

    $("#close-feedback-form").click(function() {
        $(".feedback-form").css({
            "position": "absolute",
            "display": "none"
        });
        $(".feedback-form").fadeOut(1500);
    });

    //scroll function starts here

    window.addEventListener('scroll', function() {
        if (window.scrollY >= 50) {
            $("header").css({
                "background": "rgb(151,198,236)"
            });
        } else {
            $("header").css({
                "background": "rgba(255,255,255,.5)"
            });
        }

        if (document.getElementById('btn2').style.display = "none") {
            $(".mobile-menu").slideUp(800)
                .fadeOut(800);

            $("#btn1").css({
                "background": "black",
                "transition": "0.8s ease all",
                "transform": "rotateZ(0deg)",
                "marginTop": "3.75px"
            })

            $("#btn2").css({
                "background": "black",
                "display": "block",
                "transition": "0.8s ease all",
                "marginTop": "3.75px"
            })

            $("#btn3").css({
                "background": "black",
                "transition": "0.8s ease all",
                "transform": "rotateZ(0deg)",
                "marginTop": "3.75px"
            })
        }
    })

    //scroll function ends here

    //resize function starts here

    window.addEventListener('resize', function() {
        if (document.getElementById('btn2').style.display = "none") {
            $(".mobile-menu").slideUp(800)
                .fadeOut(800);

            $("#btn1").css({
                "background": "black",
                "transition": "0.8s ease all",
                "transform": "rotateZ(0deg)",
                "marginTop": "3.75px"
            })

            $("#btn2").css({
                "background": "black",
                "display": "block",
                "transition": "0.8s ease all",
                "marginTop": "3.75px"
            })

            $("#btn3").css({
                "background": "black",
                "transition": "0.8s ease all",
                "transform": "rotateZ(0deg)",
                "marginTop": "3.75px"
            })
        }
    })

    //resize function ends here

    //code to detects if the document has been scrolled and then reloaded starts here
    if (window.scrollY >= 50) {
        $("header").css({
            "background": "rgb(151,198,236)"
        });
    } else {
        $("header").css({
            "background": "rgba(255,255,255,.5)"
        });
    }

    //code to detects if the document has been scrolled and then reloaded ends here

    //code to show menu when in mobile view starts here

    $(".mobile-menu").slideUp()
        .fadeOut(0.1);

    $(".menu-btn").click(function() {

        if (document.getElementById('btn2').style.display != "none") {
            $(".mobile-menu").slideDown(800)
                .fadeIn(800);

            $("#btn1").css({
                "background": "red",
                "transition": "0.8s ease all",
                "transform": "rotateZ(45deg)",
                "marginTop": "6.67px"
            })

            $("#btn2").css({
                "background": "red",
                "display": "none",
                "transition": "0.8s ease all"
            })

            $("#btn3").css({
                "background": "red",
                "transition": "0.8s ease all",
                "transform": "rotateZ(-45deg)",
                "marginTop": "-5px"
            })
        } else {
            $(".mobile-menu").slideUp(800)
                .fadeOut(800);

            $("#btn1").css({
                "background": "black",
                "transition": "0.8s ease all",
                "transform": "rotateZ(0deg)",
                "marginTop": "3.75px"
            })

            $("#btn2").css({
                "background": "black",
                "display": "block",
                "transition": "0.8s ease all",
                "marginTop": "3.75px"
            })

            $("#btn3").css({
                "background": "black",
                "transition": "0.8s ease all",
                "transform": "rotateZ(0deg)",
                "marginTop": "3.75px"
            })
        }
    })

    //code to show menu when in mobile view ends here


})