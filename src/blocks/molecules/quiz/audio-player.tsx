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
    <>
      <ReactAudioPlayer muted={isMuted} src={audioFilePath} autoPlay />
      <button
        onClick={toggleMute}
        className="bg-white md:p-5 p-3 text-black rounded-full"
      >
        {isMuted ? <BiVolumeMute size={25} /> : <BiVolumeFull size={25} />}
      </button>
    </>
  );
};

export default QuizAudioPlayer;
