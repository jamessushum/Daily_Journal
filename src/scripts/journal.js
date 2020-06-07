// Array to hold parsed JSON entries object
let journalEntries = [];

// Function to fetch JSON entries object, then parse into JS, then store in journalEntries array
const getEntriesData = () => {
  return fetch("http://localhost:8088/entries").then((httpResponse) => {
    return httpResponse.json()
  }).then((arrayOfEntries) => {
    journalEntries = arrayOfEntries
  })
}

// Invoke getEntriesData then renderEntries to display entries in DOM
getEntriesData().then(() => {
  renderEntries()
})

// Convert journalEntries objects into HTML
const entriesHTMLConverter = (entriesObject) => {
  const entriesHTMLRepresentation = `<section class="entryLog__container"><h3>${entriesObject.concepts}</h3><div class="date">${entriesObject.date}</div><div class="mood">I'm feeling ${entriesObject.mood}</div><div class="entry">${entriesObject.entry}</div></section>`

  return entriesHTMLRepresentation
}

// Iterate through journalEntries object, convert each object into HTML, grab HTML DOM element, place converted HTML into DOM 
const renderEntries = () => {
  for (const currentEntryObject of journalEntries) {
    const entryHTML = entriesHTMLConverter(currentEntryObject)
    const htmlElement = document.querySelector(".entryLog")
    htmlElement.innerHTML += entryHTML
  }
}