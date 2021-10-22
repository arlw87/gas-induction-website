import { getStaticProps } from "../../pages/non-clincal/[nonClinicalPage]";
import classes from "./ContentSectionIndicator.module.css";

const ContentSectionIndicator = (props) => {
  const backgroundColor = {
    backgroundColor: props.color,
  };

  return (
    <div style={backgroundColor} className={classes.banner}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default ContentSectionIndicator;
