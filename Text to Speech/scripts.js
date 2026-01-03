let voices = [];
let voiceSelect = document.querySelector("select");

// Populate the voice list
window.speechSynthesis.onvoiceschanged = () => {
    const voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear existing to prevent duplicates
    
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

document.querySelector("button").addEventListener("click", () => {
    // 1. Always stop any current speech first
    window.speechSynthesis.cancel();

    // 2. Create a BRAND NEW instance here
    let msg = new SpeechSynthesisUtterance();
    
    // 3. Set the text and the voice
    msg.text = document.querySelector("textarea").value;
    msg.voice = voices[Number(voiceSelect.value)];
    
    // 4. Speak this specific message
    window.speechSynthesis.speak(msg);
});