//webcam code referenced  from https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm  //

var video = document.querySelector(".webcam");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia( {video: true})
  .then(function(stream) {
    video.srcObject = stream;
  })
}
