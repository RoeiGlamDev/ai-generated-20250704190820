// Add event listener to window load
window.addEventListener('load', () => {
    // Get all sections
    const sections = document.querySelectorAll('section');

    // Add fade-in animation to sections
    sections.forEach((section) => {
        section.classList.add('fade-in');
    });
});

// Add event listener to window scroll
window.addEventListener('scroll', () => {
    // Get all manga stories
    const mangaStories = document.querySelectorAll('.manga-story');

    // Add fade-in animation to manga stories on scroll
    mangaStories.forEach((mangaStory) => {
        const rect = mangaStory.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            mangaStory.classList.add('fade-in');
        }
    });
});