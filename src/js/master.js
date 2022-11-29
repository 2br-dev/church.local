// ::: Initialization ::: =====================================================

$(() => {
	initEvents();		// Initialization of event listeners
	initFrameworks();	// Initialization of framework components
});

function initFrameworks(){

	// Map initialization
	if($('#map').length){
		loadScript('https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/build/ol.js', () => {
			initMap();
		})
	}

	// Lazy load images and videos
	$('.lazy').lazy();

	// MaterializeCSS ============================================================
	M.Modal.init(document.querySelectorAll('.modal'));					// Modal
	M.Sidenav.init(document.querySelector('.sidenav'));					// Sidenav
	M.Tooltip.init(document.querySelectorAll('.tooltipped'));			// Tooltips
	M.Materialbox.init(document.querySelectorAll('.materialboxed'));	// Materialbox

	// SwiperJS ==================================================================
	if($('#calendar-events').length){		
		let calendarEvents = new Swiper('#calendar-events', {
			speed: 800,
			breakpoints: {
				400: {
					slidesPerView: 1,
					spaceBetween: 5
				},
				1200:{	
					slidesPerView: 2,
					spaceBetween: 5
				},
				1900:{
					slidesPerView: 3,
					spaceBetween: 5
				}
			},
			pagination: {
				el: '#calendar-pagination',
				type: 'bullets',
				dynamicBullets: true,
				dynamicMainBullets: 4,
				clickable: true
			},
			loop: true,
			navigation: {
				nextEl: '.ce-next',
				prevEl: '.ce-prev'
			}
		});
	}

	if($('#nearest-events').length){

		let nearestEvents = new Swiper('#nearest-events', {
			spaceBetween: 20,
			pagination: {
				type: 'bullets',
				el: '#events-pagination',
				clickable: true
			},
			on: {
				'init': updateBackground,
				'slideChange': () => {
					$('.lazy').lazy();
				},
				'slideChangeTransitionEnd': updateBackground
			}
		});
	}

	if($('#social-services-swiper').length){
		let socialSlider = new Swiper('#social-services-swiper', {
			mousewheel: true,
			pagination:{
				type: 'bullets',
				el:'#social-pagination',
			},
			on:{
				'slideChange': slider => {
					$('.lazy').lazy();
	
				},
				'beforeTransitionStart': (slider, speed, internal) => {
					let index = slider.activeIndex;
					$('#social-services [data-slide]').removeClass('active');
					$('#social-services [data-slide='+index+']').addClass('active');
					$('#social-label').text((slider.activeIndex + 1) + " / " + slider.slides.length);
				},
				'init': slider => {
					$('#social-services [data-slide=0]').addClass('active');
					$('#social-label').text("1 / " + slider.slides.length);
				}
			}
		});
	}

	if($('#yough-slider').length){
		let youghSlider = new Swiper('#yough-slider', {
			on:{
				'slideChangeTransitionEnd': () => {
					$('.lazy').lazy();
				},
				'init': slider => {
					$('.yough-page[data-index=0]').addClass('active');
				},
				'beforeTransitionStart': slider => {
					let index = slider.activeIndex;
					$('.yough-page').removeClass('active');
					$('.yough-page[data-index='+index+']').addClass('active');
				}
			}
		})
	}

	if($('#blog-popular').length){
		let blog_popular = new Swiper('#blog-popular', {
			spaceBetween: 16 * 2.5,
			loop: true,
			speed: 800,
			breakpoints: {
				400: {
					slidesPerView: 1,
				},
				900:{
					slidesPerView: 2
				},
				1200:{	
					slidesPerView: 3,
				},
				1900:{
					slidesPerView: 4,
				}
			},
			autoplay:{
				delay: 5000
			},
			on: {
				'slideChange': () => {
					$('.lazy').lazy();
				}
			}
		})
	}


}

