// Api object houses journalEntries key with value of empty array to hold parsed JSON data as well as getEntriesData method to fetch JSON data then parse data to JS and then assign journalEntries array with parsed data
const api = {
  journalEntries: [],
  getEntriesData() {
    return fetch("http://localhost:8088/entries")
      .then(httpResponse => {
        return httpResponse.json()
      })
        .then(arrayOfEntries => {
          this.journalEntries = arrayOfEntries
        })
  }
}