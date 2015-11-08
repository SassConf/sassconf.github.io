function toggle(id) {
  var e = document.getElementById(id);
  e.classList.toggle('is-active');
  console.log('toggle' + e);
}


//Set the two dates
today=new Date()
var conference=new Date(today.getFullYear(), 10, 11) //Month is 0-11 in JavaScript

// console.log(Date(today.getFullYear()));
// console.log(conference);

if (today.getMonth()==11 && today.getDate()>25) //if conference has passed already
    conference.setFullYear(conference.getFullYear()+1) //calculate next year's conference
//Set 1 day in milliseconds
var one_day=1000*60*60*24

$(document).ready(function(){
  var $subHeader = $('.sub-header');
  var $subHeaderStripes = $('<div class="sub-header__stripes"></div>');
  var $subHeaderContainer = $('<div class="sub-header__container"></div>');
  // var $workshopLearnMoreBtn = $('.js-workshops__learn-more');

  $subHeader.wrap($subHeaderContainer);
  $subHeader.after($subHeaderStripes);

  // Click a element to hide
  // var clickHide = function(el) {
  //     $(this).addClass('hide');
  // }


  $('.js-workshops__learn-more').bind('click', function(e){
    e.preventDefault();
    $(this).addClass('hide');
    $(this).parents('.workshop').find('.workshops__description').removeClass("workshops__description--is-hidden");
  });

  $('.js-description__close-btn').bind('click', function(e){
    e.preventDefault();
    $('.js-workshops__learn-more').removeClass('hide');
    $(this).parents('workshops__description').addClass("workshops__description--is-hidden");

    console.log($(this).parents('.workshops__description').addClass("workshops__description--is-hidden"));
  })

  // var time = $('.day-schedule__nav__link').html();
  //
  // function stringToInteger(e) {
  //   var date = parseInt(e);
  //   return date;
  // }



});

// Find Days Until box and put in the correct number
document.getElementById('daysuntil-number').innerHTML = (Math.ceil((conference.getTime()-today.getTime())/(one_day)));
