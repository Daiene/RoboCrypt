export function startAnimation(title) {
    title.forEach((span, index) => {
        span.style.animation = 'none';
        void span.offsetWidth;
        span.style.animation = '';
        span.style.animationDelay = (index * 0.1) + 's';
    });
}