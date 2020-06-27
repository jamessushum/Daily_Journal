// Import Module
import api from "./data.js"
import displayEntries from "./entryList.js"

// Object houses search bar method displaying entries matching searched term
const searchEntry = {
  searchListener() {
    // Accessing search bar HTML DOM element
    const searchElement = document.getElementById('searchEntry')
    // Event listener starts searching as user types 
    searchElement.addEventListener('keyup', event => {
      // Accessing array holding all journal entries from API
      const allEntries = api.journalEntries
      // Storing user searched term and converting to lowercase for case insensitive
      const searchString = event.target.value.toLowerCase();
      // Filtering through array of all journal entries
      const filteredEntries = allEntries.filter(entry => {
        // Returning results matching searched term in either object properties converting to lowercase for case insensitive
        return (
          entry.date.includes(searchString) ||
          entry.concepts.toLowerCase().includes(searchString) || 
          entry.entry.toLowerCase().includes(searchString) ||
          entry.mood.toLowerCase().includes(searchString)
        )
      })
      // Passing-in array of filtered journal entries to be converted to HTML and displayed in the DOM
      displayEntries.renderEntries(filteredEntries)
    })
  }
}

// Export Module
export default searchEntry;