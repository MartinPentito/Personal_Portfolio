// Typing effect
const services = [
    "Computer Technician",
    "Web Developer",
    "Composer"
];

const typingText = document.getElementById("typing-text");
let serviceIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let deletingDelay = 50;
let newTextDelay = 2000;

function type() {
    const currentService = services[serviceIndex];
    
    if (isDeleting) {
        typingText.textContent = currentService.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentService.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentService.length) {
        isDeleting = true;
        setTimeout(type, newTextDelay);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        serviceIndex = (serviceIndex + 1) % services.length;
        setTimeout(type, typingDelay);
        return;
    }

    setTimeout(type, isDeleting ? deletingDelay : typingDelay);
}

// Start the typing effect when the document is loaded
document.addEventListener('DOMContentLoaded', type);