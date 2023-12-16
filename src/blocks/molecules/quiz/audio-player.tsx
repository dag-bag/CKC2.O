import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";

const QuizAudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const audioFilePath = "/music.mp3";

  return (
    <div className="absolute bottom-5 right-5 z-50">
      <ReactAudioPlayer muted={isMuted} src={audioFilePath} autoPlay />
      <button onClick={toggleMute} className="bg-white p-5  rounded-full">
        {isMuted ? <BiVolumeMute size={25} /> : <BiVolumeFull size={25} />}
      </button>
    </div>
  );
};

export default QuizAudioPlayer;
