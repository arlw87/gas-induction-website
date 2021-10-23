//display pdf or video content
//decide which one and this select either a video compontent or a pdf component
import PDFContent from "./PDFContent";
import VideoContent from "./VideoContent";

const Content = (props) => {
  //content display based on type of media
  if (props.type.toUpperCase() === "VIDEO") {
    return <VideoContent media={props.media}></VideoContent>;
  } else if (props.type.toUpperCase() == "PDF") {
    return <PDFContent media={props.media}></PDFContent>;
  } else {
    return <h1> Issue working content </h1>;
  }
};

export default Content;
