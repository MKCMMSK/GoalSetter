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

chrome.runtime.onMessage.addListener(
  (request, sender, response) => {
    console.log("background.js got a message")
    console.log(request, sender, response)

    // Do we even need to track these with the
    //  messaging system we're given?
    // Yes, because this only updates on page loads.
    // Maybe not, this is all from the tab object.
    //  We need the onPageLoad bit to make sure
    //  data is sent AFTER new pages load, but
    //  on old tabs, this data should all be there 
    //  and up to date.
    // MESSAGE FROM TAB
    if (sender.tab) {
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
    // MESSAGES FROM EXTENSION

    if (request.action === "startWork") {
      startTime = Date.now();
      response({startTime: startTime});
    } else if (request.action === "stopWork") {
      startTime = null;
      response();
    } else if (request.action === "getStatus") {
      response({startTime: startTime});
    } else if (request.action === "retrieveData") {
      response({activeTabId, activeWindowId, tabName: sender.tab.title, tabUrl: sender.tab.url});
    }
  }
);
console.log("this is background.js reporting for duty");

chrome.tabs.onActivated.addListener(
  tab => {
    console.log(tab);
    chrome.tabs.get(tab.tabId, tab => {
      activeTabId = tab.id;
      activeWindowId = tab.windowId;
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


/* TIMER */

let startTime = null;
let interval = 1000;

let workActive = false;

const startTimer = () => {
  startTime = Date.now();
};
/*
(function() {
  const tabStorage = {};
  const networkFilters = {
      urls: [
          "*://developer.mozilla.org/*"
      ]
  };

  chrome.webRequest.onBeforeRequest.addListener((details) => {
      const { tabId, requestId } = details;
      if (!tabStorage.hasOwnProperty(tabId)) {
          return;
      }

      tabStorage[tabId].requests[requestId] = {
          requestId: requestId,
          url: details.url,
          startTime: details.timeStamp,
          status: 'pending'
      };
      console.log(tabStorage[tabId].requests[requestId]);
  }, networkFilters);

  chrome.webRequest.onCompleted.addListener((details) => {
      const { tabId, requestId } = details;
      if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {
          return;
      }

      const request = tabStorage[tabId].requests[requestId];

      Object.assign(request, {
          endTime: details.timeStamp,
          requestDuration: details.timeStamp - request.startTime,
          status: 'complete'
      });
      console.log(tabStorage[tabId].requests[details.requestId]);
  }, networkFilters);

  chrome.webRequest.onErrorOccurred.addListener((details)=> {
      const { tabId, requestId } = details;
      if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {
          return;
      }

      const request = tabStorage[tabId].requests[requestId];
      Object.assign(request, {
          endTime: details.timeStamp,           
          status: 'error',
      });
      console.log(tabStorage[tabId].requests[requestId]);
  }, networkFilters);

  chrome.tabs.onActivated.addListener((tab) => {
      const tabId = tab ? tab.tabId : chrome.tabs.TAB_ID_NONE;
      if (!tabStorage.hasOwnProperty(tabId)) {
          tabStorage[tabId] = {
              id: tabId,
              requests: {},
              registerTime: new Date().getTime()
          };
      }
  });
  chrome.tabs.onRemoved.addListener((tab) => {
      const tabId = tab.tabId;
      if (!tabStorage.hasOwnProperty(tabId)) {
          return;
      }
      tabStorage[tabId] = null;
  });
}());
*/