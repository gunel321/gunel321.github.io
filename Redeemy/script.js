// JavaScript code to adjust brightness on scroll
document.addEventListener('scroll', () => {
    // Calculate scroll progress (from 0 to 1)
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / windowHeight;

    // Set brightness based on scroll
    const brightness = 0.3 + (scrollFraction * 0.6); // Adjust starting/ending brightness
    document.querySelector('.fixed-bg').style.filter = `brightness(${brightness * 100}%)`;
});
