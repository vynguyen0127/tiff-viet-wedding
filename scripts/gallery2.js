document.addEventListener('DOMContentLoaded', function () {
    AOS.init()
    // Example: Dynamically adding 10 images
    const images = [
        "src/engagement_detroit/Tiffany+Viet-01.jpg",
        "src/engagement_detroit/Tiffany+Viet-03.jpg",
        "src/engagement_detroit/Tiffany+Viet-05.jpg",
        "src/engagement_detroit/Tiffany+Viet-16.jpg",
        "src/engagement_detroit/Tiffany+Viet-21.jpg",
        "src/engagement_detroit/Tiffany+Viet-23.jpg",
        "src/engagement_detroit/Tiffany+Viet-25.jpg",
        "src/engagement_detroit/Tiffany+Viet-29.jpg",
        "src/engagement_detroit/Tiffany+Viet-30.jpg",
        "src/engagement_detroit/Tiffany+Viet-31.jpg",
        "src/engagement_detroit/Tiffany+Viet-33.jpg",
        "src/engagement_detroit/Tiffany+Viet-35.jpg",
        "src/engagement_detroit/Tiffany+Viet-37.jpg",
        "src/engagement_detroit/Tiffany+Viet-40.jpg",
        "src/engagement_detroit/Tiffany+Viet-41.jpg",
        "src/engagement_detroit/Tiffany+Viet-43.jpg",
        "src/engagement_detroit/Tiffany+Viet-45.jpg",
        "src/engagement_detroit/Tiffany+Viet-48.jpg",
        "src/engagement_detroit/Tiffany+Viet-49.jpg",
        "src/engagement_detroit/Tiffany+Viet-50.jpg",
        "src/engagement_detroit/Tiffany+Viet-53.jpg", 
        "src/engagement_detroit/Tiffany+Viet-54.jpg", 
        "src/engagement_detroit/Tiffany+Viet-56.jpg", 
        "src/engagement_detroit/Tiffany+Viet-57.jpg", 
        "src/engagement_detroit/Tiffany+Viet-59.jpg", 
        "src/engagement_detroit/Tiffany+Viet-60.jpg", 
        "src/engagement_detroit/Tiffany+Viet-61.jpg", 
        "src/engagement_detroit/Tiffany+Viet-62.jpg", 
        "src/engagement_detroit/Tiffany+Viet-64.jpg", 
        "src/engagement_detroit/Tiffany+Viet-67.jpg", 
        "src/engagement_detroit/Tiffany+Viet-68.jpg",
        "src/engagement_detroit/Tiffany+Viet-69.jpg",
        "src/engagement_detroit/Tiffany+Viet-70.jpg",
        "src/engagement_detroit/Tiffany+Viet-73.jpg",
        "src/engagement_detroit/Tiffany+Viet-78.jpg",
        "src/engagement_detroit/Tiffany+Viet-81.jpg",
        "src/engagement_detroit/Tiffany+Viet-082.jpg",
        "src/engagement_detroit/Tiffany+Viet-086.jpg",
        "src/engagement_detroit/Tiffany+Viet-088.jpg",
        "src/engagement_detroit/Tiffany+Viet-094.jpg",
        "src/engagement_detroit/Tiffany+Viet-095.jpg",
        "src/engagement_detroit/Tiffany+Viet-096.jpg",
        "src/engagement_detroit/Tiffany+Viet-099.jpg",
        "src/engagement_detroit/Tiffany+Viet-100.jpg",
        "src/engagement_detroit/Tiffany+Viet-103.jpg",
        "src/engagement_detroit/Tiffany+Viet-106.jpg",
        "src/engagement_detroit/Tiffany+Viet-108.jpg",
        "src/engagement_detroit/Tiffany+Viet-109.jpg",
        "src/engagement_detroit/Tiffany+Viet-113.jpg",
        "src/engagement_detroit/Tiffany+Viet-114.jpg",
        "src/engagement_detroit/Tiffany+Viet-116.jpg",
        "src/engagement_detroit/Tiffany+Viet-118.jpg",
        "src/engagement_detroit/Tiffany+Viet-124.jpg",
        "src/engagement_detroit/Tiffany+Viet-125.jpg",
        "src/engagement_detroit/Tiffany+Viet-129.jpg",
        "src/engagement_detroit/Tiffany+Viet-135.jpg",
        "src/engagement_detroit/Tiffany+Viet-143.jpg",
        "src/engagement_detroit/Tiffany+Viet-144.jpg",
        "src/engagement_detroit/Tiffany+Viet-145.jpg",
        "src/engagement_detroit/Tiffany+Viet-151.jpg",
        "src/engagement_detroit/Tiffany+Viet-155.jpg",
        "src/engagement_detroit/Tiffany+Viet-161.jpg",
        "src/engagement_detroit/Tiffany+Viet-168.jpg",
        "src/engagement_detroit/Tiffany+Viet-169.jpg",
        "src/engagement_detroit/Tiffany+Viet-173.jpg",
        "src/engagement_detroit/Tiffany+Viet-177.jpg",
        "src/engagement_detroit/Tiffany+Viet-178.jpg",
        "src/engagement_detroit/Tiffany+Viet-179.jpg",
        "src/engagement_detroit/Tiffany+Viet-185.jpg",
        "src/engagement_detroit/Tiffany+Viet-188.jpg",
        "src/engagement_detroit/Tiffany+Viet-190.jpg",
        "src/engagement_detroit/Tiffany+Viet-196.jpg",
        "src/engagement_detroit/Tiffany+Viet-197.jpg",
        "src/engagement_detroit/Tiffany+Viet-207.jpg",
        "src/engagement_detroit/Tiffany+Viet-217.jpg",
        "src/engagement_detroit/Tiffany+Viet-222.jpg",
        "src/engagement_detroit/Tiffany+Viet-226.jpg",
        "src/engagement_detroit/Tiffany+Viet-228.jpg",
        "src/engagement_detroit/Tiffany+Viet-230.jpg",
        "src/engagement_detroit/Tiffany+Viet-231.jpg",
        "src/engagement_detroit/Tiffany+Viet-233.jpg",
        "src/engagement_detroit/Tiffany+Viet-234.jpg",
        "src/engagement_detroit/Tiffany+Viet-236.jpg",
        "src/engagement_detroit/Tiffany+Viet-237.jpg",
        "src/engagement_detroit/Tiffany+Viet-239.jpg",
        "src/engagement_detroit/Tiffany+Viet-243.jpg",
        "src/engagement_detroit/Tiffany+Viet-244.jpg",
        "src/engagement_detroit/Tiffany+Viet-247.jpg",
        "src/engagement_detroit/Tiffany+Viet-248.jpg",
        "src/engagement_detroit/Tiffany+Viet-252.jpg",
        "src/engagement_detroit/Tiffany+Viet-253.jpg",
        "src/engagement_detroit/Tiffany+Viet-254.jpg",
        "src/engagement_detroit/Tiffany+Viet-255.jpg",
        "src/engagement_detroit/Tiffany+Viet-257.jpg",
        "src/engagement_detroit/Tiffany+Viet-258.jpg",
        "src/engagement_detroit/Tiffany+Viet-259.jpg",
        "src/engagement_detroit/Tiffany+Viet-260.jpg",
        "src/engagement_detroit/Tiffany+Viet-261.jpg",
        "src/engagement_detroit/Tiffany+Viet-262.jpg",
        "src/engagement_detroit/Tiffany+Viet-263.jpg",
        "src/engagement_detroit/Tiffany+Viet-264.jpg",
        "src/engagement_detroit/Tiffany+Viet-265.jpg",
        "src/engagement_detroit/Tiffany+Viet-266.jpg",
        "src/engagement_detroit/Tiffany+Viet-273.jpg",
        "src/engagement_detroit/Tiffany+Viet-274.jpg",
        "src/engagement_detroit/Tiffany+Viet-275.jpg",
        "src/engagement_detroit/Tiffany+Viet-276.jpg",
        "src/engagement_detroit/Tiffany+Viet-279.jpg",
        "src/engagement_detroit/Tiffany+Viet-281.jpg",
        "src/engagement_detroit/Tiffany+Viet-282.jpg",
        "src/engagement_detroit/Tiffany+Viet-283.jpg",
        "src/engagement_detroit/Tiffany+Viet-284.jpg",
        "src/engagement_detroit/Tiffany+Viet-290.jpg",
        "src/engagement_detroit/Tiffany+Viet-312.jpg",
        "src/engagement_detroit/Tiffany+Viet-313.jpg",
        "src/engagement_detroit/Tiffany+Viet-314.jpg",
        "src/engagement_detroit/Tiffany+Viet-326.jpg",
        "src/engagement_detroit/Tiffany+Viet-328.jpg",
        "src/engagement_detroit/Tiffany+Viet-344.jpg",
        "src/engagement_detroit/Tiffany+Viet-348.jpg",
        "src/engagement_detroit/Tiffany+Viet-363.jpg"

    ]
    for([index,image] of images.entries()){
        console.log(index);
        const col = index % 4
        const galleryCol = document.getElementById(`gallery-column2-${col}`);
        const imageSrc = images[index];
        const imageAlt = `Engagement ${index}`;

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
    // for (let i = 0; i <= 20; i++) {
    //     const col = i % 4
    //     const galleryCol = document.getElementById(`gallery-column2-${col}`);
    //     const imageSrc = images[i];
    //     const imageAlt = `Engagement ${i}`;

    //     const image = document.createElement('img');
    //     image.src = imageSrc;
    //     image.alt = imageAlt;
    //     // image.setAttribute("data-aos","zoom-in")
    //     // image.setAttribute("data-aos-duration","2000")
    //     image.setAttribute("class","lazy")
    //     image.setAttribute("data-src",imageSrc)

    //     image.addEventListener('click', function() {
    //         openFullscreen(image);
    //     });

    //     galleryCol.appendChild(image);
    // }
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

