// Invoke getEntriesData method in api object then invoke renderEntries method in displayEntries object to display entries in DOM
api.getEntriesData().then(() => {displayEntries.renderEntries()})