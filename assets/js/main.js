var APP = APP || {};

var click = true;

// Solution I
jQuery.fn.extend({
    clickOrTouch: function(handler) {
        return this.each(function() {
            var event = document.ontouchstart !== null ? 'click':'touchstart';
            $(this).on(event, handler);
        });
    }
});

APP.effectFonts = function()
{
	function typeEffect(element, speed, delay) {

		setTimeout(function(){

			var text = $(element).text();
			$(element).html('');
			$(element).css('opacity', '1');

			var i = 0;
			var timer = setInterval(function(){
				if (i < text.length)
				{
					$(element).append(text.charAt(i));
					i++;
				} 
				else 
				{
					clearInterval(timer);
				}
			}, speed);

		}, delay);
	}

	$(document).ready(function() {
		var speed = 20;

		//Contato
		typeEffect($('#contato.desk .titulo-cat b'), speed, 0);

		// -------------------------
		var daley1 = $('#contato.desk .titulo-cat b').text().length * speed + speed;
		typeEffect($('#contato.desk > p:nth-child(2) > a'), speed, daley1);

		// -------------------------
		var daley2 = $('#contato.desk > p:nth-child(2) > a').text().length * speed + speed;
		typeEffect($('#contato.desk > p:nth-child(3) > a'), speed, daley1+daley2);

		// -------------------------
		var daley3 = $('#contato.desk > p:nth-child(3) > a').text().length * speed + speed;
		typeEffect($('#contato.desk > p:nth-child(4) > a'), speed, daley1+daley2+daley3);

		// ===============================================================================

		//Sobre
		typeEffect($('#sobre.desk .titulo-cat b'), speed, daley1);

		// -------------------------
		var daley4 = $('#sobre.desk .titulo-cat b').text().length * speed + speed;
		typeEffect($('#sobre.desk > p:nth-child(2) > span'), speed, daley1+daley4);

		// ===============================================================================

		//Idioma
		typeEffect($('#idioma.desk .titulo-cat b'), speed, daley1+daley4);

		// -------------------------
		var daley5 = $('#idioma.desk .titulo-cat b').text().length * speed + speed;
		typeEffect($('#idioma.desk > p:nth-child(2) > a'), speed, daley1+daley5);

		// -------------------------
		var daley6 = $('#idioma.desk > p:nth-child(2) > a').text().length * speed + speed;
		typeEffect($('#idioma.desk > p:nth-child(3) > a'), speed, daley1+daley5+daley6);


		// ===============================================================================

		//Sobre
		typeEffect($('#projetos.desk .titulo-cat b'), speed, daley1+daley4+daley5);

		// -------------------------
		var daley7 = $('#projetos.desk .titulo-cat b').text().length * speed + speed;
		typeEffect($('#projetos.desk > p:nth-child(3) > a'), speed, daley1+daley7);

		// -------------------------
		var daley8 = $('#projetos.desk > p:nth-child(3) > a').text().length * speed + speed;
		typeEffect($('#projetos.desk > p:nth-child(4) > a'), speed, daley1+daley7+daley8);

		// -------------------------
		var daley9 = $('#projetos.desk > p:nth-child(4) > a').text().length * speed + speed;
		typeEffect($('#projetos.desk > p:nth-child(5) > a'), speed, daley1+daley7+daley8+daley9);

		// -------------------------
		var daley10 = $('#projetos.desk > p:nth-child(5) > a').text().length * speed + speed;
		typeEffect($('#projetos.desk > p:nth-child(6) > a'), speed, daley1+daley7+daley8+daley9+daley10);

		// -------------------------
		var daley11 = $('#projetos.desk > p:nth-child(6) > a').text().length * speed + speed;
		typeEffect($('#projetos.desk > p:nth-child(7) > a'), speed, daley1+daley7+daley8+daley9+daley10+daley11);

		// -------------------------
		var daley12 = $('#projetos.desk > p:nth-child(7) > a').text().length * speed + speed;
		typeEffect($('#projetos.desk > p:nth-child(8) > a'), speed, daley1+daley7+daley8+daley9+daley10+daley11+daley12);

		// -------------------------
		var daley13 = $('#projetos.desk > p:nth-child(8) > a').text().length * speed + speed;
		typeEffect($('#projetos.desk > p:nth-child(9) > a'), speed, daley1+daley7+daley8+daley9+daley10+daley11+daley12+daley13);

	});
}

