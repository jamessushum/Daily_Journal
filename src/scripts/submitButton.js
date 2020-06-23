// Import Module
import createJournalEntry from "./createEntry.js"
import api from "./data.js"
import displayEntries from "./entryList.js"

// Object houses methods to edit existing journal entry or submit new journal entry
const submitButton = {
  // Method listens to clicks on submit button and executes corresponding functions depending whether hidden id is present
  submitOrEditEntry() {
    // Accessing HTML DOM element of submit button
    const submitElement = document.getElementById('submit')
    // Event listening for clicks on submit button
    submitElement.addEventListener('click', event => {
      // Method cancels default action typical of submit buttons (refreshing page upon click)
      event.preventDefault()
      // Accessing HTML DOM element where hidden id is located
      const hiddenEntryId = document.getElementById('entryId')
      // Accessing values of form input fields
      const dateInput = document.getElementById("date").value
      const conceptsInput = document.getElementById("concepts").value
      const journalEntryInput = document.getElementById("journal-entry").value
      const moodInput = document.getElementById("mood").value
      // Conditional if hidden id is present, present means entry is to be edited and submit buttons updates the API data as well as user display
      if (hiddenEntryId.value !== "") {
        // Invokes method editing journal entry in API and displays updated entries in user interface, passing-in id of entry to be edited
        this.editSelectedEntry(hiddenEntryId.value)
        // Conditional continuation if the hidden id is not present, meaning a new entry is to be submitted/created, conditional checks if all form input fields are populated
      } else if (dateInput == "" || conceptsInput == "" || journalEntryInput == "" || moodInput == "") {
        // Alerts if any input field is empty
        alert("Please complete all fields")
      } else {
        // Invokes function creating new entry object passing-in new input form values as arguments
        const journalEntryObject = createJournalEntry(dateInput, conceptsInput, journalEntryInput, moodInput)
        // Invokes method POSTING/saving new entry object in API passing-in newly created entry object then displaying updated entries in user interface and resetting form input values
        api.saveJournalEntries(journalEntryObject)
        .then(() => api.getEntriesData())
        .then(response => {
          displayEntries.renderEntries(response)
          document.getElementById('form').reset()
        })
      }
    })
  },
  // Method takes in id of entry to be edited, creates new entry object with updated data, modifies entry in API then displays updated entries in user interface
  editSelectedEntry(entryId) {
    // Accessing any updated values from the form input fields
    const newDateValue = document.getElementById('date').value
    const newConceptsValue = document.getElementById('concepts').value
    const newJournalValue = document.getElementById('journal-entry').value
    const newMoodValue = document.getElementById('mood').value
    // Passing-in new updated values to function creating new entry object
    const updatedEntryObject = createJournalEntry(newDateValue, newConceptsValue, newJournalValue, newMoodValue)
    // Invokes method editing/modifying entry in API passing-in id of entry to be edited and updated entry object then displaying updated entries in user interface and clearing/resetting the hidden id value and entire form input fields
    api.editJournalEntry(entryId, updatedEntryObject)
    .then(() => api.getEntriesData())
    .then(response => {
      displayEntries.renderEntries(response)
      document.getElementById('entryId').value = ""
      document.getElementById('form').reset()
    })
  }
}

// Export Module
export default submitButton;