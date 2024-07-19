function handleResize() {
    const brElements = document.querySelectorAll(".hero-text br");
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    if(mediaQuery.matches) {
        brElements.forEach(br => br.style.display = 'none');
    } else {
        brElements.forEach(br => br.style.display = '');
    }
}

handleResize();

window.addEventListener('resize', handleResize);