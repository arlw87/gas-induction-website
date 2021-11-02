import classes from "./FeatureCard.module.css";
import { getMediaTypeColor } from "../../lib/helperFunctions";
import Link from "next/link";

const FeatureCard = (props) => {
  const featImage = {
    backgroundImage: "url(" + props.image + ")",
  };

  const color = getMediaTypeColor(props.media);

  const typeStyle = {
    backgroundColor: color,
  };

  return (
    <Link href={props.link} passHref>
      <div className={classes.card}>
        <div style={typeStyle} className={classes.media}>
          {props.media.toUpperCase()}
        </div>
        <div style={featImage} className={classes.contentImage}></div>
        <div className={classes.textContainer}>
          <h3>{props.article}</h3>
          <p> {props.summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
