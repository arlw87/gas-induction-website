//display pdf or video content
//decide which one and this select either a video compontent or a pdf component
import { getStaticProps } from "../../pages/non-clincal";
import PDFContent from "./PDFContent";

const Content = (props) => {
  return <PDFContent media={props.media}></PDFContent>;
};

export default Content;
