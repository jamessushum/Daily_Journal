// API object houses methods to get, save, delete data in API
const api = {
  journalEntries: [],
  getEntriesData() {
    return fetch("http://localhost:8088/entries")
      .then(httpResponse => {
        return httpResponse.json()
      })
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
  }
}

// Export Module
export default api;