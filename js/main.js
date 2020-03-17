$(document).ready(function () {
    'use strinct'

    //********* page loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 2000);

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    //********** menu background color change while scroll
    $(window).on('scroll', function () {
        var menu_area = $('.navbar');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //************ smooth scroll js

    $('a.smooth-menu').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    //********** ripple effect
    function samuel_ripple() {

        jQuery('.banner-area').ripples({
            resolution: 500,
            dropRadius: 20,
            perturbance: 0.04
        });
    }
    samuel_ripple();

    //********* typed js

    var element = $(".text-affect");

    $(function () {
        element.typed({
            strings: ["Designer.", "Developer.", "Freelaner."],
            loop: true,
            typeSpeed: 90
        });
    });

    //***** Skill bar js

    var skillbar = $(".skillbar");

    skillbar.waypoint(function () {
        skillbar.each(function () {
            $(this).find(".skillbar-child").animate({
                width: $(this).data("percent")
            }, 1000);
        });
    }, {
        offset: "60%"
    });

    //****** magnific popup

    $('.view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    //*********wow js

    new WOW().init();

    //************* Owl Carousel

    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 10,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            800: {
                items: 2,
                nav: false
            },
            1200: {
                items: 3,
                nav: false
            }
        }
    })

    /*====Form validatuon=====*/
    // Disable form submissions if there are invalid fields

    window.addEventListener(
        "load",
        function () {
            // Get the forms we want to add validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener(
                    "submit",
                    function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );

})