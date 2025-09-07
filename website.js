"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Fun idea to hide my email address from spammers
  // From here: https://spencermortensen.com/articles/email-obfuscation/#link-entity
  const a = document.getElementById("link-conversion");
  a.setAttribute(
    "href",
    a
      .getAttribute("href")
      .replace("-", ":")
      .replace("-", "@")
      .replace("send", "mailto")
      .replace("me", "andre")
      .replace("an-email/", "lamelas.org")
  );

  // Accordion menus
  const baseScroll = 150;
  const defaultTransitionDuration = getComputedStyle(document.documentElement).getPropertyValue("--transition-duration").trim().replace("ms", "");

  const h2Elements = document.querySelectorAll("h2");
  h2Elements.forEach((h2) => {
    h2.classList.add("closed");
    const panel = h2.nextElementSibling;
    if (!panel) return;
    panel.classList.add("collapsible", "collapsed");
    panel.style.maxHeight = "0px";

    h2.onclick = function () {
      const content = this.nextElementSibling;
      if (!content) return;

      const transitionDuration = content.scrollHeight/baseScroll * defaultTransitionDuration;
      const speed = transitionDuration > 1500 ? 1500 : transitionDuration;
      
      content.classList.toggle("collapsed");
      this.classList.toggle("closed");

      if (content.classList.contains("collapsed")) {
        content.style.maxHeight = "0px";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.transitionDuration = speed + "ms";
      }
    };
  });
});
