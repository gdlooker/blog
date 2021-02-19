var stream;
function hasUserMedia() {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
  return !!navigator.getUserMedia;
}

if (hasUserMedia()) {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  //get both video and audio streams from user"s camera
  navigator.getUserMedia(
    { video: true, audio: true },
    function (paramStream) {
      stream = paramStream;
      console.log("音视频流", stream);
      var video = document.querySelector("video");

      //insert stream into the video tag
      //video.src = window.URL.createObjectURL(stream);
      video.srcObject = stream;
    },
    function (err) {}
  );
} else {
  alert("Error. WebRTC is not supported!");
}
var btnGetTrackById = document.getElementById("btnGetTrackById");
var btnGetAudioTracks = document.getElementById("btnGetAudioTracks");
var btnGetVideoTracks = document.getElementById("btnGetVideoTracks");
var btnGetTracks = document.getElementById("btnGetTracks");
var btnRemoveAudioTrack = document.getElementById('btnRemoveAudioTrack')
var btnRemoveVideoTrack = document.getElementById('btnRemoveVideoTrack')

btnGetAudioTracks.addEventListener("click", function () {
  console.log("getAudioTracks");
  console.log(stream.getAudioTracks());
});

btnGetTrackById.addEventListener("click", function () {
  console.log("getTrackById");
  console.log(stream.getTrackById(stream.getAudioTracks()[0].id));
});

btnGetVideoTracks.addEventListener("click", function () {
  console.log("getVideoTracks()");
  console.log(stream.getVideoTracks());
});

btnGetTracks.addEventListener("click", function () {
  console.log("getTracks()");
  console.log(stream.getTracks());
});

btnRemoveAudioTrack.addEventListener("click", function(){ 
    console.log("removeAudioTrack()"); 
    stream.removeTrack(stream.getAudioTracks()[0]); 
 });
   
 btnRemoveVideoTrack.addEventListener("click", function(){ 
    console.log("removeVideoTrack()"); 
    stream.removeTrack(stream.getVideoTracks()[0]); 
 });