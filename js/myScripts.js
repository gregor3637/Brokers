var olw,
    owlPosX,
    owlPosY,
    navLeftPosX,
    navRightPosX,
    owlMiddleY,
    owlNavLeftBtn,
    owlNavRightBtn,
    owlNavLeftBtnBg,
    owlNavRightBtnBg,
    borderThickness,
    rightdBtnMiddle,
    slideDots;

$(document).ready(function () {
    var owlMain = $('.owl-carousel.main');
    
    owlMain.owlCarousel({
        loop: true,
        dots: true,
        items: 2
    }).on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlMain.trigger('next.owl');
        } else {
            owlMain.trigger('prev.owl');
        }
        e.preventDefault();
    });
})

$(document).ready(function () {
    owl = $('.owl-carousel');
    
    owl.owlCarousel({
        // nav: true,
        loop: true,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:false,
        margin: 0,
        lazyLoad:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    }).on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


    owlNavLeftBtn = $(".animated-button.left");
    owlNavRightBtn = $(".animated-button.right");

    var bg = $(".nav-background .left");
    var bgRight =  $(".nav-background .right");
    
    btnH = owlNavRightBtn.height();
    borderThickness = parseFloat(owlNavRightBtn.css("borderRightWidth")) *2;
    owlPosX = owl.position().left;
    owlPosY = owl.position().top;
    navLeftPosX = 0;
    navRightPosX = owl.width() - owlNavLeftBtn.width() * 2;
    owlMiddleY = (owl.height() * 0.5) + owl.position().top - owlNavLeftBtn.height();
    rightdBtnMiddle = owlMiddleY ;

    owlNavLeftBtn.css({top: owlMiddleY, left: navLeftPosX  -4});
    owlNavRightBtn.css({top: rightdBtnMiddle, left: navRightPosX  + 4});

    bg.css({top: owlMiddleY, left: navLeftPosX -4});
    bgRight.css({top: rightdBtnMiddle, left: navRightPosX +4});


    
    owlNavLeftBtn.on('click', function() {
         owl.trigger('prev.owl');
        //  console.log('clickkkk 2');
    })
    owlNavRightBtn.on('click', function() {
         owl.trigger('next.owl');
        //  console.log('clickkkk 2');
    })

    slideDots = $('[class^="dot-"]');
    console.log('slideDots = ' + slideDots.length);
})




$("#statistics ul li").mouseenter(function() {
    $(this)
    .css("transform", "translateY(-20px)")
    .css("transition", "0.25s")
    .css("background-color", "whitesmoke");
}).mouseleave(function() {
    $(this)
    .css("transform", "translateY(0px)")
    .css("transition", "0.25s")
    .css("background-color", "white");
});

// $("#team .images-container").mouseenter(function() {
//     var transitionTime = '1s';
//     $(".pic2")
//     .css("opacity", "1")
//     .css("transform", "translate(-110px, 170px)")
//     .css("transition", transitionTime);
    
//     $(".pic3")
//     .css("opacity", "1")
//     .css("transform", "translate(200px, -40px)")
//     .css("transition", transitionTime);
// });


var percentageValuesOne = {start:0, end: 53},
    percentageValuesTwo = {start:23, end: 88},
    percentageValuesThree = {start:41, end: 44},
    percentageValuesFour = {start:3, end: 34},
    percentageOne = document.getElementById("one"),
    percentageTwo = document.getElementById("two"),
    percentageThree = document.getElementById("three"),
    percentageFour = document.getElementById("four");

// var myFunk = function() {
//     TweenLite.to(percentageValuesOne, 4, {
//         start: percentageValuesOne.end, 
//         onUpdate: function() {
//             percentageOne.innerHTML = Math.ceil(percentageValuesOne.start) + '%';
//         },
//         ease:Circ.easeOut
//     });

//     TweenLite.to(percentageValuesTwo, 4, {
//         start: percentageValuesTwo.end, 
//         onUpdate: function() {
//             percentageTwo.innerHTML = Math.ceil(percentageValuesTwo.start) + '%';
//         },
//         ease:Circ.easeOut
//     });

//     TweenLite.to(percentageValuesThree, 4, {
//         start: percentageValuesThree.end, 
//         onUpdate: function() {
//             percentageThree.innerHTML = Math.ceil(percentageValuesThree.start) + '%';
//         },
//         ease:Circ.easeOut
//     });

//     TweenLite.to(percentageValuesFour, 4, {
//         start: percentageValuesFour.end, 
//         onUpdate: function() {
//             percentageFour.innerHTML = Math.ceil(percentageValuesFour.start) + '%';
//         },
//         ease:Circ.easeOut
//     });
// }

// myFunk();

$(window).on("resize", handleResize);

function handleResize() {
    btnH = owlNavRightBtn.height();
    borderThickness = parseFloat(owlNavRightBtn.css("borderRightWidth")) *2;
    owlPosX = owl.position().left;
    owlPosY = owl.position().top;
    navLeftPosX = 0;
    navRightPosX = owl.width() - owlNavLeftBtn.width() * 2;
    owlMiddleY = (owl.height() * 0.5) + owl.position().top - owlNavLeftBtn.height();
    rightdBtnMiddle = owlMiddleY ;

    owlNavLeftBtn.css({top: owlMiddleY, left: navLeftPosX});
    owlNavRightBtn.css({top: rightdBtnMiddle, left: navRightPosX});
}

$(window).scroll(function () { 
    var wScroll = $(this).scrollTop();

    if (wScroll > $('#team').offset().top - ($(window).height() / 1.2)) {
        $('.images .page').each(function (i) {
            setTimeout(function () {
                $('.images .page').eq(i).addClass('is-showing');
            });
        });
    }


    if (wScroll > $('#best-platforms').offset().top - ($(window).height() / 1.2)) {
        console.log('reached');
        $('.platform').each(function (i) {
            setTimeout(function () {
                $('.platform').eq(i).addClass('is-showing');
            }, 100 * (i + 1)
            );
        });
    }
});




//------------------------------ slider
var currentSlideIndex = 1,
    slides = document.getElementsByClassName("slides"),
    dots = $('[class^="dot-"]');

showSlides(1);
addSlideDotListener();
addSlideNavListeners();


function showSlides(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    index -= 1;
    slides[index].style.display = "block"; 
    dots[index].className += " active";
}

function addSlideDotListener() {
    for (i = 0; i < dots.length; i++) {
        $(dots[i]).click(function() {
            var classes = this.className;
            var index = classes.split(' ')[0].split('-')[1];
            updateSlideIndex(index);
        });
    }
}

function updateSlideIndex(index, fromNav = false) {
    if(fromNav) {
        index += currentSlideIndex;
    }
    if (index > slides.length) {
        index = 1;
    }
    if (index < 1) {
        index = slides.length;
    }

    currentSlideIndex = index;
    showSlides(currentSlideIndex);
}

function addSlideNavListeners() {
    $('.slideshow-container .prev').on('click', () => {
        updateSlideIndex(-1, true);
    });

    $('.slideshow-container .next').on('click', () => {
        updateSlideIndex(1, true);
    });
}