APP.hoverProjetos = function()
{
	var dirB = 'img/banners/';
	var dirL = 'img/logotipos/';
	var time = 0;
	var interval;

	$(".projetos p a").mouseover(function()
	{

		var banner = $(this).data('banner');
		var logotipo = $(this).data('logotipo');

		interval = setInterval(function()
		{
			if(time == 0)
			{
				clearInterval(interval);

				$('.banners').attr('src', dirB + banner);
				$('.logotipos').attr('src', dirL + logotipo);

				setTimeout(function(){
					$('.banners').addClass('active');
					$('.logotipos').addClass('active');
				},50);
			}
			else
			{
				time = time - 1;
			}

		},1);

	}).mouseout(function()
	{
		clearInterval(interval);
		time = 50;
		$('.banners').removeClass('active');
		$('.logotipos').removeClass('active');
	});
}

APP.bordasAnimadas = function()
{
	$('.border-1').addClass('animate');
	$('.border-2').addClass('animate');
	$('.border-3').addClass('animate');
	$('.border-4').addClass('animate');
	$('.border-5').addClass('animate');
	$('.border-6').addClass('animate');
}

APP.carrossel = function()
{
	$('.owl-carousel').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplay: true,
		loop: true,
		margin: 10,
		nav: false,
		items: 1
	});
}

APP.timeClick = function()
{
	if(click)
	{
		click = false;
		setTimeout(function(){
			click = true;
		},100);
		return true;
	}
	else
	{
		return false;
	}
}

APP.changePage = function()
{
	$('.projetos p a').click(function(e){
		e.preventDefault();
		if(APP.timeClick())
		{
			window.location.hash = $(this).data('hash');
			$('body').removeClass('home');
			setTimeout(function(){
	        	APP.changeHeader();
	        },1000);
		}
	});

	$('.home-page').clickOrTouch(function() {
        var home = $('.back');
        home.click();
		history.pushState(null, "", "/");
		$('body').addClass('home');

		if($(this).hasClass('hash'))
		{
			APP.rmCookie('hash');
		}

		setTimeout(function(){
        	APP.changeHeader();
        },1000);
    });

	$('.projeto-anterior').clickOrTouch(function() {

		var total = $('.projetos.desk p').length - 1;

        var hash = window.location.hash;
        var index = $('[data-hash="'+hash+'"]').parent().index();

        var projetoBack = index - 2;

        if(projetoBack >= 1 && projetoBack <= total)
        {
        	var menu = $('.projetos p:eq('+projetoBack+')').find('a')[0].click();
	        var hash = $('.projetos p:eq('+projetoBack+')').find('a').data('hash');
	        window.location.hash = hash;
	        setTimeout(function(){
	        	APP.changeHeader();
	        	$(window).scrollTop(0);
	        },1000);
        }
        else if(index == 2)
        {
        	projetoBack = 7;
        	var menu = $('.projetos p:eq('+projetoBack+')').find('a')[0].click();
	        var hash = $('.projetos p:eq('+projetoBack+')').find('a').data('hash');
	        window.location.hash = hash;
	        setTimeout(function(){
	        	APP.changeHeader();
	        	$(window).scrollTop(0);
	        },1000);
        }

    });

	$('.projeto-proximo').clickOrTouch(function() {

		var total = $('.projetos.desk p').length - 1;

        var hash = window.location.hash;
        var index = $('[data-hash="'+hash+'"]').parent().index();

        var projetoBack = index;

        if(projetoBack >= 1 && projetoBack <= total)
        {
        	var menu = $('.projetos p:eq('+projetoBack+')').find('a')[0].click();
	        var hash = $('.projetos p:eq('+projetoBack+')').find('a').data('hash');
	        window.location.hash = hash;
	        setTimeout(function(){
	        	APP.changeHeader();
	        	$(window).scrollTop(0);
	        },1000);
        }
        else if(index == 8)
        {
        	projetoBack = 1;
        	var menu = $('.projetos p:eq('+projetoBack+')').find('a')[0].click();
	        var hash = $('.projetos p:eq('+projetoBack+')').find('a').data('hash');
	        window.location.hash = hash;
	        setTimeout(function(){
	        	APP.changeHeader();
	        	$(window).scrollTop(0);
	        },1000);
        }
        
    });
}

APP.changeURL = function()
{
	var hash = window.location.hash;

	if(hash.length != 0)
	{
		APP.changeHeader();
		setTimeout(function(){
			$('[data-hash="'+hash+'"]')[0].click();
		},1500);
	}
}

