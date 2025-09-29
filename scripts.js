(() => {
    const slider = document.querySelector('[data-slider]');
    if (!slider) return;

    const prevBtn = document.querySelector('[data-action="prev"]');
    const nextBtn = document.querySelector('[data-action="next"]');

    const scrollAmount = () => {
        const card = slider.querySelector('.case-card');
        if (!card) return slider.clientWidth;
        const style = window.getComputedStyle(card);
        const gap = parseFloat(style.marginRight) || 30;
        return card.offsetWidth + gap;
    };

    const scroll = (direction) => {
        const amount = scrollAmount();
        slider.scrollBy({ left: amount * direction, behavior: 'smooth' });
    };

    prevBtn?.addEventListener('click', () => scroll(-1));
    nextBtn?.addEventListener('click', () => scroll(1));
})();
