// JavaScript code to adjust brightness on scroll
document.addEventListener('scroll', () => {
    // Calculate scroll progress (from 0 to 1)
    const scrollTop = window.scrollY;
    const headerHeight = document.getElementById('headerArea').clientHeight;
    const startBrightness = 0.25;
    let scrollFraction = scrollTop / headerHeight;
    if (scrollFraction > 1) {
        scrollFraction = 1;
    }
    
    // Set brightness based on scroll
    const brightness = startBrightness + scrollFraction * (1-startBrightness); // Adjust starting/ending brightness
    document.getElementById('fixed-bg').style.filter = `brightness(${brightness * 100}%)`;
});

// document.addEventListener('scroll', () => {
//     const scrollTop = window.scrollY;
//     let fixedBg = document.getElementById('fixed-bg');

//     if (scrollTop > 150) {
//         fixedBg.style.position = 'sticky';
//         fixedBg.style.top = '0px';
//     }
//     else {
//         fixedBg.style.position = 'static';
//     }
// });
