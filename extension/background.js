chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({})],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

let activeTabId = null;
let activeWindowId = null;

let timer = 0;

chrome.runtime.onMessage.addListener(
  (request, sender, response) => {
    // Do we even need to track these with the
    //  messaging system we're given?
    // Yes, because this only updates on page loads.
    // Maybe not, this is all from the tab object.
    //  We need the onPageLoad bit to make sure
    //  data is sent AFTER new pages load, but
    //  on old tabs, this data should all be there 
    //  and up to date.
    activeTabId = sender.tab.id;
    activeWindowId = sender.tab.windowId;

    console.log(
      `You have loaded a new page:
      windowId: ${sender.tab.windowId}
      tabId: ${sender.tab.id}
      tabName: ${sender.tab.title}
      tabUrl: ${sender.tab.url}`
    );
  }
);

chrome.tabs.onActivated.addListener(
  tab => {
    console.log(tab);
    chrome.tabs.get(tab.tabId, tab => {
      activeTabId = sender.tab.id;
      activeWindowId = sender.tab.windowId;
      console.log(
        `You have changed tabs:
        windowId: ${tab.windowId}
        tabId: ${tab.id}
        tabName: ${tab.title}
        tabUrl: ${tab.url}`
      );
    });
  }
);

/*
useful tab keys:
  bool    active
  bool    audible?
  int     id
  int     windowId
  string  title
  string  url
*/