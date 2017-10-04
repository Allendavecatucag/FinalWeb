$('#index').html(`
	<div class="nav navbar-nav">
	</div>
`);

$('#app').html(`
	<center><div class="loader"></center>
  </div>
`);

$(document).ready(function() {
	x();
	$('.movies').bxSlider();
});




function x(){
$.ajax({
	url: "https://www.omdbapi.com/?t=fast+and+the+furious"
}).done(function(res){
	console.log(res);
	
	$('#app').html(createMoviePreviewTemplate(res));
});
}
http://www.omdbapi.com/?t=2+fast+2+furious

$.ajax({
	url: "https://www.omdbapi.com/?t=2+fast+2+furious"
}).done(function(res){
	console.log(res);
	
	$('#app2').html(createMoviePreviewTemplate(res));
});

http://www.omdbapi.com/?t=fast+and+the+furious+tokyo+drift
$.ajax({
	url: "https://www.omdbapi.com/?t=fast+and+the+furious+tokyo+drift"
}).done(function(res){
	console.log(res);
	
	$('#app3').html(createMoviePreviewTemplate(res));
});
http://www.omdbapi.com/?t=fast+%26+furious
$.ajax({
	url: "https://www.omdbapi.com/?t=fast+%26+furious"
}).done(function(res){
	console.log(res);
	
	$('#app4').html(createMoviePreviewTemplate(res));
});
http://www.omdbapi.com/?t=fast+five
$.ajax({
	url: "https://www.omdbapi.com/?t=fast+five"
}).done(function(res){
	console.log(res);
	
	$('#app5').html(createMoviePreviewTemplate(res));
});


function createMoviePreviewTemplate(res) {
	let html = `
		<div class="movie-template" id="movie-caption">
			<h1 align="center">${res.Title}
			</h1>
			<div class="movie-img">
				<img src="${res.Poster}"/>
			</div>
			<div class="movie-caption">
				<h3>${res.Year}</h3>
				<h4>Plot: <p>${res.Plot}</p></h4>
				<h4>Genre: ${res.Genre}</h4>
				<h4>Writer: ${res.Writer}</h4>
				<h4>Actors: ${res.Actors}</h4>
				<h4>Rated: ${res.Rated}</h4>
				<h4>Language: ${res.Language}</h4>
			</div>
		</div>
		
		`;

	return html;
}