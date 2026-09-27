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

});
