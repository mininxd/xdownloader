import {spotify} from "./placeholder.js";
import {fetchDown} from "./fetch.js";
spotify();

var inputQueryEl = document.getElementById("inputQueryEl");

inputQueryEl.addEventListener("keydown",
  function(event){
    if (event.which == 13) {
      fetchDown();
      inputQueryEl.blur();
inputQueryEl.setAttribute("disabled", "");
    }
});



setTimeout(function() {
  alert("a");
fetch('http://api.wizzteam.my.id/api/downloader?endpoint=spotify&text=ambatukam', {
  
}).then(res => {
  return res.json()
}).then((data) => {
        console.log(data);
        alert(JSON.text(data))
}).catch((error) => {
        alert(JSON.text(error))
        console.log(error);
 })


}, 4000);