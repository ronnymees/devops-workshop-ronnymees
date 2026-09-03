"use strict";

const button = document.querySelector("button");
const message =
  document.querySelector("#message") ||
  document.querySelector(".message") ||
  document.querySelector('[role="status"]');

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent =
      "Fine. Welcome to the workshop. Grab a seat and let's get on with it.";
  });
}