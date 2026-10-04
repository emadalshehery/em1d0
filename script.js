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

    // English <-> Arabic: every element with data-ar swaps its text.
    const langBtn = document.getElementById('LangToggle');
    let arabic = false;

    langBtn.addEventListener('click', () => {
        arabic = !arabic;

        document.querySelectorAll('[data-ar]').forEach((el) => {
            if (!el.dataset.en) el.dataset.en = el.textContent.trim();
            el.textContent = arabic ? el.dataset.ar : el.dataset.en;
        });

        document.documentElement.lang = arabic ? 'ar' : 'en';
        document.documentElement.dir = arabic ? 'rtl' : 'ltr';
        langBtn.textContent = arabic ? 'EN' : 'ع';
    });

});
