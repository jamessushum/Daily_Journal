const journalEntryCollection = [];

const journalEntry = {
  date: "May 29, 2020",
  concepts: "CSS Flexbox",
  entry: "Learned how to effectively use CSS flexbox.",
  mood: "Happy"
}

const journalEntry2 = {
  date: "June 1, 2020",
  concepts: "DOM Manipulation",
  entry: "Learned about document.querySelector() to select specific HTML elements in the DOM.",
  mood: "Ecstatic"
}

const journalEntry3 = {
  date: "June 2, 2020",
  concepts: "JavaScript objects, functions and iterators",
  entry: "Learned about the for...of JavaScript iterator and how it can be incorporated with objects and functions.",
  mood: "Ecstatic"
}

journalEntryCollection.push(journalEntry);
journalEntryCollection.push(journalEntry2);
journalEntryCollection.push(journalEntry3);


console.log(journalEntryCollection);