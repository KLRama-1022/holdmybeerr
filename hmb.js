const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dark Mode Toggle
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const flashMessage = document.getElementById("flashMessage");
    flashMessage.classList.add("active");

    setTimeout(() => {
        flashMessage.classList.remove("active");
    }, 3000);

    document.getElementById("contactForm").reset();
});