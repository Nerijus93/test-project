/* Page 1 JavaScript
Home Page
made by: Nerijus Kmitas 
Student ID x24170232 */

// Get the reference to the quiz button by button ID
const quizButton = document.getElementById('quizButton');

// Check or the button exists on the page
if (quizButton) {
  // Adding event listener to the quiz button
  quizButton.addEventListener('click', function () {
    //Log the message in the browser when button is clicked
    console.log('Quiz button clicked! Navigating to Page 2.');
  });
}
