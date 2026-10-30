/*
 * FAQ Accordion
 * Uses event delegation, updates accessible state, and includes defensive checks.
 * Native buttons provide keyboard support (Tab, Enter and Space).
 */
(() => {
  "use strict";
  const faqList = document.querySelector(".faq-list");

  if (!faqList) {
    console.warn("FAQ Accordion: .faq-list element was not found.");
    return;
  }

  const buttons = Array.from(faqList.querySelectorAll(".faq-question"));
  if (buttons.length === 0) {
    console.warn("FAQ Accordion: no question buttons were found.");
    return;
  }

  // Mark the page enhanced only after JavaScript successfully starts.
  document.documentElement.classList.add("js-enabled");

  function setExpanded(button, expanded) {
    const answerId = button.getAttribute("aria-controls");
    const answer = answerId ? document.getElementById(answerId) : null;
    if (!answer) {
      console.warn("FAQ Accordion: answer panel is missing.", button);
      button.disabled = true;
      return;
    }
    button.setAttribute("aria-expanded", String(expanded));
    answer.hidden = !expanded;
  }

  buttons.forEach((button) => {
    const answerId = button.getAttribute("aria-controls");
    if (!answerId || !document.getElementById(answerId)) {
      console.warn("FAQ Accordion: invalid question-to-answer link.", button);
      button.disabled = true;
      return;
    }
    setExpanded(button, button.getAttribute("aria-expanded") === "true");
  });

  faqList.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-question");
    if (!button || !faqList.contains(button) || button.disabled) return;

    const wasExpanded = button.getAttribute("aria-expanded") === "true";
    buttons.forEach((item) => setExpanded(item, false));
    if (!wasExpanded) setExpanded(button, true);
  });
})();
