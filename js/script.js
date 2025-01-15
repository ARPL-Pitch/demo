var loopchild = $(".loop").html();
var color = ['#FF6633', '#FFB399', '#FF33FF', '#00B3E6', '#E6B333', '#3366E6', '#408040', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#326e9c', '#1AB399', '#c25597', '#33991A', '#CC9999', '#B3B31A', '#05b366', '#4D8066', '#809980', '#7d855f', '#0f6118', '#999933', '#FF3380', '#b3b31b', '#51b53e', '#3a65a6', '#9900B3', '#c7364d', '#35825c', '#45a8a8', '#99E6E6', '#6666FF'];
$(document).ready(function () {
    var pass = true;
    $(".a-footer-mail").mouseover(function () {
        pass = true;
        $(".clip-footer").addClass("active");
        if (pass) $(this).addClass("g10");
    });
    $(".a-footer-mail").mouseleave(function () {
        pass = false;
        $(".clip-footer").removeClass("active");
        $(this).removeClass("g10");
    });
    setInterval(rotateBackground, 30);
    var i = 0;

    function rotateBackground() {
        i++;
        $('.clip-footer').css("background-image", "linear-gradient(" + i + "deg,#80bcf2, #975ff4, #df5b8d), linear-gradient(0deg, #80bcf2, #975ff4, #df5b8d)");
        $('.hero-card-about').css("background-image", "linear-gradient(" + i + "deg,#80bcf2, #975ff4, #df5b8d), linear-gradient(0deg, #80bcf2, #975ff4, #df5b8d)");
        return i;
    }
    setInterval(rotateSparaFlash, 30);
    var iI = 0;

    function rotateSparaFlash() {
        $(".spara-flash").css("color", color[iI]);
        if (iI == color.length) iI = 0;
        else iI++;
    }
    var linkname = "";
    $(".a-big-link").mouseover(function () {
        linkname = $(this).data("llink");
        $(".portfolio-card-link." + linkname).addClass("active");
        $(".work-card-link." + linkname).addClass("active");
        $(".portfolio-card-photo." + linkname).addClass("active");
        $(".work-card-photo." + linkname).addClass("active");
    });
    $(".a-big-link").mouseleave(function () {
        $(".portfolio-card-link." + linkname).removeClass("active");
        $(".work-card-link." + linkname).removeClass("active");
        $(".portfolio-card-photo." + linkname).removeClass("active");
        $(".work-card-photo." + linkname).removeClass("active");
    });
    var overlayName = "";
    $(".open-overlay").click(function () {
        overlayName = $(this).data("linkid");
        $("body, html").addClass("menu-active");
        $("#" + overlayName).css("height", "100%");
    });
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            if (overlayName != "") {
                $("body, html").removeClass("menu-active");
                $("#" + overlayName).css("height", "0%");
            }
        }
    });
    $(".close-overlay").click(function () {
        $("body, html").removeClass("menu-active");
        $("#" + overlayName).css("height", "0%");
    });
    $(".nav-hamburger").click(function () {
        if ($("body").hasClass("menu-active")) {
            $(".transition-layer, .main-menu-container, .main-menu-container ul, .main-menu-footer").addClass("reverse").removeClass("active");
            $(".nav-icon").removeClass("nav-icon-active nav-icon-close");
            $(".nav-container h6").text("MENU");
            $("body, html").removeClass("menu-active");
        } else {
            $(".transition-layer, .main-menu-container, .main-menu-container ul, .main-menu-footer").removeClass("reverse").addClass("active");
            $(".nav-icon").addClass("nav-icon-active nav-icon-close");
            $(".nav-container h6").text("CLOSE");
            $("body, html").addClass("menu-active");
        }
        if (window.innerWidth > 767 && $("body").hasClass("desktop")) {
            setTimeout(() => {
                $(".loop").empty().append(loopchild).append(loopchild);
            }, 200);
        }
    });
    var _ready = false;
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        autoWidth: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true,
                nav: false,
                loop: false
            },
            600: {
                items: 1,
                nav: false,
                center: true,
                loop: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: false
            }
        },
        onChanged: function (event) {
            if (window.innerWidth < 767 && _ready) {
                $(".owl-item .box").removeClass("padding-active");
                setTimeout(() => {
                    $(".owl-item.active.center .box").addClass("padding-active");
                }, 200);
            }
        }
    });
    setTimeout(() => {
        $(".owl-item.active").removeClass("padding-active");
        $(".owl-item.active.center .box").addClass("padding-active");
        _ready = true;
    }, 500);

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
    var browser = (function (agent) {
        switch (true) {
            case agent.indexOf("edge") > -1:
                return "edge";
            case agent.indexOf("edg") > -1:
                return "chromium based edge (dev or canary)";
            case agent.indexOf("opr") > -1 && !!window.opr:
                return "opera";
            case agent.indexOf("chrome") > -1 && !!window.chrome:
                return "chrome";
            case agent.indexOf("trident") > -1:
                return "ie";
            case agent.indexOf("firefox") > -1:
                return "firefox";
            case agent.indexOf("safari") > -1:
                return "safari";
            default:
                return "other";
        }
    })(window.navigator.userAgent.toLowerCase());
    $("body").addClass(browser).addClass(isMobileDevice() ? "mobile" : "desktop");
    document.addEventListener("DOMContentLoaded", function () {
        $(window).scrollTop(0);
    });
    if ($("body").hasClass("mobile")) {
        $(".cursor").removeClass("cursor--initialized");
    }
});
var prevTitle = document.title;


