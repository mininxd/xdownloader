var endpoint, input, judul, judulLagu, albumLagu, rilisLagu, artisLagu, loading, thumb;
 endpoint = 'spotify';
 input = document.getElementById("inputQueryEl");
 judul = document.getElementById("judul");
 judulLagu = document.getElementById("judulLagu");
 albumLagu  = document.getElementById("albumLagu");
 artisLagu  = document.getElementById("artisLagu");
 rilisLagu  = document.getElementById("rilisLagu");
 loading = document.getElementById('loading');
 thumb = document.getElementById("thumb");
 
 
 
 
// Plain JS fetch
export async function fetchDown() {
  loading.style.display = "block";

 try{
 const res = await fetch('http://api.wizzteam.my.id/api/downloader?endpoint=' + endpoint + '&text=' + input.value);
        const data = await res.json();
 
  
  loading.style.display = "none";
      console.log(data);
      console.log(JSON.stringify(data));
      
      judul.innerHTML = JSON.text(data.judul);
     judulLagu.innerHTML = JSON.text(data.judul);
      albumLagu.innerHTML = JSON.text(data.album);
      artisLagu.innerHTML = JSON.text(data.artis[0]);
      rilisLagu.innerHTML = JSON.text(data.rilis);
      thumb.setAttribute('src', data.thumb);
      
     
     document.getElementById("resultContainer").style.opacity = "1";
    }
    catch(error) {
      console.log(error);
      inputQueryEl.removeAttribute("disabled", "");
      loading.style.display = "none";
  
      
    }
    
    
}
    
