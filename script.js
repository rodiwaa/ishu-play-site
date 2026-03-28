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

        // Random size
        const sizes = [
            {class: 'small', size: 80},
            {class: 'medium', size: 120},
            {class: 'large', size: 160}
        ];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        circle.className = `circle ${randomSize.class}`;
        circle.style.backgroundColor = color;

        // Random position anywhere on screen
        const radius = randomSize.size / 2;
        const minX = radius;
        const maxX = window.innerWidth - radius;
        const minY = radius;
        const maxY = window.innerHeight - radius;

        const randomX = minX + Math.random() * (maxX - minX);
        const randomY = minY + Math.random() * (maxY - minY);

        circle.style.left = `${randomX}px`;
        circle.style.top = `${randomY}px`;

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