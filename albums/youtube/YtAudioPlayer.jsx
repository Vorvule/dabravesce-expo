import React from "react";

const YtAudioPlayer = () => {
  return (
    <div className="plyr__video-embed" id="AudioPlayer">
      <iframe
        title="YtAudioPlayer"
        id="AudioSource"
        src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
        allowFullScreen
        allowtransparency="true"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export { YtAudioPlayer };
