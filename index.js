// Your code goes here
// Create initial paragraph content when script loads
document.body.innerHTML = '<p>JavaScript is so cool. It lets me add text to my page programmatically.</p>';

// Add event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Change the paragraph text when DOM is fully loaded
    document.querySelector('p').textContent = 'This is really cool!';
});