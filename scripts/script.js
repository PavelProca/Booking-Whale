var i = 0;
function change() {
	document.getElementById("mob-dropdown1").classList.toggle('hidden');
	document.getElementById("mob-dropdown2").classList.toggle('hidden');
}
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