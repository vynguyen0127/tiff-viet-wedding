document.addEventListener('DOMContentLoaded', function () {
    AOS.init()
    // Example: Dynamically adding 10 images
    const images = [
        "src/engagement_vn/AN_Q4505.jpg", "src/engagement_vn/AN_Q4555.jpg", "src/engagement_vn/AN_Q4670.jpg", "src/engagement_vn/AN_Q4704.jpg",
        "src/engagement_vn/AN_Q4884.jpg", "src/engagement_vn/AN_Q4648.jpg", "src/engagement_vn/AN_Q4858.jpg", "src/engagement_vn/AN_Q4600.jpg",
        "src/engagement_vn/AN_Q4760.jpg", "src/engagement_vn/AN_Q4825.jpg", "src/engagement_vn/AN_Q4594.jpg", "src/engagement_vn/AN_Q4625.jpg", 
        "src/engagement_vn/AN_Q4941.jpg", "src/engagement_vn/AN_Q5020.jpg", "src/engagement_vn/AN_Q5072.jpg", "src/engagement_vn/AN_Q5125.jpg", 
        "src/engagement_vn/AN_Q5129.jpg", "src/engagement_vn/AN_Q5161.jpg", "src/engagement_vn/AN_Q5307.jpg", "src/engagement_vn/AN_Q5243.jpg", 
        "src/engagement_vn/AN_Q5317.jpg",
    ]
    for (let i = 0; i <= 20; i++) {
        const col = i % 4
        console.log("test",col)
        const galleryCol = document.getElementById(`gallery-column-${col}`);
        const imageSrc = images[i];
        const imageAlt = `Engagement ${i}`;

        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = imageAlt;
        // image.setAttribute("data-aos","zoom-in")
        // image.setAttribute("data-aos-duration","2000")
        image.setAttribute("class","lazy")
        image.setAttribute("data-src",imageSrc)

        image.addEventListener('click', function() {
            openFullscreen(image);
        });

        galleryCol.appendChild(image);
    }
     // Function to open an image in fullscreen
 function openFullscreen(img) {
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.mozRequestFullScreen) { // Firefox
        img.mozRequestFullScreen();
    } else if (img.webkitRequestFullscreen) { // Chrome, Safari and Opera
        img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { // IE/Edge
        img.msRequestFullscreen();
    }

    // Optionally, add a class to style the image for fullscreen
    img.classList.add('fullscreen-image');
}

// Exit fullscreen mode automatically when the user presses Esc or clicks outside
document.addEventListener('fullscreenchange', exitFullscreen);
document.addEventListener('webkitfullscreenchange', exitFullscreen);
document.addEventListener('mozfullscreenchange', exitFullscreen);
document.addEventListener('MSFullscreenChange', exitFullscreen);

function exitFullscreen() {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

    // If no element is in fullscreen, remove the fullscreen image styling
    if (!fullscreenElement) {
        const images = document.querySelectorAll('.fullscreen-image');
        images.forEach(img => img.classList.remove('fullscreen-image'));
    }
}

});

