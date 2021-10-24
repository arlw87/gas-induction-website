import Link from "next/link";
import classes from "./ContentCard.module.css";
import { getMediaTypeColor } from "../../lib/helperFunctions";

const ContentCard = (props) => {
  const color = getMediaTypeColor(props.type);

  const typeStyle = {
    backgroundColor: color,
  };

  const cardColor = {
    backgroundColor: props.backgroundColor,
  };

  return (
    <Link href={props.link}>
      <div className={classes.cardContainer} style={cardColor}>
        <h5 style={typeStyle} className={classes.type}>
          {props.type}
        </h5>
        <div className={classes.titleContainer}>
          <h1>{props.title}</h1>
        </div>
        <div className={classes.summaryContainer}>
          <p>{props.summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
