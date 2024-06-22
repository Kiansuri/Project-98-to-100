var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
var textbox = document.getElementById("textbox");

function start()
{
    textbox.innerHTML = ""
    recognition.start();
}

recognition.onresult = function(event) {
 console.log(event);

 var Content = event.result[0][0].transcript;
 textbox.innerHTML = Content ;
 console.log(Content);
 if (content =="take my selfie")
 {
    console.log("take my selfie---")
    speak();
 }

}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_selfie();
        save();
    } , 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    widthh:360,
    height:250,
    image_format : 'png',
    png_quality:90

}) ;


function take_selfie()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML =   '   <img id="selfie_image" src="'+data_uri+'"/>';

    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}