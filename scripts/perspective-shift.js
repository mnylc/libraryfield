document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with the class 'perspective-shift'
    const elements = document.querySelectorAll('.perspective-shift');

    // Function to handle mouse movement
    const handleMouseMove = (event) => {
        // Calculate the rotation values based on mouse position
        const xRot = ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 100;
        const yRot = ((event.clientY - window.innerHeight / 2) / window.innerHeight) * 100;

        // Adjust the font-variation-settings for each element
        elements.forEach((element) => {
            element.style.fontVariationSettings = `"XROT" ${xRot}, "YROT" ${yRot}`;
        });
    };

    // Function to reset rotation values to 0
    const resetRotation = () => {
        elements.forEach((element) => {
            element.style.fontVariationSettings = `"XROT" 0, "YROT" 0`;
        });
    };

    // Function to handle window resize
    const handleWindowResize = () => {
        if (window.innerWidth > 800) {
            // Add event listener for mouse movement
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            // Remove event listener for mouse movement
            document.removeEventListener('mousemove', handleMouseMove);
            // Reset rotation values to 0
            resetRotation();
        }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleWindowResize);

    // Initial check on window load
    handleWindowResize();
});
