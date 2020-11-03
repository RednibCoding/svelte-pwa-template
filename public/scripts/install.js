'use strict';

window.addEventListener("appinstalled", (evt) => {
  // Log install to analytics
  console.log("INSTALL: Success");
  // Do stuff here when app has been installed
});

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("👍", "beforeinstallprompt", event);
  // Stash the event so it can be accessed later.
  // To trigger it, call: window.deferredPrompt.prompt();
  window.deferredPrompt = event;
});

// Detect how the app was launched (browser-tab or standalone)
window.addEventListener("DOMContentLoaded", () => {
  let displayMode = "browser-tab";

  if (navigator.standalone) {
    displayMode = "standalone-ios";
  }
  if (window.matchMedia("(display-mode: standalone)").matches) {
    displayMode = "standalone";
  }
  // Log launch display mode to analytics
  console.log("DISPLAY_MODE_LAUNCH:", displayMode);

  // Do stuff here depending on displayMode
});