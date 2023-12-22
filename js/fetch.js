var endpoint, input;
 endpoint = 'spotify';
 input = document.getElementById("inputQueryEl");
 
 

export async function fetchDown() {
  errorMsg.innerHTML =""
  loading.style.display = "block";

 try{
 const res = await fetch('https://api.wizzteam.my.id/api/downloader?endpoint=' + endpoint + '&text=' + input.value);
        const data = await res.json();
 
  
  loading.style.display = "none";
      console.log(data);
      console.log(JSON.stringify(data));
      console.log(JSON.stringify(data.audio));
     
      judul.innerHTML = JSON.stringify(data.judul).toString().replace(/"/g,"");
     judulLagu.innerHTML = JSON.stringify(data.judul).toString().replace(/"/g,"");
      albumLagu.innerHTML = JSON.stringify(data.album).toString().replace(/"/g,"");
      artisLagu.innerHTML = JSON.stringify(data.artis[0]).toString().replace(/"/g,"");
      rilisLagu.innerHTML = JSON.stringify(data.rilis).toString().replace(/"/g,"");
      thumb.setAttribute('src', data.thumb);
      
      document.getElementById("downloadLink").setAttribute('href', data.audio);
      document.getElementById("downloadLink").setAttribute('download',"");
      
      inputQueryEl.removeAttribute("disabled", "");
     document.getElementById("resultContainer").style.opacity = "1";
    }
    catch(error) {
      console.log(error);
      inputQueryEl.removeAttribute("disabled", "");
      loading.style.display = "none";
      errorMsg.innerHTML ="// Error"
  
      
    }
    
    
}
    
