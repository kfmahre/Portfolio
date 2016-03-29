(function(){

//Parallax effect
	var parallax = document.querySelectorAll(".parallax"),
		speed = 0.4;

	window.onscroll = function(){
		[].slice.call(parallax).forEach(function(el,i){

		var windowYOffset = window.pageYOffset,
			elBackgrounPos = "0 " + (windowYOffset * speed) + "px";

		el.style.backgroundPosition = elBackgrounPos;

		});
	};
//end of parallax

var projects = [
	{
		name: "Project-2: Interactive Resume",
		projectUrl: "http://kfmahre.github.io/Resume",
		projectImg: "images/resume.jpg",
		gitUrl: "https://github.com/kfmahre/Resume"
	},
	{
		name: "Project-3: Classic Arcade Game Clone",
		projectUrl: "https://github.com/kfmahre/arcade-game",
		projectImg: "images/aGame2.png",
		gitUrl: "https://github.com/kfmahre/arcade-game"
	},
	{
		name: "Project-4: Performance Optimization",
		projectUrl: "https://github.com/kfmahre/udportfolio",
		projectImg: "images/clouds1.jpg",
		gitUrl: "https://github.com/kfmahre/udportfolio"
	},
	{
		name: "Cat-Clicker App",
		projectUrl: "http://kfmahre.github.io/Cat-Clicker/",
		projectImg: "images/clouds2.jpg",
		gitUrl: "https://github.com/kfmahre/Cat-Clicker"
	},
	{
		name: "Project-5: Neighborhood-Map",
		projectUrl: "http://kfmahre.github.io/Neighborhood-Map/",
		projectImg: "images/clouds3.jpg",
		gitUrl: "https://github.com/kfmahre/Neighborhood-Map"
	}
];

projects.forEach(function(project){
//col-xs-12 col-sm-4 col-md-4
//projectPic img-responsive img-rounded
	var projectHTML = '<div class="project-slide col-xs-12 col-sm-4 col-md-4"><a href='+project.projectUrl
	+' class="project-link"><img id="projectPic" class="img-responsive img-rounded" src='
	+project.projectImg+' alt="Picture"/><h4>'+project.name
	+'</h4></a><p>'+project.gitUrl+'</p></div>';

	$('#projects').append(projectHTML);

});

$(document).ready(function(){
	$('.slides').slick({
		autoplay: true,
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});
});

})();