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
async function abc() {

 try{
  const res = await fetch('http://api.wizzteam.my.id/api/downloader?endpoint=spotify&text=ambatukam');
  const data = await res.json();
  
        console.log(data);
        alert(JSON.stringify(data))
} catch(error) {
        alert(JSON.stringify(error))
        console.log(error);
 }
}

abc();
}, 4000);