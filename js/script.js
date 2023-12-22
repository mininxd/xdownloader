import {spotify} from "./placeholder.js";
spotify();
import {fetchDown} from "./fetch.js";

var inputQuery = document.getElementById("inputQueryEl");

inputQuery.addEventListener("keydown",
  function(event){
    if (event.which == 13) {
      fetchDown();
      inputQuery.blur();
inputQuery.setAttribute("disabled", "");
    }
});


