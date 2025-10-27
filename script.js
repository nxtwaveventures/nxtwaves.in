document.addEventListener('DOMContentLoaded', () => {
    // Tab switching
    const tabs = document.querySelectorAll('.nav-btn');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const contentId = tab.getAttribute('data-tab');
            document.getElementById(contentId).classList.add('active');
        });
    });

    // Animate AI text
    const aiText = document.querySelector('.highlight');
    setInterval(() => {
        aiText.style.opacity = '0.7';
        setTimeout(() => {
            aiText.style.opacity = '1';
        }, 1000);
    }, 2000);
});