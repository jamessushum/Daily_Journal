// Converter object houses entriesHTMLConverter method to transcribe entries object data into HTML string
const converter = {
  entriesHTMLConverter(entriesObject) {
    const entriesHTMLRepresentation = `
    <section class="entryLog__container">
      <h3>${entriesObject.concepts}</h3>
      <div class="date">${entriesObject.date}</div>
      <div class="mood">I'm feeling ${entriesObject.mood}</div>
      <div class="entry">${entriesObject.entry}</div>
      <button id="editEntry--${entriesObject.id}">Edit Entry</button>
      <button id="deleteEntry--${entriesObject.id}">Delete Entry</button>
    </section>
    `
    
    return entriesHTMLRepresentation
  }
}

// Export Module
export default converter; 