document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const gridContainer = document.querySelector('.grid-container');
    const backdrop = document.getElementById('backdrop');
    const modal = document.getElementById('modalCard');
    const closeBtn = document.getElementById('closeBtn');

    // Función para abrir la tarjeta
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // 1. Chupamos el color de fondo exacto de la tarjeta que clickeamos
            const computedStyle = window.getComputedStyle(card);
            const cardBgColor = computedStyle.backgroundColor;

            // 2. Le pintamos ese mismo fondo a la tarjeta expandida
            modal.style.backgroundColor = cardBgColor;

            // 3. Metemos las clases que activan el blur, bajan opacidad y muestran modal
            gridContainer.classList.add('dimmed');
            backdrop.classList.add('active');
            modal.classList.add('active');
        });
    });

    // Función para cerrar todo y volver al estado inicial
    const closeModal = () => {
        gridContainer.classList.remove('dimmed');
        backdrop.classList.remove('active');
        modal.classList.remove('active');
    };

    // Cerramos si tocan la X o si clickean en cualquier parte del fondo difuminado
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
});