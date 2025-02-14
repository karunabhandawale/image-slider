const images = ["images1.jpg", "images2.jpg", "images3.jpg","images4.jpeg"];
let index = 0;
let autoSlideInterval;

function updateSlider() {
    let mainImage = document.getElementById("main-image");
    mainImage.classList.add("fade"); 
    setTimeout(() => {
        mainImage.src = images[index];
        mainImage.classList.remove("fade");
    }, 300); // Delay to match transition

    document.querySelectorAll(".thumb").forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    index = (index + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
}

function changeSlide(i) {
    index = i;
    updateSlider();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); 
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}


document.addEventListener("DOMContentLoaded", () => {
    updateSlider();
    startAutoSlide();

   
    document.querySelector(".slider").addEventListener("mouseover", stopAutoSlide);
    document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);
});
