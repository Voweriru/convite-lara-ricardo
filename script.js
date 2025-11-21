// Wedding date configuration - UPDATE THIS WITH ACTUAL DATE
const weddingDate = new Date('2026-07-25T15:00:00').getTime();

// Location URLs - UPDATE THESE WITH ACTUAL LOCATIONS
const locations = {
    ceremony: 'https://maps.google.com/?q=Quinta+do+Galo,+Fonte+Faneca+75,+9700-684+Angra+do+Heroísmo',
    celebration: 'https://maps.google.com/?q=Quinta+do+Galo,+Fonte+Faneca+75,+9700-684+Angra+do+Heroísmo'
};

// Personalized invitation name from URL
function personalizeInvitation() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('nome');

    if (guestName) {
        const decodedName = decodeURIComponent(guestName);
        document.getElementById('invitation-title').textContent = `${decodedName}, você está convidado/a!`;
    }
}

// Call personalization on page load
personalizeInvitation();

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = '<p style="font-size: 1.5rem;">O grande dia chegou!</p>';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize countdown on page load
updateCountdown();

// Add to Calendar function
function addToCalendar() {
    // Format date for calendar (YYYYMMDDTHHMMSS)
    const startDate = new Date(weddingDate);
    const endDate = new Date(weddingDate + (4 * 60 * 60 * 1000)); // 4 hours duration

    const formatDateForCalendar = (date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const title = 'Casamento [Noiva] e [Noivo]';
    const description = 'Celebração do casamento';
    const location = '[Local do Casamento]';

    // Google Calendar URL
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, '_blank');
}

// Open location in maps
function openLocation(type) {
    if (locations[type]) {
        window.open(locations[type], '_blank');
    } else {
        alert('Localização em breve!');
    }
}

// Open WhatsApp conversation
function openWhatsApp() {
    const phoneNumber = '351914957168';
    const message = 'Olá! Gostaria de confirmar minha presença no casamento.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections on page load
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
