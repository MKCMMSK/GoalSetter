const toggleSwitch = document.getElementById('toggle');

// chrome.tabs.remove(id) will close a tab by tabId.

// toggleSwitch.addEventListener('change', () => {
//     if (this.checked) startMonitoring();
//     else stopMonitoring();
// });


// ************************
// This is all garbage now.
// ************************

const startMonitoring = () => {
    // When a tab is created, clicked on,
    //  or otherwise becomes active.
    chrome.tabs.onActivated.addListener((activeInfo) => {
        activeTabID = activeInfo.tabId;
        activeWindowId = activeInfo.windowId;
        console.log(activeTabID);
        console.log(activeWindowId);
    });

    // When any tab is updated, not neccesarily
    //  a tab the user is viewing.
    chrome.tabs.onUpdated.addListener(
        (tabId, changeInfo, tab) => {

        }
    );
};

const endMonitoring = () => {

};