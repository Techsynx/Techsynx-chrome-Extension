document.addEventListener("DOMContentLoaded", function () {
    const shareWorkflowButton = document.getElementById("share-workflow");
    shareWorkflowButton.addEventListener("click", function () {
      // Add code here to share company workflow
      // For example, you can use the Chrome extension's storage API to store and retrieve workflow data
      chrome.storage.sync.get("workflowData", function (items) {
        const workflowData = items.workflowData;
        // Share workflow data with other employees or systems
        console.log("Sharing workflow data:", workflowData);
      });
    });
  });