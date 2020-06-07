// DisplayEntries object houses renderEntries method that iterates through journalEntries object, converts each object into HTML, grabs HTML DOM element and places HTML into DOM element
const displayEntries = {
  renderEntries() {
    for (const currentEntryObject of api.journalEntries) {
      const entryHTML = converter.entriesHTMLConverter(currentEntryObject)
      const htmlElement = document.querySelector(".entryLog")
      htmlElement.innerHTML += entryHTML
    }
  }
}