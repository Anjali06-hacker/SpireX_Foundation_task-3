// GET HTML ELEMENTS
// Find the hamburger menu button
const menuToggle = document.getElementById("menuToggle");
// Find the navigation links
const navLinks = document.getElementById("navLinks");
// MOBILE MENU TOGGLE
// Add a click event to the hamburger button
menuToggle.addEventListener("click", function () {
    // Add or remove the "active" class from navigation
    navLinks.classList.toggle("active");
    // Add or remove the "active" class from hamburger button
    // This changes the hamburger icon into an X.
    menuToggle.classList.toggle("active");
    // Check whether the menu is currently open
    const menuIsOpen = navLinks.classList.contains("active");
    // Update the accessibility attribute
    // true = menu is open
    // false = menu is closed
    menuToggle.setAttribute("aria-expanded", menuIsOpen);
});
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// Select all navigation links
const links = document.querySelectorAll(".nav-links a");
// Add click event to every navigation link
links.forEach(function (link) {
    link.addEventListener("click", function () {
        // Close the mobile menu
        navLinks.classList.remove("active");
        // Change the X back into hamburger icon
        menuToggle.classList.remove("active");
        // Update accessibility information
        menuToggle.setAttribute("aria-expanded", "false");
    });
});