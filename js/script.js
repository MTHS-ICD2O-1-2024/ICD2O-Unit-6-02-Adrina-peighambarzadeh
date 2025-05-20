// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh
// Created on: May 2025
// This file contains the JS functions for index.html
"use strict"
/**
 * This function counts the number of clicking of cookie
 */
// eslint-disable-next-line no-unused-vars
function cookieClicker() {
  // input
  let cookieClick = localStorage.getItem("cookieClick")
  // process
  if (cookieClick != null) {
    cookieClick = Number(cookieClick) + 1
  } else {
    cookieClick = 1
  }
  localStorage.setItem("cookieClick", cookieClick)
  // output
  document.getElementById("answer").innerHTML = cookieClick + " Cookies"
}
