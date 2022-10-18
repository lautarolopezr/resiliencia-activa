// window.addEventListener('load', function(){
// 	new Glider(document.querySelector('.carousel__lista'), {
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
//     	draggable: true,
// 		dots: '.carousel__indicadores',
// 		arrows: {
// 			prev: '.carousel__anterior',
// 			next: '.carousel__siguiente'
// 		},
// 		responsive: [
// 			{
// 			  // screens greater than >= 775px
// 			  breakpoint: 710,
// 			  draggable: true,
// 			  settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			  }
// 			},{
// 			  // screens greater than >= 1024px
// 			  breakpoint: 800,
// 			  draggable: true,
// 			  settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 2
// 			  }
// 			}
//       ,
//       {
// 			  // screens greater than >= 1024px
// 			  breakpoint: 1310,
// 			  draggable: true,
// 			  settings: {
// 				slidesToShow: 3,
// 				slidesToScroll: 2
// 			  }
// 			}
// 		]
// 	});
// });


new Glider(document.querySelector('.carousel__lista'), {
	// Mobile-first defaults
	slidesToShow: 1,
	slidesToScroll: 1,
	scrollLock: true,
	draggable : true,
	dots: '.carousel__indicadores',
	arrows: {
	  prev: '.carousel__anterior',
	  next: '.carousel__siguiente'
	},
	responsive: [
	  {
		// screens greater than >= 775px
		breakpoint: 775,
		settings: {
		  // Set to `auto` and provide item width to adjust to viewport
		  slidesToShow: 'auto',
		  slidesToScroll: 'auto',
		  itemWidth: 150,
		  duration: 0.25
		}
	  },{
		// screens greater than >= 1024px
		breakpoint: 1024,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  itemWidth: 150,
		  duration: 0.25
		}
	  }
	]
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


