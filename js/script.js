import {spotify} from "./placeholder.js";
spotify();

import {fetchDown} from "./fetch.js";

var inputQueryEl = document.getElementById("inputQueryEl");

inputQueryEl.addEventListener("keydown",
  function(event){
    if (event.which == 13) {
      fetchDown();
      inputQueryEl.blur();
inputQueryEl.setAttribute("disabled", "");
    }
});


