document.addEventListener('DOMContentLoaded', () => {

    const toggles = document.querySelectorAll('[data-toggle]');

    toggles.forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = toggle.getAttribute('data-toggle');
            const target = document.getElementById(targetId);
            if (!target) return;

            const group = toggle.getAttribute('data-group');
            const wasOpen = target.classList.contains('open');

            // If this toggle belongs to a group (Web Dev / Games Dev / AI),
            // close the other panels in that group so only one shows at a time.
            if (group) {
                document
                    .querySelectorAll(`.collapsible[data-group="${group}"]`)
                    .forEach((panel) => {
                        if (panel !== target) {
                            panel.classList.remove('open');
                        }
                    });
            }

            // Open/close the clicked panel.
            target.classList.toggle('open', !wasOpen);

            // Once it's opening, smoothly scroll it into view.
            if (!wasOpen) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 200);
            }
        });
    });

    // ===================== English / Arabic switch =====================
    const langBtn = document.getElementById('LangToggle');
    const translatable = document.querySelectorAll('[data-ar]');

    // Remember the original English text so we can switch back.
    translatable.forEach((el) => {
        el.setAttribute('data-en', el.textContent.trim());
    });

    function setLanguage(lang) {
        const isArabic = lang === 'ar';

        translatable.forEach((el) => {
            el.textContent = isArabic
                ? el.getAttribute('data-ar')
                : el.getAttribute('data-en');
        });

        document.documentElement.lang = isArabic ? 'ar' : 'en';
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

        // The button shows the language you can switch TO.
        if (langBtn) langBtn.textContent = isArabic ? 'EN' : 'ع';

        try { localStorage.setItem('lang', lang); } catch (e) {}
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
        });
    }

    // Restore the visitor's last choice.
    let saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved === 'ar') setLanguage('ar');

});
