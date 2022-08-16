import audioYoutube from "./audio_source";

const setAudioSource = () => {
  const AudioElement = document.getElementById("AudioPlayer");
  const SourceElement = document.getElementById("AudioSource");

  const albumIndex = localStorage.albumIndex;
  const bookIndex = localStorage.bookIndex;
  const chapterIndex = localStorage.chapterIndex;

  const audioSource = audioYoutube[albumIndex][bookIndex][chapterIndex];
  const youtubeUrl = `https://www.youtube.com/embed/${audioSource}`;

  if (youtubeUrl) {
    AudioElement.classList.remove("w3-hide");
    SourceElement.src = youtubeUrl;
    AudioElement.load();
  } else {
    AudioElement.classList.add("w3-hide");
  }
};

export { setAudioSource };
