const toggleSwitch = document.getElementById('toggle');
const checkBox = document.getElementById('toggle-check');

const clock = document.getElementsByClassName('time')[0];

let startTime = null;
let timerInterval = null;


// chrome.tabs.remove(id) will close a tab by tabId.

// toggleSwitch.addEventListener('change', () => {
//     if (this.checked) startMonitoring();
//     else stopMonitoring();
// });

// Time function needs to be offloaded to background,
//  popup ceases to run once closed.  Duh.

toggleSwitch.addEventListener('change', () => {
    if (checkBox.checked) {
        startMonitoring();
    } else {
        stopMonitoring();
    }
});

const startMonitoring = () => {
    startTime = Date.now();
    // This suffers from drift, low priority,
    //  but is fixable later.
    timerInterval = setInterval(() => {
        let nextTime = 
            msToTime(Date.now() - startTime);
        clock.textContent = nextTime;
    }, 1000);
};

const stopMonitoring = () => {
    clearInterval(timerInterval);
};

const msToTime = (duration) => {
    let milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}