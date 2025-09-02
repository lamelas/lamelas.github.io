document.addEventListener('DOMContentLoaded', function() {
    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
        h2.classList.add('closed');
        const panel = h2.nextElementSibling;
        if (!panel) return;
        panel.classList.add('collapsible', 'collapsed');
        panel.style.maxHeight = '0px';

        h2.onclick = function() {
            const content = this.nextElementSibling;
            if (!content) return;
            content.classList.toggle('collapsed');
            this.classList.toggle('closed');

            if (content.classList.contains('collapsed')) {
                content.style.maxHeight = '0px';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }
    });
});