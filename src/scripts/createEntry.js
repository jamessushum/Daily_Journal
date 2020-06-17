const createJournalEntry = (date, concepts, entry, mood) => {
  return {
    date: date,
    concepts: concepts,
    entry: entry,
    mood: mood
  }
}

export default createJournalEntry;