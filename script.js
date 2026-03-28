document.addEventListener('DOMContentLoaded', function() {
    // Color palette - bright, toddler-friendly colors
    const colors = [
        '#FF5252', // Red
        '#2196F3', // Blue
        '#4CAF50', // Green
        '#FFEB3B', // Yellow
        '#E91E63', // Pink
        '#9C27B0', // Purple
        '#00BCD4', // Cyan
        '#FF9800', // Orange
        '#8BC34A', // Light Green
        '#FF4081'  // Hot Pink
    ];

    const circlesContainer = document.getElementById('circles-container');

    function createCircle(color) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = color;

        // Position at center with random offset
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = (Math.random() - 0.5) * 100;

        circle.style.left = `${centerX + randomX}px`;
        circle.style.top = `${centerY + randomY}px`;

        circlesContainer.appendChild(circle);

        // Remove circle after animation
        setTimeout(() => {
            if (circle.parentNode) {
                circle.parentNode.removeChild(circle);
            }
        }, 3200);
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function handleKeyPress(event) {
        // Ignore modifier keys
        if (event.key === 'Shift' || event.key === 'Control' ||
            event.key === 'Alt' || event.key === 'Meta') {
            return;
        }

        const color = getRandomColor();
        createCircle(color);
    }

    function handleClick() {
        const color = getRandomColor();
        createCircle(color);
    }

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleClick);
});