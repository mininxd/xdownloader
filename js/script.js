import {spotify} from "./placeholder.js";
import {fetchDown} from "./fetch.js";
spotify();

var inputQueryEl = document.getElementById("inputQueryEl");

inputQueryEl.addEventListener("keyup",
  function(event){
    if (event.which == 13) {
      fetchDown();
      inputQueryEl.blur();
inputQueryEl.setAttribute("disabled", "");
    }
});