var lastScrollTop = 0;
document.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (window.innerWidth < 767 && $("body").hasClass("mobile")) {
        if (st > lastScrollTop) {
            $("nav").addClass("scroll-down").removeClass("scroll-up");;
        } else {
            $("nav").addClass("scroll-up").removeClass("scroll-down");
        }
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);
$(".copy-clip").click(function () {
    var copyText = document.getElementById("copyInClip");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    const notyf = new Notyf({
        duration: 2000,
        position: {
            x: 'right',
            y: 'bottom',
        },
        types: [
            {
                type: 'info',
                background: 'linear-gradient(to top, #f43b47 0%, #453a94 100%)'
            }
        ]
    });
    notyf.open({
        type: 'info',
        message: 'Copiato!'
    });
});
var isDragging = false;
$(".drag").mousedown(function () {
    $(".cursor-border").addClass("active");
}).mousemove(function () { }).mouseup(function () {
    $(".cursor-border").removeClass("active");
});
document.addEventListener("DOMContentLoaded", _ => {
    if (window.innerWidth > 767 && $("body").hasClass("desktop")) $(".loop").append(loopchild);
});
var arFrase = ["Hey ciao! Questo menù è un loop infinito", "Fidati, non finisce mai", "Lo trovi divertente?", "Tra un po' sbuchiamo in Cina", "杏仁酱油鸡", "<a target='_blank' href='https://translate.google.it/?hl=it&sl=auto&tl=it&text=%E4%B8%8D%E8%A6%81%E7%9B%B8%E4%BF%A1%E9%82%A3%E4%BA%9B%E4%BD%BF%E7%94%A8wordpress%E5%BB%BA%E7%AB%8B%E7%BD%91%E7%AB%99%E7%9A%84%E4%BA%BA&op=translate'>不要相信那些使用wordpress建立网站的人</a>", "Complimenti per la costanza"];
var ind = 0,
    nextInd = 90,
    countAr = 0;
var gattoShow = 1;
var lastScrollTop1 = 0;
$(".main-menu-container").scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop1) {
        if ($(this).scrollTop() > $(this).height() / 2 && window.innerWidth > 767 && $("body").hasClass("desktop")) {
            if (gattoShow == 2) {
                gattoShow = 3;
                setTimeout(function () {
                    window.location.href = 'https://shorturl.at/htuQW';
                }, 1500);
            } else {
                $(".loop").append(loopchild);
                ind++;
                if (ind > nextInd) {
                    nextInd += 60;
                    $(".go-on-write").remove();
                    $(".right-menu-col").prepend("<div class='alert go-on-write' style='background-color:" + color[Math.floor(Math.random() * color.length)] + "' role='alert'>" + arFrase[countAr] + "</div>");
                    countAr++;
                    if (countAr == arFrase.length && gattoShow == 1) gattoShow = 2;
                }
            }
        }
    }
    lastScrollTop1 = st;
});
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;
document.addEventListener('keydown', function (e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];
    if (key == requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
            window.open('/yep-this-is-a-zebra');
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

/* backend access: https://wearecroma.it/wp-admin */