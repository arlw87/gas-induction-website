import classes from "./VideoContent.module.css";

const VideoContent = (props) => {
  const videoSource = props.media;

  return (
    <div className={classes.container}>
      <iframe
        className={classes.videoPlayer}
        src={videoSource}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen=""
      ></iframe>
    </div>
  );
};

export default VideoContent;
