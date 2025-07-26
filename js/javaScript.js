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
