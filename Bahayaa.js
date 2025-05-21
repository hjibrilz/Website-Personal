document.querySelectorAll('button.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const content = document.getElementById(targetId);
        const isVisible = content.style.display === 'block';

        if (isVisible) {
            content.style.display = 'none';
            button.textContent = 'Baca Selengkapnya';
        } else {
            content.style.display = 'block';
            button.textContent = 'Sembunyikan';
        }
    });
});
