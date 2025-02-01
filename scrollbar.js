const container = document.querySelector('.lol'); // zamień na swój selektor

container.addEventListener('wheel', (event) => {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
});