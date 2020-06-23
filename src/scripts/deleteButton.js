// Import Module
import api from './data.js'
import displayEntries from './entryList.js'

// Object houses method to delete selected entry and displaying all remaining entries
const allDeleteButtons = {
  deleteEntry() {
    // Accessing HTML DOM element housing all entries
    const entryLogElement = document.querySelector('.entryLog')
    // Event listener when user clicks in element housing all entries
    entryLogElement.addEventListener('click', event => {
      // Conditional if user selects the delete button
      if (event.target.id.startsWith('deleteEntry')) {
        // Splits the button id then obtains just the number value located in the [1] index in split array
        const entryId = event.target.id.split('--')[1]
        // Invoking method to delete selected entry in API passing-in the id as an argument then invoking methods to fetch and display updated list of entries
        api.deleteJournalEntry(entryId)
        .then(() => api.getEntriesData())
        .then(response => displayEntries.renderEntries(response))
      }
    })
  }
}

// Export Module
export default allDeleteButtons;