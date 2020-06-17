// Runs on every page.

// Need to pull information for what type of
//  content the current page is.

// Just start with tab name and URL.
let URL = document.URL;
let tabName = document.title;
// This runs anew on each page.  This means we
//  can just shunt the two values to background.js
//  using messages.
chrome.runtime.sendMessage({greeting: "hello"}, (response) => {
    alert(response.farewell);
});


// Trigger alerts based on what user is doing.
// Will have to send messages from background
//  to call functions, maybe use toasts to display?