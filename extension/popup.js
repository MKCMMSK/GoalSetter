const toggleSwitch = document.getElementById('toggle');

let activeTabId = null;
let activeWindowId = null;



toggleSwitch.addEventListener((e) => {

});

const startMonitoring = () => {
    chrome.tabs.onActivated.addListener((tab) => {
        activeTabID = tab.tabId;
        activeWindowId = tab.windowId;
    })
};

const endMonitoring = () => {

};