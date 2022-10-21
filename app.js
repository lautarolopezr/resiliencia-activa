window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		draggable : true,
		slidesToShow: 1.1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		draggable: true,
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 500,
			  draggable: true,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4	,
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 501,
			  draggable: true,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 2
			  }
			}
      ,
      {
			  // screens greater than >= 1024px
			  breakpoint: 1310,
			  draggable: true,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			  }
			}
		]
	});
});



window.addEventListener('load', function(){
	new Glider(document.querySelector('.reviews__card'), {
		slidesToShow: 1,
		slidesToScroll: 1,
    	draggable: true,
		dots: '.reviews__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		}
	});
});


function mostrar() {
  div = document.getElementById("flotante");
  div.style.display = "";
  abrir = document.getElementById("open");
  abrir.style.display = "none";
}

function cerrar() {
  div = document.getElementById("flotante");
  div.style.display = "none";
  abrir = document.getElementById("open");
  abrir.style.display = "";
}


