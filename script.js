// Показ секцій
function showSection(sectionNumber) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`section${sectionNumber}`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Калькулятор доходу
function calculateIncome() {
    const videosSlider = document.getElementById('videosSlider');
    const accountsSlider = document.getElementById('accountsSlider');

    // Округлення значень (магнітний ефект)
    const videos = Math.round(parseFloat(videosSlider.value));
    const accounts = Math.round(parseFloat(accountsSlider.value));

    // Оновлення значень слайдерів
    videosSlider.value = videos;
    accountsSlider.value = accounts;

    // Розрахунок доходу
    let income = videos * accounts * 3; // $3 за кожне відео на кожному акаунті
    if (accounts > 1) {
        income *= (1 + 0.5 * (accounts - 1)); // Множник за додаткові акаунти
    }
    income = Math.round(income); // Округлення до цілого числа

    // Оновлення відображення
    document.getElementById('videosValue').textContent = videos;
    document.getElementById('accountsValue').textContent = accounts;
    document.getElementById('income').textContent = `$${income}`;
}

// Ініціалізація калькулятора при завантаженні
document.addEventListener('DOMContentLoaded', () => {
    calculateIncome();
});
