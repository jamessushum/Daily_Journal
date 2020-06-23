// Import Module
import api from "./data.js"
import displayEntries from "./entryList.js"
import createJournalEntry from "./createEntry.js"
import allRadioButtons from "./radioButton.js"
import allDeleteButtons from "./deleteButton.js"

// Invoking method fetching entries from API then invoking method to display all entries in DOM passing-in fetch response as an argument
api.getEntriesData().then(response => {displayEntries.renderEntries(response)})

// Accessing the submit button HTML element in the DOM
const submitElement = document.getElementById("submit")

// Event listener when submit button is clicked
submitElement.addEventListener('click', (clickEvent) => {

  // Accessing the values of each user input
  const dateInput = document.getElementById("date").value
  const conceptsInput = document.getElementById("concepts").value
  const journalEntryInput = document.getElementById("journal-entry").value
  const moodInput = document.getElementById("mood").value

  // Conditional check if each input field is populated
  if (dateInput == "" || conceptsInput == "" || journalEntryInput == "" || moodInput == "") {
    alert("Please complete all fields")
  } else {
    // Invoking method creating new entry object passing-in user input values as arguments
    const journalEntryObject = createJournalEntry(dateInput, conceptsInput, journalEntryInput, moodInput)
    
    // Invoking method saving new entry object in API then invoking method to display all entries in DOM passing-in fetch response as an argument
    api.saveJournalEntries(journalEntryObject).then((response) => displayEntries.renderEntries(response))
  }
})

// Invoking method to filter and display entries by mood selected from radio button
allRadioButtons.moodFilter();

// Invoking method to delete entry selected and displaying all remaining entries
allDeleteButtons.deleteEntry();