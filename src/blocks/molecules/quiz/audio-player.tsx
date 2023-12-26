import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";

const QuizAudioPlayer = () => {
  const audioFilePath = "/music.mp3";
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <>
      <ReactAudioPlayer loop muted={isMuted} src={audioFilePath} autoPlay />
      <button
        onClick={toggleMute}
        className="bg-black md:p-5 p-3 text-white rounded-full"
      >
        {isMuted ? <BiVolumeMute size={25} /> : <BiVolumeFull size={25} />}
      </button>
    </>
  );
};

export default QuizAudioPlayer;
