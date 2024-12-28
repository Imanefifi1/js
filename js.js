 // Function for onload event
 window.onload = function() {
    console.log('The page has loaded.');
    addTabfocus();
};

// Function to add tabfocus attribute
function addTabfocus() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(function(img) {
        img.setAttribute('tabindex', '0'); // Ensure all images are focusable
    });
}

// Function to handle onmouseover event
function onImageMouseOver(event) {
    event.target.style.transform = 'scale(1.1)';
    event.target.style.borderColor = '#ff6600';
}

// Function to handle onmouseleave event
function onImageMouseLeave(event) {
    event.target.style.transform = 'scale(1)';
    event.target.style.borderColor = '#ddd';
}

// Function to handle onfocus event
function onImageFocus(event) {
    console.log('Image focused:', event.target.alt);
    event.target.style.borderColor = '#66cc66';
}

// Function to handle onblur event
function onImageBlur(event) {
    console.log('Image lost focus:', event.target.alt);
    event.target.style.borderColor = '#ddd';
}

// Loop through each image and add event listeners
const images = document.querySelectorAll('.gallery img');
images.forEach(function(img) {
    img.addEventListener('mouseover', onImageMouseOver);
    img.addEventListener('mouseleave', onImageMouseLeave);
    img.addEventListener('focus', onImageFocus);
    img.addEventListener('blur', onImageBlur);
});