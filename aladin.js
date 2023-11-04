// Load Aladin Lite library
(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js';
  script.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(script);
})();

// Initialize Aladin Lite after library is loaded
function initializeAladin() {
  let aladin;
  A.init.then(() => {
    aladin = A.aladin('#aladin-lite-div', { survey: "P/DSS2/color", fov: 0.1, target: "103.269 16.929" });
  });
}

// Execute initialization once the window has loaded
window.onload = initializeAladin;
