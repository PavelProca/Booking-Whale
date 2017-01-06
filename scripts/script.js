// States dropdown
var i = 0;
$(function() {
  $('.dropdown ul li').on('click', function() {
    var label = $(this).parent().parent().children('label');
    label.attr('data-value', $(this).attr('data-value'));
    label.html($(this).html());

    $(this).parent().children('.selected').removeClass('selected');
    $(this).addClass('selected');
    while (i<1) {
      document.getElementById("statedrop").classList.toggle('chosen');
      i=5;
    }
  });
  
  $('.dropdown').on('click', function() {
    $(this).toggleClass('open');
  });
});

// Upper dropdown on mobile
function change() {
	document.getElementById("mob-dropdown1").classList.toggle('hidden');
	document.getElementById("mob-dropdown2").classList.toggle('hidden');
}

// Show global error
function globError() {
  document.getElementById("error-block").classList.toggle('error');
}

var form  = document.getElementsByTagName('form')[0];
var field = document.querySelectorAll('input[name="req-field"]');
var error = document.querySelectorAll('.loc-error');

form.addEventListener("submit", function (event) {
  for (var i=0; i < 3; i++) {
    if (field[i].value == 0) {
      error[i].className = "loc-error active";
      event.preventDefault();
    } 
  }

}, false);

/*
function openNextPage() {
  window.open("https://www.google.com/", "_blank");
}
*/