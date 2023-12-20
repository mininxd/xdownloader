var endpoint, input;
endpoint = 'spotify';
input = document.getElementById("inputQueryEl");


// Plain JS fetch
export function fetchDown() {
  $('.loading').css('display','block');
  
fetch('http://api.wizzteam.my.id/api/downloader?endpoint='+ endpoint + '&text=' + input.value,  {
method:'GET'
}).then((res) => {
  return res.json();
}).then((data) => {
  $('.loading').css('display','none');
      console.log(data);
      console.log(JSON.stringify(data));
      
      $('.judul').html(data.judul);
      $('.judulLagu').html(data.judul);
      $('.artisLagu').html(data.artis);
      $('.albumLagu').html(data.album);
      $('.rilisLagu').html(data.rilis);
      
      
      $('.resultContainer').css('opacity','1')
      $("#inputQueryEl").removeAttr('disabled');
    })
    .catch((error) => {
      console.log(error);
      $("#inputQueryEl").removeAttr('disabled');
  $('.loading').css('display','none');
      
    }
    
    );
}
    
