let myDummyData = { brand: "Devsense", owner: "Sandeep", tech: "JS" };

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ myDummyData });
});
