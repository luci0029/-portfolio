let slideIndex = 0;
let lastIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		if (i != slideIndex){
			slides[i].style.display = "none";
			slides[i].style.zIndex = "10";
			slides[i].className.replace(" fadeIn", " fadeOut");
		}
	}

	lastIndex = slideIndex;
	slideIndex++;

	if (slideIndex > slides.length) {slideIndex = 1}
	if (slideIndex == 1) {lastIndex = slides.length}

	slides[lastIndex-1].style.zIndex = "2";
	slides[slideIndex-1].style.zIndex = "1";
	slides[slideIndex-1].className.replace(" fadeOut", " fadeIn");
	slides[slideIndex-1].style.display = "block";
	
	slides[lastIndex-1].style.zIndex = "10";
	slides[lastIndex-1].style.display = "none";

	setTimeout(showSlides, 10000); // Change image every 2 seconds
}