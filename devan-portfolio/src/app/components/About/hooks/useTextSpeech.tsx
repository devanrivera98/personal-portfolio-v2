export default function useTextSpeech() {
  const utterThis = new SpeechSynthesisUtterance("Devan Rivera");
  utterThis.lang = "en-US";
  speechSynthesis.speak(utterThis);
}
