import ReactAudioPlayer from "react-audio-player";

const QuizAudioPlayer = () => {
  return (
    <div className="absolute top-0 z-50">
      <audio id="audioPlayer" controls>
        <source src="/public/music/quiz-background.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default QuizAudioPlayer;
