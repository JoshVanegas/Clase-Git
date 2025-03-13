document.addEventListener("DOMContentLoaded", cargarIdiomas);

function cargarIdiomas() {
    const select = document.getElementById('language');

    const languageCodes = Intl.DisplayNames.supportedLocalesOf("und");
    const languageNames = new Intl.DisplayNames(['es'], { type: 'language' });

    languageCodes.forEach(code => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = languageNames.of(code);
        select.appendChild(option);
    });
}