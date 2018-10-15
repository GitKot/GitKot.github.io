$(function(){
	
	$('#info').click( function(){
		$("#info_box").toggleClass('open');
	});

	$('.pr_bar').each(function(){
		let width = $(this).data('skills'); //записали в переменную необходимую ширину
		console.log(width)
		$(this).css('width', width +'%');
	});
})
