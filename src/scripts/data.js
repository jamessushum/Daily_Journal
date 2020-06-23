// API object houses methods to get, save, delete and edit/put data in API
const api = {
  journalEntries: [],
  getEntriesData() {
    return fetch("http://localhost:8088/entries")
      .then(response => response.json())
        .then(arrayOfEntries => {
          this.journalEntries = arrayOfEntries
          return arrayOfEntries
        })
  },
  saveJournalEntries(newEntryObject) {
    return fetch("http://localhost:8088/entries", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newEntryObject)
    })
  },
  deleteJournalEntry(entryId) {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
  },
  getSingleEntry(entryId) {
    return fetch(`http://localhost:8088/entries/${entryId}`)
      .then(response => response.json())
  },
  editJournalEntry(entryId, updatedEntryObject) {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedEntryObject)
    })
  }
}

// Export Module
export default api;