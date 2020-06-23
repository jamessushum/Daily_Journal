// Function creating new entry object per parameters passed-in
const createJournalEntry = (date, concepts, entry, mood) => {
  return {
    date: date,
    concepts: concepts,
    entry: entry,
    mood: mood
  }
}

export default createJournalEntry;