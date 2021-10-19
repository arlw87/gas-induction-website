import Link from "next/link";
import classes from "./ContentCard.module.css";

const ContentCard = (props) => {
  return (
    <Link href={props.link}>
      <div className={classes.cardContainer}>
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
