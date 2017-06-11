function populateDB(){
  const NUMBER_OF_VIDEOS = 15;
  var requests = new Array(NUMBER_OF_VIDEOS);

  clearDB();
  for (var i = 0; i < requests.length; i++) {
    (function(i){
      requests[i] = new XMLHttpRequest();
      requests[i].open('GET', 'assets/video/'+ (i+1) +'.mp4', true);
      requests[i].responseType = 'blob';

      requests[i].addEventListener('readystatechange', function() {
          if (requests[i].readyState === 3){

            setStatus('Now downloading ' + (i+1) +'.mp4...');
          }
          else if (requests[i].readyState === 4) { // readyState DONE
              localforage.setItem((i+1) + '.mp4', requests[i].response).then(function(video) {
                  setStatus('Downloaded '+ (i+1) +'.mp4');
                  if (i+1 === NUMBER_OF_VIDEOS){
                    localforage.setItem('status', 'downloaded');
                    setTimeout(function(){
                      updateDownloadedStatus();
                    }, 500);
                  }
                  else{
                    requests[i + 1].send();
                  }
              }).catch(function(err) {
                console.log(err);
                setStatus('A problem ocurred! Try again!');
              });
          }
      });
    })(i);
  }
  requests[0].send();
  localforage.setItem('status', 'downloading')
}

function clearDB(){
  localforage.clear();
  setStatus('Database cleared!');
  updateDownloadedStatus();
}

function setStatus(status){
  var el = document.getElementById('status');
  el.innerHTML = status;
}

function updateDownloadedStatus(){
  localforage.getItem('status').then(function(status){
    var el = document.getElementById('downloaded');
    if(status == 'downloading'){
      el.innerHTML = 'downloading';
    }
    else if (status == 'downloaded'){
      el.innerHTML = 'downloaded';
    }
    else{
      el.innerHTML = 'not downloaded';
    }
  });
}

updateDownloadedStatus();
