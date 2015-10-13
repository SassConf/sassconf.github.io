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

// Find Days Until box and put in the correct number
document.getElementById('daysuntil-number').innerHTML = (Math.ceil((conference.getTime()-today.getTime())/(one_day)));

$(document).ready(function(){
  var $subHeader = $('.sub-header');
  var $subHeaderStripes = $('<div class="sub-header__stripes"></div>');
  var $subHeaderContainer = $('<div class="sub-header__container"></div>');

  $subHeader.wrap($subHeaderContainer);
  $subHeader.after($subHeaderStripes);

  //$subHeader.append($subHeaderStripes);
});
