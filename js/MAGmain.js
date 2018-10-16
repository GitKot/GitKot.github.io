$(function(){
	'use strict';

	
	$('.title_box').click(function(){

	    $(this).toggleClass('open');
		$(this).next('.list_link').toggleClass('open');

	});
   

	$("#banner_wrap").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: true,
        arrows: false,

      });





	$('#slider_price').slider({
		max: 1000,
		min: 0,
		range:true,
		values: [150,728],
		slide: function(event, ui){
			$('input[name="minPrice"]').val('$' + ui.values[0]);
			$('input[name="maxPrice"]').val('$' + ui.values[1]);
		}
	});

	$('input[name="minPrice"]').val('$' +
		$('#slider_price').slider('values', 0));
	$('input[name="maxPrice"]').val('$' +
		$('#slider_price').slider('values', 1));

	$("#carte, .title_cart").click(function(){
		$("#cart_box").toggleClass("open")
	})

$("#sign").click(function(){
	$('#modal, #black_fill').toggleClass('open')
})

$("#close_mod, #black_fill ").click(function(){
	$('#modal, #black_fill').toggleClass('open')
})

$('#search_button').click(function(){
	$('#search-panel').toggleClass('open');
})

$('#load_more').click(function(event){
	event.preventDefault();
	$('.list_product').append('<a class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product anime"><img src="img/Shoes1.png"></div><h2>Название товара </h2><p>его описание</p><p class="price">10$</p></a><a class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product anime"><img src="img/Shoes1.png"></div><h2>Название товара </h2><p>его описание</p><p class="price">10$</p></a><a class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product anime"><img src="img/Shoes1.png"></div><h2>Название товара </h2><p>его описание</p><p class="price">10$</p></a><a class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product anime"><img src="img/Shoes1.png"></div><h2>Название товара </h2><p>его описание</p><p class="price">10$</p></a>')

	
})



});




