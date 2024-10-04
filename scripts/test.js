const sliderTrack = document.getElementById('slider-track');

// Clone the images for an infinite loop effect
const cloneImages = () => {
    const sliderTrackWidth = sliderTrack.offsetWidth;
    const containerWidth = sliderTrack.parentElement.offsetWidth;
    let totalWidth = 0;
    
    while (totalWidth < containerWidth * 5) {
        // Clone all the images inside the slider
        sliderTrack.innerHTML += sliderTrack.innerHTML;
        totalWidth += sliderTrackWidth;
    }
};

// Start the clone process to enable infinite scrolling
cloneImages();
