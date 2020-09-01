/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(target)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict



// const bodyScrollLock = require('body-scroll-lock');
// const disableBodyScroll = bodyScrollLock.disableBodyScroll;
// const enableBodyScroll = bodyScrollLock.enableBodyScroll;


// let body = document.getElementsByTagName("body")

// disableBodyScroll(body)


function disableScroll() { 
  // Get the current page scroll position 
  scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 

      // if any scroll is attempted, set this to the previous value 
      window.onscroll = function() { 
          window.scrollTo(scrollLeft, scrollTop); 
      }; 
} 
function enableScroll() { 
  window.onscroll = function() {}; 
} 

disableScroll()


const relativeImgPath = ["assets\\img\\portfolio\\IMG_2854~photo-full.jpg", "assets\\img\\portfolio\\0E2A00D6-1172-40E3-9109-78B71F0A4350~photo.JPG", "assets\\img\\portfolio\\C3F3532A-E9BD-4854-B0F1-24EC71672A67~photo.JPG"]
const mastHeadMain = document.getElementById("mastHeadMain");

//function startSlideShow
function startSlideShow() {
  for (let i = 0; i < relativeImgPath.length; i++) {
    setTimeout(() => {
      mastHeadMain.src = relativeImgPath[i]

    }, i * 3000);
  }
}



mastHeadMain.src = relativeImgPath[0]



let vueApp = document.getElementById("insideCurtain");
let checkBoxThatOpensCurtains = document.getElementById("checkBoxThatOpensCurtains");

function openThatBitch() {
  checkBoxThatOpensCurtains.checked = !checkBoxThatOpensCurtains.checked;
}


// fadeOut(vueApp)

openThatBitch()


let allElementsWithHideClass = document.getElementsByClassName("hide")

function showAllElements() {

  for (let i = 0; i < allElementsWithHideClass.length; i++) {
    fadeIn(allElementsWithHideClass[i])
  }
}

let wordsUnderSlideWhoe = document.getElementById("wordsUnderSlideShow")



setTimeout(() => { openThatBitch() }, 4000)

setTimeout(() => { openThatBitch(), showAllElements(), startSlideShow(), enableScroll() }, 6000)






function fadeIn(el) {
  el.classList.remove('hide');
  el.classList.add('show');
}

// function fadeOut(el) {
//   el.classList.add('hide');
//   el.classList.remove('show');
// }


//r\tKR OFF GSRYTHEBARBER

//MAKE GREEN DAarker