const maximizeGameElement = document.getElementById('maximizeGame');
const gameIframeElement = document.getElementById('gameIframe');

const theatreModeElement = document.getElementById('theatreMode');


const openFullscreen = (elem) => {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}


maximizeGameElement.addEventListener('click', function (event) {
    openFullscreen(gameIframeElement);
}, false);


theatreModeElement.addEventListener('click', function (event) {
    if(!gameIframeElement.style.width) {
        gameIframeElement.style.width = '100vw';
        return;
    }
    gameIframeElement.style.width = '';
}, false);