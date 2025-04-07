function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    // Calculate random position within container
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    
    // Add wiggle effect
    noButton.classList.add('wiggle');
    setTimeout(() => {
        noButton.classList.remove('wiggle');
    }, 500);
}

// Create hearts when clicking Yes button (optional)
document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    if (yesButton) {
        yesButton.addEventListener('click', function(e) {
            // Optional: Create hearts animation
            for (let i = 0; i < 10; i++) {
                createHeart(e);
            }
        });
    }
});

function createHeart(e) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Position hearts around the click
    const x = e.clientX + (Math.random() - 0.5) * 100;
    const y = e.clientY + (Math.random() - 0.5) * 100;
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 1000);
}