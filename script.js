document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for menu icon click
    document.querySelector('.menu-toggle').addEventListener('click', function() {
       // Toggle the sidebar display
       document.querySelector('.sidebar').classList.toggle('active');
    });
   });