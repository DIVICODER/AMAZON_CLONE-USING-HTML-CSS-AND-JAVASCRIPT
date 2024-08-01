const images = document.querySelectorAll('.header-slider ul img'); // Select all images in the header-slider
const previous_button = document.querySelector('.control_prev'); // Select the previous button
const next_button = document.querySelector('.control_next'); // Select the next button

let n = 0;

function changeSlide() {
    // Hide all images
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    // Display the current image
    images[n].style.display = 'block';
}

// Initialize the slider
changeSlide();

// Add event listener for the previous button
previous_button.addEventListener('click', (e) => {
    n = (n === 0) ? images.length - 1 : n - 1; // Move to the previous image
    changeSlide(); // Update the slide
});

// Add event listener for the next button
next_button.addEventListener('click', (e) => {
    n = (n === images.length - 1) ? 0 : n + 1; // Move to the next image
    changeSlide(); // Update the slide
});

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft +=e.deltaY;
    })
}
