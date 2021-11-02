import classes from "./VideoContent.module.css";

const VideoContent = (props) => {
  const videoSource = props.media;

  return (
    <div className={classes.container}>
      <iframe
        className={classes.videoPlayer}
        src={videoSource}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen=""
      ></iframe>
    </div>
  );
};

export default VideoContent;
