document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement; // Reference to the HTML root for setting attributes
    const themeButtons = document.querySelectorAll('.theme-btn'); // Theme selection buttons
    const darkModeToggle = document.getElementById('dark-mode-toggle'); // Dark mode toggle button
    const quotes = document.querySelectorAll('.quote'); // Quote elements for the carousel
    let currentQuote = 0; // Keeps track of the current quote

    // Set default theme and dark mode state
    root.setAttribute('data-theme', 'theme1');
    root.setAttribute('data-dark-mode', 'false');

    // Function to update the current theme
    themeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            root.setAttribute('data-theme', theme); // Set the selected theme on the root element
        });
    });

    // Function to toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = root.getAttribute('data-dark-mode') === 'true';
        root.setAttribute('data-dark-mode', !isDarkMode); // Toggle the dark mode attribute
    });

    // Function to show a specific quote
    function showQuote(index) {
        quotes.forEach((quote, i) => {
            quote.style.display = i === index ? 'flex' : 'none'; // Show or hide quotes based on index
        });
    }

    // Quote carousel functionality
    setInterval(() => {
        currentQuote = (currentQuote + 1) % quotes.length; // Move to the next quote in a loop
        showQuote(currentQuote);
    }, 3000); // Change quotes every 3 seconds

    // Show the first quote initially
    showQuote(currentQuote);
});
