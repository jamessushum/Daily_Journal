// Import Module
import converter from "./entryComponent.js"

// DisplayEntries object houses renderEntries method that iterates through passed-in array of entries objects, converts each object into HTML, grabs HTML DOM element and places HTML into DOM element
const displayEntries = {
  renderEntries(arrayOfEntries) {

    const htmlElement = document.querySelector(".entryLog")
    // Clears list of entries at start of every function call
    htmlElement.innerHTML = ""

    for (const currentEntryObject of arrayOfEntries) {
      const entryHTML = converter.entriesHTMLConverter(currentEntryObject)
      htmlElement.innerHTML += entryHTML
    }
  }
}

// Export Module
export default displayEntries;