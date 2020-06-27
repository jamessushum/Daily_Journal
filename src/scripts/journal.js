// Import Module
import api from "./data.js"
import displayEntries from "./entryList.js"
import allRadioButtons from "./radioButton.js"
import allDeleteButtons from "./deleteButton.js"
import editButton from "./editButton.js"
import submitButton from "./submitButton.js"
import searchEntry from "./searchEntry.js"

// Invoking method fetching entries from API then invoking method to display all entries in DOM passing-in fetch response as an argument
api.getEntriesData().then(response => {displayEntries.renderEntries(response)})

// Invoking method to either edit existing journal entry or submit new journal entry per user selection
submitButton.submitOrEditEntry();

// Invoking method to filter and display entries by mood selected from radio button
allRadioButtons.moodFilter();

// Invoking method to delete entry selected and displaying all remaining entries
allDeleteButtons.deleteEntry();

// Invoking method to retrieve selected journal entry to be edited and display in form fields
editButton.editEntry();

// Invoking method to filter and display journal entries by user searched term in search bar
searchEntry.searchListener();