// Select all elements on the page that have the 'movie card' class
const movieCards= document.querySelectorAll('.movie-card');

// Loop through each movie card and the code waits for the user to physically click an element
movieCards.forEach(function(card) {
    card.addEventListener('click', function() {
        // Redirects user to movie bio page when it is clicked
        window.location.href = 'detail.html';
    });
});

// Smooth scroll to selected mood row  for interactive experience and decision fatigue reduction //
document.querySelectorAll(".mood-btn[data-mood]").forEach((btn) => {
    // Attach a click even listener to each filter button //
    btn.addEventListener("click", () => {
        // Read each custom data mood attribute from the clicked button //
        const mood = btn.getAttribute("data-mood");
        // Locate the matching mood section with data mood value //
    const targetRow = document.querySelector(`.mood-row[data-mood="${mood}"]`);

    // Smooth scrolling to target row if it already exists in DOM //
    if (targetRow) {
        targetRow.scrollIntoView({ behavior: "smooth" , block: "start"});
    }
});
});
