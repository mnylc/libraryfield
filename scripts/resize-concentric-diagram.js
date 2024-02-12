// Function to update the transform rotate style
function updateTransformRotate() {
    // Get the window width
    var windowWidth = window.innerWidth;

    // Define starting positions for each line
    var sdgLineStartPosition = 45;
    var libFarmLineStartPosition = -25;
    var greenpointLineStartPosition = -30;
    var natLibLineStartPosition = 30;

    // Calculate the change in starting position based on window width
    var positionChange = Math.floor((1340 - windowWidth) / 15);

    // Update the transform rotate style for each element
    document.getElementById('sdg-line').style.transform = 'rotate(' + (sdgLineStartPosition + positionChange) + 'deg)';
    document.getElementById('lib-farm-line').style.transform = 'rotate(' + (libFarmLineStartPosition - positionChange) + 'deg)';
    document.getElementById('greenpoint-line').style.transform = 'rotate(' + (greenpointLineStartPosition - positionChange) + 'deg)';
    document.getElementById('nat-lib-line').style.transform = 'rotate(' + (natLibLineStartPosition + positionChange) + 'deg)';

    // Reset the transform rotate style when the window width is 1200px or greater
    if (windowWidth > 1340) {
        document.getElementById('sdg-line').style.transform = 'rotate(' + sdgLineStartPosition + 'deg)';
        document.getElementById('lib-farm-line').style.transform = 'rotate(' + libFarmLineStartPosition + 'deg)';
        document.getElementById('greenpoint-line').style.transform = 'rotate(' + greenpointLineStartPosition + 'deg)';
        document.getElementById('nat-lib-line').style.transform = 'rotate(' + natLibLineStartPosition + 'deg)';
    }

    // Set the rotation position when the window width is under 950px
    if (windowWidth < 950) {
        var positionChange = Math.floor((1340 - 950) / 15);
        document.getElementById('sdg-line').style.transform = 'rotate(' + (sdgLineStartPosition + positionChange) + 'deg)';
        document.getElementById('lib-farm-line').style.transform = 'rotate(' + (libFarmLineStartPosition - positionChange) + 'deg)';
        document.getElementById('greenpoint-line').style.transform = 'rotate(' + (greenpointLineStartPosition - positionChange) + 'deg)';
        document.getElementById('nat-lib-line').style.transform = 'rotate(' + (natLibLineStartPosition + positionChange) + 'deg)';
    }
}

// Call the updateTransformRotate function when the window is resized
window.addEventListener('resize', updateTransformRotate);

// Call the updateTransformRotate function initially
updateTransformRotate();