function initEvents(){
	$('body').on('mouseenter', 'nav>ul>li>a', openMegaMenu);
	$('body').on('mouseleave', 'mega-menu', closeMegamenu);
	$('body').on('mouseleave', 'header', closeMegamenu);
	$('body').on('mouseenter', '#menu-content a', openSubLevel);
	$('body').on('click', '#menu-content .folder > a, #mobile-navi .folder > a', toggleFolder);
	$('body').on('click', '#social-services [data-slide]', openServiceSlide);
	$('body').on('click', '.yough-page', openYoughSlide);
	$('body').on('click', '.preys-wrapper label', openNames);
	$('body').on('click', '.prey-back', closeNames);
	$('body').on('change', '[name="prey-type"]', switchNoteType);
	$('body').on('click', '#prey-add', preyAdd);
	$('body').on('click', '#prey-copy', preyCopy);
	$('body').on('click', '#prey-paste', preyPaste);
	$('body').on('click', '#prey-clear', preyClear);
}

function preyAdd(e){
	e.preventDefault();
	let extra_fields = generateFields();
	$('.names-wrapper').append(extra_fields);
}

function preyCopy(e){

	e.preventDefault();
	let text = "";
	
	$('.names-wrapper input').each((index, el) => {
		text += el.value + "\r\n";
	})

	navigator.clipboard.writeText(text);

	M.toast({html: "Имена скопированы в буфер обмена!"});

}

async function preyPaste(e){
	e.preventDefault();

	try{

		let clipboardText = await navigator.clipboard.readText();
		let clipboardArray = clipboardText.split("\r\n");

		let $inputs = $('.names-wrapper input');

		let message = "Данные успешно вставлены!";

		for(let i=0; i<clipboardArray.length - 1; i++){

			if($inputs[i]){
				$inputs[i].value = clipboardArray[i];
			}else{
				message = "Не для всех данных нашлись поля! Попробуйте очистить список, добавить нужное количество полей и повторите вставку!";
			}
		}
		
		M.toast({html: message})
	}catch(ex){
		M.toast({html: "Ошибка вставки!"});
		console.error(ex.message);
	}
}

function preyClear(e){
	e.preventDefault();
	let extra_fields = generateFields();
	$('.names-wrapper').empty().append(extra_fields);
}

function generateFields(e){
	let $input_field = $('<div class="input-field"></div>');
	let $prefix = $('<div class="prefix"></div>');
	let $input = $('<input type="text" name="names[]">');
	let $indicator = $('<div class="indicator"></div>');

	let $element = $input_field.append($prefix).append($input).append($indicator);
	let element = $element[0].outerHTML;

	let outputHTML = "";


	for(let i=0; i<10; i++){
		outputHTML += element + "\r\n";
	}

	return $(outputHTML);
}

//::: Core functions ::: =======================================================

// Switch type of note
function switchNoteType(){
	let type = this.value;

	switch(type){
		case "rest":
			$('#send-note').addClass('rest');break;
		default:
			$('#send-note').removeClass('rest');break;
	}
}

// Open names
function openNames(){
	$('.note-service').addClass('invisible');
	$('.note-names').addClass('visible');
}

// Close names
function closeNames(){
	$('.note-service').removeClass('invisible');
	$('.note-names').removeClass('visible');
}

// Map initialization
function initMap(){

  
	let coords = [38.974051, 45.041807]
	let zoom = 12.85;
	
	
	var style = new ol.style.Style({
		image: new ol.style.Icon({
			anchor: [.5, 1],
			src: '/img/map_marker.png'
		})
	});
	
	var marker = new ol.Feature({
		type: 'icon',
		geometry: new ol.geom.Point(ol.proj.fromLonLat(coords))
	})
	
	var vectorSource = new ol.source.Vector({
		features: [marker]
	})
	
	var vectorLayer = new ol.layer.Vector({
		source: vectorSource,
		style: style
	});
	
	// Shift map center to provide place for overlay
	var center = [
		coords[0], 
		coords[1]
	]
	
	let map = new ol.Map({
		target: 'map',  // The DOM element that will contains the map
		interactions: ol.interaction.defaults({mouseWheelZoom:false}), //Disable scroll event
		renderer: 'canvas', // Force the renderer to be used
		layers: [
			// Add a new Tile layer getting tiles from OpenStreetMap source
			new ol.layer.Tile({
				source: new ol.source.OSM({
					url: "https://basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png"
				})
			}),
			vectorLayer
		],
		// Create a view centered on the specified location and zoom level
	
		view: new ol.View({
			center: ol.proj.fromLonLat(center),
			zoom: zoom
		})
	});  
	
	// Эвент по клику на маркере
	map.on('click', function(evt) {
		var f = map.forEachFeatureAtPixel(
			evt.pixel,
			function(ft, layer){return ft;}
		);
		if (f && f.get('type') == 'icon') {
			var linkEl = $('<a href="https://goo.gl/maps/KQYmVFwvvH7FYZYZ6" target="_blank">Google</a>');
			$('#map').append(linkEl);
			linkEl[0].click();
			$(linkEl).remove();
		}        
	});
	
	map.on("pointermove", function (evt) {
		var hit = this.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
			return true;
		}); 
		if (hit) {
			this.getTargetElement().style.cursor = 'pointer';
		} else {
			this.getTargetElement().style.cursor = '';
		}
	});
}

