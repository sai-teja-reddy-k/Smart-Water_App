// Example: Alert when user scrolls to bottom
window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log("You’ve reached the bottom!");
    }
};