APP.changeHeader = function()
{
	$(window).scrollTop(0);
	var hash = window.location.hash;

	function changeDados(cliete, projeto, data)
	{
		$('p.cliete').text(cliete);
		$('p.projeto').text(projeto);
		$('p.data').text(data);
	}

	switch(hash)
	{
		case '#ceratti': 
			changeDados('Ceratti', 'direção de arte', '2016');
			break;
		case '#embrasa': 
			changeDados('Embrasa', 'Identidade / Marca / Design / Interface', '2016');
			break;
		case '#hipica': 
			changeDados('Sociedade Hípica de Campinas', 'direção de arte / design', '2016');
			break;
		case '#nossa-casa': 
			changeDados('Nossa Casa', 'design / Interface', '2017');
			break;
		case '#toriba': 
			changeDados('Grupo Toriba', 'design / Interface', '2017');
			break;
		case '#corinthians':
			changeDados('Personal project for Corinthians', 'direção de arte / design', '2018');
			break;
		case '#brasileirao':
			changeDados('Personal project for Brasileirão', 'direção de arte / design / brand', '2018');
			break;

		default:
			changeDados('', '', '');
			break;
	}

	APP.loadVideo(hash);
}

APP.loadVideo = function(hash)
{
	switch(hash)
	{
		case '#ceratti': 
			$('#ceratti video')[0].load();
			break;
		case '#embrasa': 
			$('#embrasa video')[0].load();
			break;
		case '#hipica': 
			break;
		case '#nossa-casa':
			break;
		case '#toriba': 
			$('#toriba video')[0].load();
			break;
	}
}

APP.rmCookie = function(cname)
{
	document.cookie = cname + "=" + null + ";" + null + ";path=/";
}

