let voices = []; 
let voiceSelect = document.querySelector("select");

function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    
    if (voices.length === 0) return;

    voiceSelect.innerHTML = ''; 
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
}

window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices(); 

document.querySelector("button").addEventListener("click", () => {
    window.speechSynthesis.cancel();

    let msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector("textarea").value;
    
    if (voices.length > 0) {
        msg.voice = voices[Number(voiceSelect.value)];
    }
    
    window.speechSynthesis.speak(msg);
});