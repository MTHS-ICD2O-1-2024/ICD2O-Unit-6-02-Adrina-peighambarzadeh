// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Adrina Peighambarzadeh
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict";

/**
 * This function calculates and updates the number of cookies
 */
function cookieClicker() {
  // Retrieve the current cookie count from localStorage
  let cookieClick = localStorage.getItem("cookie-click");

  // If there is a stored cookie count, increment it by 1
  if (cookieClick) {
    cookieClick = Number(cookieClick) + 1;
  } else {
    // Otherwise, initialize cookie count to 1
    cookieClick = 1;
  }

  // Save the updated cookie count back to localStorage
  localStorage.setItem("cookie-click", cookieClick.toString());

  // Update the display with the new cookie count
  checkCookies(cookieClick);
}

/**
 * This function updates the displayed number of cookies
 * @param {number} cookieCount - The current count of cookies
 */
function checkCookies(cookieCount) {
  // Check if the element with id "answer" exists
  const answerElement = document.getElementById("answer");

  if (answerElement) {
    if (cookieCount === 1) {
      answerElement.innerHTML = cookieCount + " cookie"; // Singular form
    } else {
      answerElement.innerHTML = cookieCount + " cookies"; // Plural form
    }
  }
}

// Check and display the initial number of cookies when the page loads
window.onload = function () {
  const cookieClick = localStorage.getItem("cookie-click");
  if (cookieClick) {
    checkCookies(Number(cookieClick)); // Display the saved cookie count
  } else {
    checkCookies(0); // If no cookies in localStorage, start from 0
  }
};
