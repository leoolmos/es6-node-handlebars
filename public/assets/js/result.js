"use strict";

function result() {

  var postcode = document.getElementsByName("postcode")[0];

  if (postcode.value) {
    window.location.replace("/results/" + postcode.value.toLowerCase());
  } else {
    postcode.className = "error";
  }

  return false;
}