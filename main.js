/**
* Listens for the app launching then creates the window
*
* @see http://developer.chrome.com/apps/app.window.html
*/
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html', {
    id: 'localize',
    bounds: {
      width: 1430,
      height: 870
    }
  });
});