// Import Module
import api from "./data.js"
import displayEntries from "./entryList.js"
import createJournalEntry from "./createEntry.js"
import allRadioButtons from "./radioButton.js"

// Invoke getEntriesData method in api object then invoke renderEntries method in displayEntries object passing-in journalEntries array to display all entries in DOM
api.getEntriesData().then(() => {displayEntries.renderEntries(api.journalEntries)})

// Grabbing the submit button HTML element in the DOM
const submitElement = document.getElementById("submit")

// Add event listener when submit button is clicked
submitElement.addEventListener('click', (clickEvent) => {

  // Grabbing the value of each user input
  const dateInput = document.getElementById("date").value
  const conceptsInput = document.getElementById("concepts").value
  const journalEntryInput = document.getElementById("journal-entry").value
  const moodInput = document.getElementById("mood").value

  // Conditional check to see if each input field is populated
  if (dateInput == "" || conceptsInput == "" || journalEntryInput == "" || moodInput == "") {
    alert("Please complete all fields")
  } else {
    // Invoke createJournalEntry function creating new journal object passing in user input values
    const journalEntryObject = createJournalEntry(dateInput, conceptsInput, journalEntryInput, moodInput)
    
    // Invoke saveJournalEntries method saving new object to API passing in newly created journal object
    api.saveJournalEntries(journalEntryObject)
  }
})

// Invoking moodFilter method in allRadioButtons object to activate filter journal entries by mood feature
allRadioButtons.moodFilter();