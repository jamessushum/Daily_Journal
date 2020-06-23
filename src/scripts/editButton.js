// Import Module
import api from "./data.js"

// Object houses methods to retrieve id of edit button selected and fetch corresponding entry from API and populating form field for editing
const editButton = {
  // Method retrieves id of edit button selected and invokes method to fetch corresponding entry from API
  editEntry() {
    // Accessing HTML DOM element housing all entries
    const entryLogElement = document.querySelector('.entryLog')
    // Event listener when user clicks inside of element housing all entries
    entryLogElement.addEventListener('click', event => {
      // Conditional if the edit button is selected
      if (event.target.id.startsWith('editEntry')) {
        // Retrieves id number in [1] index after spliting the original id form and stored in split array
        const entryToEditId = event.target.id.split('--')[1]
        // Invoking method fetching journal entry to be edited and displaying it in form input fields, passing-in id of entry selected
        this.updateFormFields(entryToEditId)
      }
    })
  },
  // Method takes id of entry to be edited and fetches entry from API to display in form input fields for editing
  updateFormFields(entryToEditId) {
    // Accessing HTML DOM elements where journal entry data will be displayed for user editing
    const hiddenEntryId = document.getElementById('entryId')
    const entryDateInput = document.getElementById('date')
    const entryConceptInput = document.getElementById('concepts')
    const entryJournalInput = document.getElementById('journal-entry')
    const entryMoodInput = document.getElementById('mood')
    // Invoking method to fetch entry to be edited from API and setting values of HTML DOM elements for users to edit
    api.getSingleEntry(entryToEditId).then(response => {
      // Setting values of HTML DOM elements with the data of entry being fetched from API
      hiddenEntryId.value = response.id
      entryDateInput.value = response.date
      entryConceptInput.value = response.concepts
      entryJournalInput.value = response.entry
      entryMoodInput.value = response.mood
    })
  }
}

// Export Module
export default editButton;