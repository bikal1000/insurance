
jQuery(document).ready(function() {
	
	
	"use strict";

	/*----------------------------
     mobile menu
     ------------------------------ */

    var $dropToggle= $("ul.dropdown-menu [data-toggle=dropdown]"),
        $module=$(".module");
    $dropToggle.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass("open");
        $(this).parent().toggleClass("open");
    });
    $module.on("click",function(){
        $(this).toggleClass("toggle-module");
    });
    $module.find("input.form-control",".btn",".cancel").on("click",function(e) {
        e.stopPropagation();
    });


	
	
	


    /*----------------------------
     Insurance coverage area
     ------------------------------ */
    $(".insurance-service-content").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 5,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    })

    // get a quote
    $("a.ui-trigger").click(function(e) {
        e.preventDefault();
        $(".ui-outer").fadeIn(400);
    });
    $("a.ui-close").click(function(e) {
        e.preventDefault();
        $(".ui-outer").fadeOut(400);
    });

}),  $(document).ready(function() {
    $("#Testimonials-1col").owlCarousel({
        autoPlay: 3e3,
        items: 1,
        itemsDesktop: [1e3, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: !1
    }), $("#Testimonials-2col").owlCarousel({
        autoPlay: 3e3,
        items: 2
    }), $("#Testimonials-3col").owlCarousel({
        autoPlay: 3e3,
        items: 3,
        itemsDesktop: [1e3, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [480, 1],
        itemsMobile: !1
    })
}), $(document).ready(function() {
    $("#Our-clients").owlCarousel({
        autoPlay: 3e3,
        items: 6,
        pagination: !1,
        itemsDesktop: [1e3, 4],
        itemsDesktopSmall: [900, 4],
        itemsTablet: [600, 3],
        itemsMobile: !1
    }), $("#our-clients-3col").owlCarousel({
        autoPlay: 3e3,
        items: 3,
        pagination: !1,
        itemsDesktop: [1e3, 4],
        itemsDesktopSmall: [900, 4],
        itemsTablet: [600, 3],
        itemsMobile: !1
    }), $("#our-clients-3col2").owlCarousel({
        autoPlay: 3e3,
        items: 3,
        pagination: !1
    })
}), $(document).ready(function() {
    var e = $("#slider-blog");
    e.owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: !0,
        autoPlay: 3e3,
        items: 10,
        itemsDesktop: [1e3, 5],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: !1
    }), $(".next").click(function() {
        e.trigger("owl.next")
    }), $(".prev").click(function() {
        e.trigger("owl.prev")
    })
}), $(document).ready(function() {
    var e = $("#slider-projects");
    e.owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: !0,
        autoPlay: 3e3,
        items: 10,
        itemsDesktop: [1e3, 5],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: !1
    }), $(".next").click(function() {
        e.trigger("owl.next")
    }), $(".prev").click(function() {
        e.trigger("owl.prev")
    })
}), $(document).ready(function() {
    $("#Projects-Slider").owlCarousel({
        slideSpeed: 300,
        items: 3,
        paginationSpeed: 400
    }), $("#projects-slider-4col").owlCarousel({
        slideSpeed: 300,
        items: 4,
        paginationSpeed: 400
    })
}), $(document).ready(function() {
    function e(e) {
        "*" == e ? ($(".portfolio-items .portfolio-item").fadeIn(0), $(".portfolio-items .portfolio-item").removeClass("animated flipInY")) : $(".portfolio-items .portfolio-item").each(function() {
            $(this).attr("data-filter") == e && $(this).fadeIn(0)
        })
    }
    $("ul#filters li a").click(function(t) {
        t.preventDefault(), $("ul#filters .active-link").removeClass("active-link"), $(this).parent().addClass("active-link");
        var a = $(this).attr("data-filter").toLowerCase();
        return $(".portfolio-items .portfolio-item:visible").each(function() {
            $(this).fadeOut(0, function() {
                e(a)
            }), $(".portfolio-items .portfolio-item").addClass("animated flipInY")
        }), !1
    })
}), $(document).ready(function() {
    $(".portfolio-item").each(function() {
        var e = $(this),
            t = (e.index(), e.find(".projectItem-hover"));
        e.hover(function() {
            return t.fadeIn(300).find(".projectItem-hover").addClass("animated fadeOutUp").addClass("animated fadeInDown"), t.find(".projectItem-hover").addClass("animated fadeOutDown").addClass("animated fadeInUp"), !1
        }, function() {
            return t.fadeOut(300).find(".projectItem-hover").addClass("animated fadeInDown").addClass("animated fadeOutUp"), t.find(".projectItem-hover").addClass("animated fadeInUp").addClass("animated fadeOutDown"), !1
        })
    })
}), $(window).load(function() {
    $(".loading-overlay .spinner").fadeOut(300), $(".loading-overlay").fadeOut(300)
}), $(window).load(function() {
    $("body").css({
        overflow: "auto",
        height: "auto",
        position: "relative"
    })
});
var frm = $("#cform");
frm.submit(function(e) {
    $.ajax({
        type: frm.attr("method"),
        url: frm.attr("action"),
        data: frm.serialize(),
        success: function() {
            $("#cform").append("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><i class='fa fa-thumbs-o-up'></i><strong>Well done!</strong> Your Message Submitted!</div>")
        }
    }), e.preventDefault()
}), $(document).ready(function() {
    $(".fancybox").fancybox(), $(".fancybox-effects-a").fancybox({
        helpers: {
            title: {
                type: "outside"
            },
            overlay: {
                speedOut: 0
            }
        }
    }), $(".fancybox-effects-b").fancybox({
        openEffect: "none",
        closeEffect: "none",
        helpers: {
            title: {
                type: "over"
            }
        }
    }),  $(".fancybox-buttons").fancybox({
        openEffect: "none",
        closeEffect: "none",
        prevEffect: "none",
        nextEffect: "none",
        closeBtn: !1,
        helpers: {
            title: {
                type: "inside"
            },
            buttons: {}
        },
        afterLoad: function() {
            this.title = "Image " + (this.index + 1) + " of " + this.group.length + (this.title ? " - " + this.title : "")
        }
    }), $(".fancybox-thumbs").fancybox({
        prevEffect: "none",
        nextEffect: "none",
        closeBtn: !1,
        arrows: !1,
        nextClick: !0,
        helpers: {
            thumbs: {
                width: 50,
                height: 50
            }
        }
    }), $(".video").click(function() {
        return $.fancybox({
            padding: 0,
            autoScale: !1,
            transitionIn: "none",
            transitionOut: "none",
            title: this.title,
            width: 640,
            height: 385,
            href: this.href.replace(new RegExp("watch\\?v=", "i"), "v/"),
            type: "swf",
            swf: {
                wmode: "transparent",
                allowfullscreen: "true"
            }
        }), !1
    }), $(".fancybox-media").attr("rel", "media-gallery").fancybox({
        openEffect: "none",
        closeEffect: "none",
        prevEffect: "none",
        nextEffect: "none",
        arrows: !1,
        helpers: {
            media: {},
            buttons: {}
        }
    })
}),  jQuery(".tap-title").each(function() {
    jQuery(this).click(function() {
        return jQuery(this).parent().parent().hasClass("toggle-accordion") ? (jQuery(this).parent().find("li:first .tap-title").addClass("active"), jQuery(this).parent().find("li:first .tap-title").next(".accordion-inner").addClass("active"), jQuery(this).toggleClass("active"), jQuery(this).next(".accordion-inner").slideToggle().toggleClass("active"), jQuery(this).find("i").toggleClass("fa-plus").toggleClass("fa-minus")) : jQuery(this).next().is(":hidden") ? (jQuery(this).parent().parent().find(".tap-title").removeClass("active").next().slideUp(200), jQuery(this).parent().parent().find(".tap-title").next().removeClass("active").slideUp(200), jQuery(this).toggleClass("active").next().slideDown(200), jQuery(this).next(".accordion-inner").toggleClass("active"), jQuery(this).parent().parent().find("i").removeClass("fa-minus").addClass("fa-plus"), jQuery(this).find("i").removeClass("fa-plus").addClass("fa-minus")) : (jQuery(this).toggleClass("active").next().slideToggle(200), jQuery(this).next(".accordion-inner").toggleClass("active"), jQuery(this).parent().parent().find("i").removeClass("fa-minus").addClass("fa-plus")), !1
    })
}), $(document).ready(function() {
    var e = $("#items-num").val();
    $(".add-items .plus").click(function(t) {
        t.preventDefault(), e++, $("#items-num").attr("value", e)
    }), $(".add-items .minus").click(function(t) {
        t.preventDefault(), e > 1 && (e--, $("#items-num").attr("value", e))
    })
});
var winScroll = $(window).scrollTop();
winScroll > 1 ? $("#to-top").css({
    bottom: "10px"
}) : $("#to-top").css({
    bottom: "-100px"
}), $(window).on("scroll", function() {
    winScroll = $(window).scrollTop(), winScroll > 1 ? $("#to-top").css({
        opacity: 1,
        bottom: "30px"
    }) : $("#to-top").css({
        opacity: 0,
        bottom: "-100px"
    })
}), $("#to-top").click(function() {
    return $("html, body").animate({
        scrollTop: "0px"
    }, 800), !1
}), $(document).ready(function() {
    (new WOW).init()
});




/* ==========================================================================
 handleContactForm - validate and ajax submit contact form
 ========================================================================== */

handleContactForm();

function handleContactForm() {

    if(typeof $.fn.validate != 'undefined'){

        $('#contact-form').validate({
            errorClass: 'validation-error', // so that it doesn't conflict with the error class of alert boxes
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Field is required!"
                },
                email: {
                    required: "Field is required!",
                    email: "Please enter a valid email address"
                },
                subject: {
                    required: "Field is required!"
                },
                message: {
                    required: "Field is required!"
                }
            },
            submitHandler: function(form) {
                var result;
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "php/send.php",
                    success: function(msg) {

                        if (msg == 'OK') {
                            result = '<div class="alert success"><i class="fa fa-check-circle-o"></i>The message has been sent!</div>';
                            $('#contact-form').clearForm();
                        } else {
                            result = '<div class="alert error"><i class="fa fa-times-circle"></i>' + msg + '</div>';
                        }
                        $("#formstatus").html(result);

                    },
                    error: function() {

                        result = '<div class="alert error"><i class="fa fa-times-circle"></i>There was an error sending the message!</div>';
                        $("#formstatus").html(result);

                    }
                });
            }
        });

    }

}