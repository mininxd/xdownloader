var endpoint, input;
 endpoint = 'spotify';
 input = document.getElementById("inputQueryEl");


// Plain JS fetch
export async function fetchDown() {
  $('.loading').css('display','block');

 try{
 const response = await fetch('http://api.wizzteam.my.id/api/downloader?endpoint=' + endpoint + '&text=' + input.value);
        const data = await response.json();
 
  $('.loading').css('display','none');
      console.log(data);
      console.log(JSON.stringify(data));
      
      $('.judul').html(data.judul);
      $('#judulLagu').html(data.judul);
      $('#albumLagu').html(data.album);
      $('#artisLagu').html(data.artis[0]);
      $('#rilisLagu').html(data.rilis);
     
     
      $('.resultContainer').css('opacity','1')
      $("#inputQueryEl").removeAttr('disabled');
    }
    catch(error) {
      console.log(error);
      $("#inputQueryEl").removeAttr('disabled');
  $('.loading').css('display','none');
      
    }
    
    
}
    