APP.getCookie = function(cname)
{
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

APP.setCookie = function(cname, cvalue, exdays)
{
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

APP.defaultLinguagem = function()
{
	$('.lang-ingles').addClass('select');
	APP.setCookie('ling', 'ingles');
	APP.linguagem();
}

APP.changeLinguagem = function()
{
	$('.lang-portugues').clickOrTouch(function(e){
		e.preventDefault();
		$('.lang-portugues').addClass('select');
		$('.lang-ingles').removeClass('select');
		APP.setCookie('ling', 'portugues');
		APP.linguagem();
	});

	$('.lang-ingles').clickOrTouch(function(e){
		e.preventDefault();
		$('.lang-portugues').removeClass('select');
		$('.lang-ingles').addClass('select');
		APP.setCookie('ling', 'ingles');
		APP.linguagem();
	});
}

APP.linguagem = function()
{
	var portugues = {
		contato: 'Contato',
		sobre: 'Sobre',
		textoSobre: 'Oi, eu sou Ivan Romain, diretor de arte e designer com mais de 7 anos de experiência, atualmente moro e trabalho no Brasil. Se você quiser saber mais informações ou conhecer mais sobre meu trabalho sinta-se à vontade para entrar em contato.',
		idioma: 'Idioma',
		projeto: 'Projeto',
		cliente: 'Cliente',
		data: 'Data',
		anterior: 'Projeto anterior',
		proximo: 'Projeto próximo',
		projetos: 'Projetos'
	};

	var ingles = {
		contato: 'Contact',
		sobre: 'About',
		textoSobre: 'Hi, I’m Ivan Romain, art director and designer with over 7 years experiences, currently living and working in Brazil. If you want more information or know more about my job Feel free to contact me.',
		idioma: 'Language',
		projeto: 'Project',
		cliente: 'Customer',
		data: 'Date',
		anterior: 'Previous project',
		proximo: 'Next project',
		projetos: 'Projects'
	};

	switch(APP.getCookie('ling'))
	{
		case 'ingles':
			//Home
			$('.lang-contato-titulo').text(ingles.contato);
			$('.lang-sobre-titulo').text(ingles.sobre);
			$('.lang-sobre-texto').text(ingles.textoSobre);
			$('.lang-idioma-titulo').text(ingles.idioma);
			$('.lang-projetos-titulo').text(ingles.projeto);

			//Interna Header
			$('.lang-cliente-titulo').text(ingles.cliente);
			$('.lang-data-titulo').text(ingles.data);

			//Iterna Footer
			$('.lang-anterior-titulo').text(ingles.anterior);
			$('.lang-proximo-titulo').text(ingles.proximo);

			$('.lang-data-titulo-projetos').text(ingles.projetos);
			break;
		case 'portugues':
			//Home
			$('.lang-contato-titulo').text(portugues.contato);
			$('.lang-sobre-titulo').text(portugues.sobre);
			$('.lang-sobre-texto').text(portugues.textoSobre);
			$('.lang-idioma-titulo').text(portugues.idioma);
			$('.lang-projetos-titulo').text(portugues.projeto);

			//Interna Header
			$('.lang-cliente-titulo').text(portugues.cliente);
			$('.lang-data-titulo').text(portugues.data);

			//Iterna Footer
			$('.lang-anterior-titulo').text(portugues.anterior);
			$('.lang-proximo-titulo').text(portugues.proximo);

			$('.lang-data-titulo-projetos').text(portugues.projetos);
			break;
	}
}

APP.openMenuMobile = function()
{

	$('.menu-hamburger.home').clickOrTouch(function(e){
		e.preventDefault();

		if($('.menu-hamburger.home').hasClass('sobre-mobile-open') == true && $('.menu-hamburger.home').hasClass('contato-mobile-open') == true)
		{
			$('.menu-hamburger.home').removeClass('sobre-mobile-open');
			$('.menu-hamburger.home').removeClass('contato-mobile-open');
		}

		var hash = APP.getCookie('hash');

		if(hash != 'null' && hash != "")
		{
			var link = $(".pagination.desk").find("[data-hash='" + hash + "']")[0].click(); 
			$('.menu-hamburger.interna').removeClass('open');
		}

		$(this).toggleClass('open', 'open');

		if($(this).hasClass('sobre-mobile-open'))
		{
			if(hash != 'null' && hash != "")
			{
				setTimeout(function(){
					$('.menu-mobile').removeClass('show');
					$('.projetos').addClass('show');
				},1000);
			}
			else
			{
				$('.menu-mobile').removeClass('show');
				$('.projetos').addClass('show');
			}
			$('.sobre').removeClass('show');
			$('.menu-hamburger.home').removeClass('sobre-mobile-open');
			$('.seta.home').removeClass('active');
		}
		else if($(this).hasClass('contato-mobile-open'))
		{
			if(hash != 'null' && hash != "")
			{
				setTimeout(function(){
					$('.menu-mobile').removeClass('show');
					$('.projetos').addClass('show');
				},1000);
			}
			else
			{
				$('.menu-mobile').removeClass('show');
				$('.projetos').addClass('show');
			}
			$('.contato').removeClass('show');
			$('.menu-hamburger.home').removeClass('contato-mobile-open');
			$('.seta.home').removeClass('active');
		}
		else
		{
			if(hash != 'null' && hash != "")
			{
				setTimeout(function(){
					$('.menu-mobile').toggleClass('show');
					$('.projetos').toggleClass('show');
				},1000);
			}
			else
			{
				$('.menu-mobile').toggleClass('show');
				$('.projetos').toggleClass('show');
			}
			$('.menu-hamburger.interna').removeClass('open');
			$('.contato').removeClass('show');
			$('.sobre').removeClass('show');
			$('.seta.home').removeClass('active');
			$('.menu-hamburger.home').removeClass('contato-mobile-open');
			$('.menu-hamburger.home').removeClass('sobre-mobile-open');
		}

	});

	$('.menu-hamburger.interna').clickOrTouch(function(e){
		e.preventDefault();

		var hash = window.location.hash;
		APP.setCookie('hash', hash);

		var home = $('.back');
        home.click();
		$('.menu-hamburger.home').addClass('open', 'open');
		$('.menu-hamburger.interna').addClass('open', 'open');
		$('.projetos').toggleClass('show');
		$('.menu-mobile').toggleClass('show');
	});

	$('.contato-mobile').clickOrTouch(function(e){
		e.preventDefault();
		$('.menu-mobile').removeClass('show');
		$('.contato').addClass('show');
		$('.menu-hamburger.home').addClass('contato-mobile-open');
		$('.seta.home').addClass('active');
	});

	$('.sobre-mobile').clickOrTouch(function(e){
		e.preventDefault();
		$('.menu-mobile').removeClass('show');
		$('.sobre').addClass('show');
		$('.menu-hamburger.home').addClass('sobre-mobile-open');
		$('.seta.home').addClass('active');
	});

	$('.home-menu').clickOrTouch(function(e){
		e.preventDefault();
		$('.menu-mobile').toggleClass('show');
		$('.sobre').removeClass('show');
		$('.contato').removeClass('show');
		$('.seta.home').removeClass('active');
	});

	$('.projetos-mobile').clickOrTouch(function(e){
		e.preventDefault();
		if(APP.timeClick())
		{
			$('.menu-hamburger.home').removeClass('open', 'open');
			$('.menu-hamburger.interna').removeClass('open', 'open');
			$('.projetos').toggleClass('show');
			$('.menu-mobile').toggleClass('show');
			APP.rmCookie('hash');
		}
	});
}

APP.init = function()
{

	APP.defaultLinguagem();
	APP.changeLinguagem();
	
	APP.bordasAnimadas();
	APP.hoverProjetos();
	APP.effectFonts();
	APP.carrossel();
	APP.changePage();
	APP.changeURL();

	APP.openMenuMobile();
}
APP.init();