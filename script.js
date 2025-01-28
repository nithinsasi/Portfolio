// Select the hamburger, navigation menu, and document body
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle the navigation menu on hamburger click
hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    navMenu.classList.toggle('active');
});

// Close the menu when clicking anywhere outside it
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('active'); // Hide the menu
    }
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'root/Nithinresume.pdf'; // Replace with the actual relative path to your resume file on the server
    link.download = 'NithinSasi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
