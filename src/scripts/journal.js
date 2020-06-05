const journalEntries = [
  {
    date: "May 29, 2020",
    concepts: "CSS Flexbox",
    entry: "Learned how to effectively use CSS flexbox.",
    mood: "Happy"
  },
  {
    date: "June 1, 2020",
    concepts: "DOM Manipulation",
    entry: "Learned about document.querySelector() to select specific HTML elements in the DOM.",
    mood: "Ecstatic"
  },
  {
    date: "June 2, 2020",
    concepts: "JavaScript objects, functions and iterators",
    entry: "Learned about the for...of JavaScript iterator and how it can be incorporated with objects and functions.",
    mood: "Ecstatic"
  }
]

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

renderEntries();