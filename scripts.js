document.addEventListener('DOMContentLoaded', () => {
    const quotes = document.querySelectorAll('.quote');
    let currentQuote = 0;

    function showQuote(index) {
        quotes.forEach((quote, i) => {
            quote.style.display = i === index ? 'flex' : 'none';
        });
    }

    setInterval(() => {
        currentQuote = (currentQuote + 1) % quotes.length;
        showQuote(currentQuote);
    }, 3000);

    showQuote(currentQuote);
});
