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
    rightdBtnMiddle;



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
         console.log('clickkkk 2');
    })
    owlNavRightBtn.on('click', function() {
         owl.trigger('next.owl');
         console.log('clickkkk 2');
    })
})




$("#statistics ul li").mouseenter(function() {
    $(this)
    .css("transform", "translateY(-20px)")
    .css("transition", "0.25s");
}).mouseleave(function() {
     $(this)
     .css("transform", "translateY(0px)")
     .css("transition", "0.25s");
});

$("#team .images-container").mouseenter(function() {
    $(".pic1").css("transform", "translate(0,0)")
    .css("transition", "0.25s");
    $(".pic2").css("transform", "translate(170px, -170px)")
    .css("transition", "0.25s");
    $(".pic3").css("transform", "translate(290px, 0px)")
    .css("transition", "0.25s");
}).mouseleave(function() {
    $(".pic1").css("transform", "translate(30px, -10px)");
    $(".pic2").css("transform", "translate(170px, -120px)");
    $(".pic3").css("transform", "translate(250px, 10px)");
});


var percentageValuesOne = {start:0, end: 53},
    percentageValuesTwo = {start:23, end: 88},
    percentageValuesThree = {start:41, end: 44},
    percentageValuesFour = {start:3, end: 34},
    percentageOne = document.getElementById("one"),
    percentageTwo = document.getElementById("two"),
    percentageThree = document.getElementById("three"),
    percentageFour = document.getElementById("four");

var myFunk = function() {
    TweenLite.to(percentageValuesOne, 4, {
        start: percentageValuesOne.end, 
        onUpdate: function() {
            percentageOne.innerHTML = Math.ceil(percentageValuesOne.start) + '%';
        },
        ease:Circ.easeOut
    });

    TweenLite.to(percentageValuesTwo, 4, {
        start: percentageValuesTwo.end, 
        onUpdate: function() {
            percentageTwo.innerHTML = Math.ceil(percentageValuesTwo.start) + '%';
        },
        ease:Circ.easeOut
    });

    TweenLite.to(percentageValuesThree, 4, {
        start: percentageValuesThree.end, 
        onUpdate: function() {
            percentageThree.innerHTML = Math.ceil(percentageValuesThree.start) + '%';
        },
        ease:Circ.easeOut
    });

    TweenLite.to(percentageValuesFour, 4, {
        start: percentageValuesFour.end, 
        onUpdate: function() {
            percentageFour.innerHTML = Math.ceil(percentageValuesFour.start) + '%';
        },
        ease:Circ.easeOut
    });
}

myFunk();

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