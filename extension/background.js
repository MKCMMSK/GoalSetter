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
    console.log(sender.tab);
  }
);

/*
useful tab keys:
  bool  active
  bool  audible
  int   id
*/