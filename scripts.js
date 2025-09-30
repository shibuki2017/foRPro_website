// ハンバーガーメニュー
(() => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    const headerCta = document.querySelector('.header-cta');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

        hamburger.setAttribute('aria-expanded', !isExpanded);
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        if (headerCta) headerCta.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // メニュー項目をクリックしたら閉じる
    const menuLinks = nav.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            if (headerCta) headerCta.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
})();

// スライダー
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
