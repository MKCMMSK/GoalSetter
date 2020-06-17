const toggleSwitch = document.getElementById('toggle');
const checkBox = document.getElementById('toggle-check');

// chrome.tabs.remove(id) will close a tab by tabId.

// toggleSwitch.addEventListener('change', () => {
//     if (this.checked) startMonitoring();
//     else stopMonitoring();
// });

toggleSwitch.addEventListener('change', () => {
    if (checkBox.checked) {
        startMonitoring();
    } else {
        stopMonitoring();
    }
});

const startMonitoring = () => {
    
};

const stopMonitoring = () => {
    
};