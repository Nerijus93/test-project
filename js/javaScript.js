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

/* Page 2 JavaScript
Quiz Game
made by: Mateus Silva De Oliveira
Student ID x23316748 */

const submitBtn = document.getElementById("submitBTN");
if (submitBtn) {
  submitBtn.addEventListener("click", function () {
    const answers = {
      q1: "10%",
      q2: "All of the above",
      q3: "25",
      q4: "100%",
      q5: "Women and girls",
      q6: "25%",
      q7: "10%",
      q8: "7%",
      q9: "Sustainable farming",
      q10: "All of the above"
    };

    let score = 0;

    for (let q in answers) {
      const radios = document.getElementsByName(q);
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked && radios[i].value === answers[q]) {
          score++;
          break;
        }
      }
    }

    alert("You got " + score + " out of 10 correct.");
  });
}

/* Page 3 JavaScript 
Volunteer Registration Form
Made by: Maria Eduarda Berti
Student ID x23351080 */

const selectedFoodText = document.getElementById("selected-food");
const wasteInfo = document.getElementById("wast");

const foodButtons = {
  bread: "BREAD",
  rice: "RICE",
  meat: "MEAT",
  vegetables: "VEGETABLES"
};

let selectedFood = "";

for (let id in foodButtons) {
  const button = document.getElementById(id);
  if (button) {
    button.onclick = function () {
      selectedFood = foodButtons[id];
      if (selectedFoodText) selectedFoodText.textContent = "Selected Food: " + selectedFood;
      if (wasteInfo) wasteInfo.textContent = "";
    };
  }
}

const simulate = document.getElementById('simulate');
if (simulate) {
  simulate.addEventListener('click', function () {
    if (!wasteInfo) return;

    switch (selectedFood) {
      case 'BREAD':
        wasteInfo.textContent = 'Around 35 million tons of bread are wasted worldwide each year.';
        break;
      case 'RICE':
        wasteInfo.textContent = 'Around 20 million tons of rice are wasted worldwide each year.';
        break;
      case 'MEAT':
        wasteInfo.textContent = 'Around 25 million tons of meat are wasted worldwide each year.';
        break;
      case 'VEGETABLES':
        wasteInfo.textContent = 'Around 30 million tons of vegetables are wasted worldwide each year.';
        break;
      default:
        wasteInfo.textContent = 'Please select a food first.';
    }
  });
}

/* Page 5 JavaScript
Statistics page
made by: Nerijus Kmitas 
Student ID x24170232 */

//Get references to slider input and display elements
const slider = document.getElementById("rangeSlider"); //Element to show Range Slider
const sliderValue = document.getElementById("sliderValue"); //Element to show the percentage
const sliderText = document.getElementById("sliderText"); //Text to display people fed

//To make sure that all slider elements are present on the page
if (slider && sliderValue && sliderText) {
  //Add an "input" event listener so this so this will run when user moves slider
  slider.addEventListener("input", () => {
    //Convert slider value String into integer value
    const value = parseInt(slider.value);

    // Update the visible percentage value with the current value
    sliderValue.textContent = `${value}%`;

    // Calculate how many people could be fed (based on max 3.45 billion)
    const estimatedPeopleFed = Math.floor((value / 100) * 3450); // Result will be displayed in millions

    // Update the text below the slider
    sliderText.textContent = `We could feed over ${estimatedPeopleFed.toLocaleString()} million people annually`;
  });
}

/* Page 6 JavaScript 
Volunteer Registration Form
Made by: Maria Eduarda Berti
Student ID x23351080 */

const form = document.getElementById("volunteerForm");
const thanksMessage = document.getElementById("thanksMessage");

if (form && thanksMessage) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent real submission
    form.style.display = "none";
    thanksMessage.style.display = "block";
  });
}