// Update slider background
function updateBackground(){

	setTimeout(() => {
		let slide = this.el.querySelector('.swiper-slide-active');

		if(!slide) return;
		let background = slide.dataset['background'];
		$('.nearest-events').css({
			backgroundImage: "url(" + background + ")"
		});
	}, 80);
}

// Open yough slide
function openYoughSlide(){
	let index = this.dataset['index'];
	let swiper = document.querySelector('#yough-slider').swiper;
	swiper.slideTo(index);
}

// Goto service slide
function openServiceSlide(){

	let index = this.dataset.slide;
	let swiperElement = document.querySelector('#social-services-swiper');
	let swiper = swiperElement.swiper;

	swiper.slideTo(index);
}

// Toggle sidenav folder
function toggleFolder(e){
	
	let unfolded = $(this).hasClass('unfolded');
	let $levelUl = $(this).parent().parent(); 		//UL, contained clicked
	let $levelLi = $levelUl.find('>li');

	if(!unfolded){
		e.preventDefault();
		$('.folder a').removeClass('unfolded');
		$(this).addClass('unfolded');
		
		$levelLi.each((index, el) => {
			$(el).find('ul').slideUp('fast');
		});

		$(this).next().slideDown('fast');
	}
}

// open Mega menu
function openMegaMenu(){

	let directionClass 	= edgeDetect();
	let headerText 		= $(this).text();
	let $subMenu		= $(this).next();

	$('header nav>ul>li>a').removeClass('hover');
	$(this).addClass('hover');

	$("#l1").nextAll().empty();

	if($subMenu.length){

		$('#menu-header').text(headerText);
		$('#l1').html($subMenu.clone());
		$('.mega-menu').addClass(directionClass);

		
		setTimeout(() => {
			$('.mega-menu').css({
				transition: 'transform .4s, opacity .2s'
			});
			$('.mega-menu').addClass('visible')
		}, 80);


	}else{
		closeMegamenu(null, true);
	}
}

// load sub-level of Mega-menu
function openSubLevel(){

	let $levelDiv = $(this).parents('div');
	let $nextLevel = $(this).next().clone();
	let $nextWrapper = $levelDiv.next();
	let $nextAll = $levelDiv.nextAll();

	$nextAll.empty();

	$levelDiv.find('a').removeClass('hover');
	$(this).addClass('hover');

	$nextWrapper.html($nextLevel);
}

// close Mega-menu
function closeMegamenu(e, notRemoveHover = false){

	if(notRemoveHover === false){
		$('header nav>ul>li>a').removeClass('hover');
	}

	$('.mega-menu').removeClass('visible');
	$('.mega-menu').removeClass('top').removeClass('bottom');
	$('.mega-menu').css({
		transition: 'none'
	});
	$('#menu-header').text('');
	$('#l1').empty();
	$('#l2').empty();
	$('#l3').empty();
	$('#l4').empty();
}

// detect direction of opening Mega-menu (top|bottom)
function edgeDetect(){
	let docHeight 		= window.innerHeight;
	let menu 			= document.querySelector('header');
	menu.style.position 	= "static";
	let top 			= menu.getBoundingClientRect().top;
	$(menu).css({
		position: '-webkit-sticky',
		position: 'sticky'
	});
	let scrollTop 		= $('html, body').scrollTop();
	let menuHeight 		= $('.mega-menu').height();
	
	let className 		= (top + menuHeight) <= docHeight ? 'bottom' : 'top';

	return className;
}

// load external script
function loadScript(url, callback){

	var script = document.createElement("script")
	script.type = "text/javascript";
	
	if (script.readyState){  //IE
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
					script.readyState == "complete"){
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {  //Others
		script.onload = function(){
			callback();
		};
	}

	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}