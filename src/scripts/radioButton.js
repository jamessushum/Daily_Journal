// Import Module
import api from "./data.js"
import displayEntries from "./entryList.js"

// allRadioButtons object houses method to filter journal entries by mood when user clicks a specific radio button and displays it in the DOM
const allRadioButtons = {
  moodFilter() {
    // Access all radio button's DOM HTML elements, getElementByName grabs all elements with name 'moods' and stores them in an array
    const radioButtons = document.getElementsByName('moods')
    // Iterate through radioButtons array and add click event listener to each radio button
    radioButtons.forEach(
      button => {
        button.addEventListener('click', event => {
          // Access the value of the clicked element
          const mood = event.target.value
          // Access the journalEntries array with all stored entries
          const journalData = api.journalEntries
          // Filter through journalEntries array to find entry object that matches the user selected mood value
          const moodArray = journalData.filter(
            entry => entry.mood.includes(mood)
          )
          // Pass-in moodArray of filtered entries per mood to renderEntries method to convert each object in moodArray to HTML and display in DOM
          displayEntries.renderEntries(moodArray)
        })
      }
    )
  }
}

// Export Module
export default allRadioButtons;