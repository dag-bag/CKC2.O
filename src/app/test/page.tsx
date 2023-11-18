import VideoPlayer from "@/blocks/temporary/Video";

const WatchPage = () => {
  const userId = "user123"; // Replace with your authentication logic
  const videoId = "video456"; // Replace with the current video being watched
  const videoDuration = 300; // Replace with the actual duration of the video in seconds

  return (
    <div>
      <h1>Watch Video</h1>
      <VideoPlayer
        userId={userId}
        videoId={videoId}
        videoDuration={videoDuration}
      />
    </div>
  );
};

export default WatchPage;
