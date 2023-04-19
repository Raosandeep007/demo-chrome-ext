const btn = document.querySelector(".actionBtn");

const pickColor = async () => {
  try {
    const eye = new EyeDropper();
    const eyeShowMe = await eye.open();
    console.log("eyeShowMe:", eyeShowMe);
  } catch (error) {
    console.log("error:", error);
  }
};

btn.addEventListener("click", async () => {
  //   chrome.storage.sync.get("myDummyData", ({ myDummyData }) => {
  //     console.log("myDummyData:", myDummyData);
  //   });

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: pickColor,
  });
});
